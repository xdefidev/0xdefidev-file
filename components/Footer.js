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
                    <path d={s.icon} />
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