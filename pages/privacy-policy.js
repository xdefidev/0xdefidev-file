import Link from "next/link";
import SeoHead from "../components/Seo";
import { siteConfig } from "../site.config";

const UPDATED = "Last updated: 9 October 2026";

export default function PrivacyPolicy() {
  return (
    <>
      <SeoHead
        title={`Privacy Policy | ${siteConfig.name}`}
        description={`How ${siteConfig.name} collects, uses and protects your personal information.`}
        path="/privacy-policy"
        locale="en"
        hreflang={["en"]}
      />

      <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
        <h1 className="text-headline font-bold text-ink">Privacy Policy</h1>
        <p className="mt-2 text-sm text-ink-subtle">{UPDATED}</p>

        <div className="prose-privacy mt-10 space-y-8 text-[0.975rem] leading-relaxed text-ink-subtle">
          <p>
            This policy explains what {siteConfig.name} collects when you use
            this website, why we collect it, and what we do with it. It applies
            to this website only. Client projects we deliver are governed by
            the contract signed for that work.
          </p>

          <Section title="What we collect">
            <p>When you make a purchase we collect:</p>
            <ul>
              <li>
                <strong>Your email address</strong> — used to send your receipt
                and delivery details. We do not use it for marketing without
                your consent.
              </li>
              <li>
                <strong>Your order contents</strong> — which items you bought and
                the transaction reference, so we can deliver your order and
                resolve any dispute.
              </li>
              <li>
                <strong>Blockchain transaction details</strong> — the public
                transaction hash and deposit address for your payment. These are
                public on the blockchain by nature; we store them to reconcile
                your order.
              </li>
            </ul>
            <p>
              We do not ask for, want, or store seed phrases, private keys, or
              wallet passwords. We never have access to your funds beyond the
              payment you send us.
            </p>
          </Section>

          <Section title="Who processes payments">
            <p>
              Payments are handled by CryptAPI (BlockBee), which generates a
              unique deposit address per order and forwards funds to us. They
              act as a payment processor and independent data controller for
              the payment data they handle under their own terms.
            </p>
            <p>
              We never see or store your card details, because we never ask for
              them.
            </p>
          </Section>

          <Section title="How long we keep data">
            <p>
              Order records are kept for as long as needed to fulfil the order,
              provide support, and meet our accounting and tax obligations —
              typically seven years. Everything else is deleted sooner.
            </p>
          </Section>

          <Section title="Cookies">
            <p>
              This site uses privacy-respecting analytics to understand which
              pages are useful. You can opt out of Google Analytics in your
              browser or with a content blocker, and the site works fully
              without it.
            </p>
          </Section>

          <Section title="Your rights">
            <p>
              You can ask us to give you a copy of the data we hold about you,
              correct anything inaccurate, or delete it where we are not legally
              required to keep it. Email{" "}
              <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>{" "}
              and we will action it.
            </p>
          </Section>

          <Section title="Security">
            <p>
              Payment webhooks are cryptographically verified before any order
              state changes, and order data is accessed only by our server. That
              said, no method of transmission or storage is perfectly secure.
              Please do not email us sensitive information.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              Questions about this policy go to{" "}
              <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
            </p>
          </Section>
        </div>

        <Link
          href="/"
          className="mt-12 inline-block text-sm font-semibold text-brand-700 hover:underline"
        >
          Back to home
        </Link>
      </div>

      <style jsx>{`
        :global(.prose-privacy h2) {
          font-size: 1.125rem;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 0.75rem;
        }
        :global(.prose-privacy ul) {
          list-style: disc;
          padding-inline-start: 1.25rem;
          margin-block: 0.75rem;
        }
        :global(.prose-privacy li) {
          margin-bottom: 0.5rem;
        }
        :global(.prose-privacy a) {
          color: #1d4ed8;
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}

function Section({ title, children }) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-ink">{title}</h2>
      <div className="mt-2 space-y-3">{children}</div>
    </section>
  );
}