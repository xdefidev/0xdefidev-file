import SeoHead from "../../components/Seo";
import Breadcrumbs, { breadcrumbSchema } from "../../components/Breadcrumbs";
import { FadeIn, Stagger, StaggerItem } from "../../components/motion";
import { useContact } from "../../components/Contact";
import { siteConfig } from "../../site.config";

const CHANNELS = [
  {
    label: "Telegram",
    hint: "Fastest reply, usually within a few hours",
    href: siteConfig.contact.telegram,
    accent: "hover:border-sky-300 hover:bg-sky-50/60",
    badge: "bg-sky-100 text-sky-700",
  },
  {
    label: "WhatsApp",
    hint: siteConfig.contact.phone,
    href: siteConfig.contact.whatsapp,
    accent: "hover:border-accent-300 hover:bg-accent-50/60",
    badge: "bg-accent-100 text-accent-700",
  },
  {
    label: "Discord",
    hint: "Join our server for support and updates",
    href: siteConfig.contact.discord,
    accent: "hover:border-indigo-300 hover:bg-indigo-50/60",
    badge: "bg-indigo-100 text-indigo-700",
  },
  {
    label: "Email",
    hint: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    accent: "hover:border-brand-300 hover:bg-brand-50/60",
    badge: "bg-brand-100 text-brand-700",
  },
];

export default function ContactUs() {
  const { open } = useContact();

  return (
    <>
      <SeoHead
        title={`Contact Us | ${siteConfig.name}`}
        description={`Get in touch with ${siteConfig.name} about your project. Message us on Telegram, WhatsApp, Discord or email, or send us a brief with the form below. We reply within one business day.`}
        path="/contact-us"
        schema={[
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Contact" }]),
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: `Contact ${siteConfig.name}`,
            url: `${siteConfig.url}/contact-us`,
            mainEntity: { "@id": `${siteConfig.url}/#organization` },
          },
        ]}
      />

      <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Breadcrumbs
          trail={[
            { name: "Home", href: "/" },
            { name: "Contact" },
          ]}
        />

        <FadeIn className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            Get in touch
          </p>
          <h1 className="mt-3 text-display font-bold text-ink text-balance">
            Tell us what you&apos;re building
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-subtle text-pretty">
            Pick whichever channel suits you, or send the brief below. Either
            way you&apos;ll hear from a real person within one business day.
          </p>
        </FadeIn>

        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2">
          {CHANNELS.map((channel) => (
            <StaggerItem key={channel.label}>
              <a
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex h-full flex-col rounded-2xl border border-surface-border bg-white p-6 transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:shadow-card ${channel.accent}`}
              >
                <span className={`w-fit rounded-full px-2.5 py-1 text-xs font-semibold ${channel.badge}`}>
                  {channel.label}
                </span>
                <p className="mt-3 font-medium text-ink">{channel.hint}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  Open {channel.label}
                  <svg
                    className="rtl-flip h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn delay={0.1} className="mt-6">
          <button
            type="button"
            onClick={open}
            className="w-full rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700 sm:w-auto"
          >
            Open quick chat
          </button>
        </FadeIn>

        <FadeIn delay={0.14} className="mt-16">
          <h2 className="text-headline font-bold text-ink">Send a brief</h2>
          <p className="mt-2 text-ink-subtle">
            The more detail you give, the more useful our first reply will be.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-surface-border bg-white">
            <iframe
              title="Project enquiry form"
              src="https://forms.zohopublic.com/xdefidev1/form/ContactForm/formperma/wUjIZtTR_NZQTuKTjLGjpBq0EU_AVH97UIJUWKZPYlg"
              className="h-[720px] w-full border-0"
              loading="lazy"
            />
          </div>

          <p className="mt-4 text-sm text-ink-subtle">
            Prefer to email directly?{" "}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="font-medium text-brand-700 underline-offset-2 hover:underline"
            >
              {siteConfig.contact.email}
            </a>{" "}
            &middot; {siteConfig.contact.phone}
          </p>
        </FadeIn>
      </div>
    </>
  );
}