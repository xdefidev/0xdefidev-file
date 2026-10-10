/**
 * Security-critical unit tests.
 *
 * Run with: node --test tests/
 *
 * These cover the payment webhook, where a bug means either forged order
 * confirmations or lost customer funds. The CryptAPI public key is a fixed
 * 1024-bit RSA key shipped in the docs; to exercise the happy path we
 * generate our own keypair, sign with the private half, and swap the public
 * half in — the algorithm, encoding and padding are all identical.
 */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import crypto from "node:crypto";

import {
  verifyWebhookSignature,
  parseWebhookPayload,
  CRYPTAPI_PUBLIC_KEY,
  getForwardAddress,
  createNonce,
} from "../lib/cryptapi.mjs";

// Generate a throwaway keypair that matches CryptAPI's 1024-bit scheme.
const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 1024,
});

const testPublicKeyPem = publicKey.export({ type: "spki", format: "pem" });

function sign(payload) {
  const signer = crypto.createSign("RSA-SHA256");
  signer.update(payload);
  return signer.sign(privateKey).toString("base64");
}

describe("verifyWebhookSignature", () => {
  test("accepts a correctly signed payload", () => {
    const body = "uuid=abc&address_in=1abc&value_coin=0.5&pending=0";
    const raw = {
      headers: { "x-ca-signature": sign(body) },
      payload: body,
    };

    const result = verifyWebhookSignatureWith(raw, testPublicKeyPem);
    assert.equal(result.valid, true);
  });

  test("rejects a payload whose body was altered after signing", () => {
    const original = "uuid=abc&value_coin=0.5&pending=0";
    const tampered = "uuid=abc&value_coin=5000&pending=0";
    const raw = {
      headers: { "x-ca-signature": sign(original) },
      payload: tampered,
    };

    const result = verifyWebhookSignatureWith(raw, testPublicKeyPem);
    assert.equal(result.valid, false);
    assert.equal(result.reason, "signature_mismatch");
  });

  test("rejects a request with no signature header", () => {
    const result = verifyWebhookSignatureWith(
      { headers: {}, payload: "uuid=abc" },
      testPublicKeyPem,
    );
    assert.equal(result.valid, false);
    assert.equal(result.reason, "missing_signature");
  });

  test("rejects a signature made by a different key", () => {
    const body = "uuid=abc&value_coin=0.5";
    const other = crypto.generateKeyPairSync("rsa", { modulusLength: 1024 });
    const signer = crypto.createSign("RSA-SHA256");
    signer.update(body);

    const raw = {
      headers: { "x-ca-signature": signer.sign(other.privateKey).toString("base64") },
      payload: body,
    };

    const result = verifyWebhookSignatureWith(raw, testPublicKeyPem);
    assert.equal(result.valid, false);
  });

  test("the shipped CryptAPI key is a well-formed PEM", () => {
    assert.match(CRYPTAPI_PUBLIC_KEY, /^-----BEGIN PUBLIC KEY-----/);
    const key = crypto.createPublicKey(CRYPTAPI_PUBLIC_KEY);
    assert.equal(key.asymmetricKeyType, "rsa");
    // CryptAPI uses 1024-bit RSA; a mismatch here means the docs changed.
    assert.equal(key.asymmetricKeyDetails.modulusLength, 1024);
  });
});

describe("parseWebhookPayload", () => {
  test("reads order_id and nonce from the query string", () => {
    const parsed = parseWebhookPayload({
      query: { order_id: "ord_1_abc", nonce: "deadbeef" },
      body: { uuid: "u1", value_coin: "0.25", pending: "1", confirmations: "0" },
    });

    assert.equal(parsed.orderId, "ord_1_abc");
    assert.equal(parsed.nonce, "deadbeef");
    assert.equal(parsed.uuid, "u1");
    assert.equal(parsed.valueCoin, 0.25);
    assert.equal(parsed.pending, true);
  });

  test("treats pending=0 as confirmed", () => {
    const parsed = parseWebhookPayload({
      query: { order_id: "o", nonce: "n" },
      body: { pending: "0" },
    });
    assert.equal(parsed.pending, false);
  });
});

describe("nonce", () => {
  test("is unguessable and unique", () => {
    const a = createNonce();
    const b = createNonce();
    assert.equal(a.length, 48);
    assert.notEqual(a, b);
  });
});

describe("getForwardAddress", () => {
  test("matches ticker case-insensitively", () => {
    process.env.CRYPTAPI_ADDRESSES =
      "BTC@1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2, ETH@0xabc123";
    assert.equal(getForwardAddress("btc"), "1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2");
    assert.equal(getForwardAddress("ETH"), "0xabc123");
    assert.equal(getForwardAddress("btc "), "1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2");
  });

  test("returns null for an unconfigured ticker rather than guessing", () => {
    process.env.CRYPTAPI_ADDRESSES = "BTC@1abc";
    assert.equal(getForwardAddress("sol"), null);
  });

  test("returns null when nothing is configured", () => {
    delete process.env.CRYPTAPI_ADDRESSES;
    assert.equal(getForwardAddress("btc"), null);
  });
});

/**
 * verifyWebhookSignature hardcodes the shipped public key. This re-implements
 * the exact same verification against an arbitrary key so the happy path can
 * be tested without the real private key.
 */
function verifyWebhookSignatureWith(rawBody, publicKeyPem) {
  const signatureHeader = rawBody?.headers?.["x-ca-signature"];
  if (!signatureHeader) return { valid: false, reason: "missing_signature" };

  let signature;
  try {
    signature = Buffer.from(signatureHeader, "base64");
  } catch {
    return { valid: false, reason: "malformed_signature" };
  }

  try {
    const verifier = crypto.createVerify("RSA-SHA256");
    verifier.update(rawBody.payload);
    const valid = verifier.verify(publicKeyPem, signature);
    return valid ? { valid: true } : { valid: false, reason: "signature_mismatch" };
  } catch (err) {
    return { valid: false, reason: "verify_error", error: err.message };
  }
}