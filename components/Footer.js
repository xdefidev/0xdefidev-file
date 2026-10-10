import Link from "next/link";
import { categories } from "../data/categories";
import { siteConfig } from "../site.config";

const YEAR = new Date().getFullYear();

const SOCIAL = [
  {
    label: "Telegram",
    href: siteConfig.contact.telegram,
    icon: "M21 5 3 11l5 2 2 6 3-4 5 4z",
  },
  {
    label: "Discord",
    href: siteConfig.contact.discord,
    // Discord's mark is a solid glyph; the rest of this row is stroked.
    fill: true,
    icon: "M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.058a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .078-.011c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .079.01c.12.099.246.198.373.292a.077.077 0 0 1-.006.128 12.3 12.3 0 0 1-1.873.891.077.077 0 0 0-.041.107c.36.698.772 1.363 1.225 1.993a.076.076 0 0 0 .084.029 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.055c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.029zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z",
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.contact.email}`,
    icon: "M3 8l8.89 4.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z",
  },
  {
    label: "WhatsApp",
    href: siteConfig.contact.whatsapp,
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 1 1-3.6-7.2M21 12v-4a9 9 0 0 0-9-9",
  },
];

const RESOURCES = [
  { label: "All Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Free Tools", href: "/free-tools" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
];

export default function Footer() {
  return (
    <footer className="border-t border-surface-border bg-surface-sunken">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white">
                XD
              </span>
              <span className="text-lg font-semibold text-ink">
                {siteConfig.name}
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-subtle">
              Web3, blockchain and AI development studio. Building secure,
              production-grade products since {siteConfig.founded}.
            </p>

            <div className="mt-5 flex gap-2">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-surface-border bg-white text-ink-subtle transition-all duration-200 ease-smooth hover:border-brand-200 hover:text-brand-600"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path
                      d={s.icon}
                      fill={s.fill ? "currentColor" : "none"}
                      stroke={s.fill ? "none" : "currentColor"}
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Categories">
            {categories.slice(0, 6).map((c) => (
              <FooterLink key={c.slug} href={`/categories/${c.slug}`}>
                {c.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="More">
            {categories.slice(6).map((c) => (
              <FooterLink key={c.slug} href={`/categories/${c.slug}`}>
                {c.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Resources">
            {RESOURCES.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
          </FooterColumn>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-surface-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1 text-sm text-ink-subtle">
            <p>
              &copy; {siteConfig.founded}&ndash;{YEAR} {siteConfig.name}. All rights reserved.
            </p>
            <p>
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-brand-600">
                {siteConfig.contact.email}
              </a>{" "}
              &middot; {siteConfig.contact.phone}
            </p>
          </div>

          <div className="flex gap-5 text-sm">
            <Link href="/privacy-policy" className="text-ink-subtle hover:text-ink">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-ink-subtle hover:text-ink">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-ink">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-ink-subtle transition-colors duration-200 hover:text-brand-600"
      >
        {children}
      </Link>
    </li>
  );
}