import sharp from "sharp";

/**
 * GET /api/og?title=...&subtitle=...&badge=...
 *
 * Dynamic Open Graph image rendered with sharp. The previous default was a
 * stock YouTube thumbnail, which is a poor brand signal when a link is
 * shared on social.
 *
 * sharp is used rather than @vercel/og because the latter pulls node
 * built-ins in through a dynamic require that Next 13's Pages Router API
 * bundler rejects at runtime.
 */

const W = 1200;
const H = 630;

const escapeXml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

/**
 * Greedy wrap into at most `maxLines` lines of roughly `maxChars` each,
 * appending an ellipsis if anything was dropped.
 */
function wrap(text, maxChars, maxLines) {
  const words = String(text).split(/\s+/).filter(Boolean);
  const lines = [];
  let current = "";

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length <= maxChars) {
      current = candidate;
    } else {
      if (current) lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);

  if (lines.length > maxLines) {
    const kept = lines.slice(0, maxLines);
    kept[maxLines - 1] = `${kept[maxLines - 1].replace(/[,.;:]?$/, "")}…`;
    return kept;
  }
  return lines;
}

function renderSvg({ title, subtitle, badge }) {
  const titleLines = wrap(title, title.length > 60 ? 34 : 30, 3);
  const titleSize = titleLines.length > 2 ? 58 : titleLines.length > 1 ? 66 : 76;
  const lineHeight = titleSize + 12;

  const subtitleLines = wrap(subtitle, 62, 2);
  const subtitleSize = 30;

  // Lay the title block out from a content top edge that moves down when a
  // badge is present, then derive every other baseline from the block height
  // so nothing can overlap regardless of how the text wraps.
  const contentTop = badge ? 268 : 226;
  const titleTop = contentTop + titleSize;
  const titleBottom = titleTop + (titleLines.length - 1) * lineHeight;
  const subtitleTop = titleBottom + 78;

  const titleTspans = titleLines
    .map(
      (line, i) =>
        `<tspan x="80" y="${titleTop + i * lineHeight}">${escapeXml(line)}</tspan>`,
    )
    .join("");

  const subtitleTspans = subtitleLines
    .map(
      (line, i) =>
        `<tspan x="80" y="${subtitleTop + i * (subtitleSize + 12)}">${escapeXml(line)}</tspan>`,
    )
    .join("");

  const badgeWidth = badge ? Math.max(90, badge.length * 12 + 44) : 0;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="55%" stop-color="#1e3a8a"/>
      <stop offset="100%" stop-color="#065f46"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="0%" r="70%">
      <stop offset="0%" stop-color="#2563eb" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="#2563eb" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <!-- Brand lockup -->
  <rect x="80" y="72" width="64" height="64" rx="16" fill="#2563eb"/>
  <text x="112" y="115" font-family="Helvetica, Arial, sans-serif" font-size="26" font-weight="700" fill="#ffffff" text-anchor="middle">XD</text>
  <text x="164" y="100" font-family="Helvetica, Arial, sans-serif" font-size="30" font-weight="700" fill="#ffffff">XDefiDev</text>
  <text x="164" y="128" font-family="Helvetica, Arial, sans-serif" font-size="20" fill="#93c5fd">Software &amp; Web3 studio</text>

  ${badge ? `<rect x="80" y="176" width="${badgeWidth}" height="44" rx="22" fill="rgba(255,255,255,0.14)"/>
  <text x="${80 + badgeWidth / 2}" y="205" font-family="Helvetica, Arial, sans-serif" font-size="22" font-weight="600" fill="#dbeafe" text-anchor="middle">${escapeXml(badge)}</text>` : ""}

  <!-- Title -->
  <text font-family="Helvetica, Arial, sans-serif" font-size="${titleSize}" font-weight="700" fill="#ffffff" letter-spacing="-1">${titleTspans}</text>

  <!-- Subtitle -->
  <text font-family="Helvetica, Arial, sans-serif" font-size="${subtitleSize}" fill="#bfdbfe">${subtitleTspans}</text>

  <!-- Footer -->
  <line x1="80" y1="${H - 108}" x2="${W - 80}" y2="${H - 108}" stroke="rgba(255,255,255,0.18)" stroke-width="2"/>
  <text x="80" y="${H - 66}" font-family="Helvetica, Arial, sans-serif" font-size="24" fill="#93c5fd">xdefidev.xyz</text>
  <text x="${W - 80}" y="${H - 66}" font-family="Helvetica, Arial, sans-serif" font-size="24" fill="#93c5fd" text-anchor="end">Crypto checkout available</text>
</svg>`;
}

export default async function handler(req, res) {
  const { searchParams } = new URL(req.url, "http://localhost");

  const title = (searchParams.get("title") ?? "XDefiDev").slice(0, 120);
  const subtitle = (
    searchParams.get("subtitle") ??
    "AI, software, automation & blockchain development"
  ).slice(0, 180);
  const badge = searchParams.get("badge")?.slice(0, 40);

  try {
    const png = await sharp(Buffer.from(renderSvg({ title, subtitle, badge })))
      .png({ compressionLevel: 9 })
      .toBuffer();

    res.setHeader("Content-Type", "image/png");
    res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800");
    return res.status(200).send(png);
  } catch (err) {
    console.error("[og] render failed", err);
    res.setHeader("Content-Type", "text/plain");
    return res.status(500).send("OG image generation failed");
  }
}