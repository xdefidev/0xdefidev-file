import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { siteConfig, isRtl } from "../site.config";

export default function Document({ locale = "en" }) {
  const rtl = isRtl(locale);

  return (
    <Html lang={locale} dir={rtl ? "rtl" : "ltr"}>
      <Head>
        <meta name="theme-color" content="#2563eb" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

        {/* Social profile handles referenced by the Organization node. */}
        <meta name="twitter:site" content="@xdefidev0" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${siteConfig.url}/#organization`,
                  url: `${siteConfig.url}/`,
                  name: siteConfig.name,
                  legalName: siteConfig.name,
                  description:
                    "Full-stack software engineering studio: custom software, AI and LLM applications, workflow automation, cloud and DevOps, APIs, web and mobile apps, and blockchain and Web3 development.",
                  logo: {
                    "@type": "ImageObject",
                    url: `${siteConfig.url}/logo.png`,
                  },
                  image: `${siteConfig.url}/og-default.png`,
                  email: siteConfig.contact.email,
                  telephone: siteConfig.contact.phone,
                  foundingDate: String(siteConfig.founded),
                  address: {
                    "@type": "PostalAddress",
                    addressCountry: "US",
                  },
                  contactPoint: [
                    {
                      "@type": "ContactPoint",
                      telephone: siteConfig.contact.phone,
                      contactType: "sales",
                      email: siteConfig.contact.email,
                      availableLanguage: siteConfig.locales.map((l) => l.code),
                    },
                    {
                      "@type": "ContactPoint",
                      contactType: "customer support",
                      email: siteConfig.contact.email,
                      availableLanguage: ["en"],
                    },
                  ],
                  sameAs: [
                    siteConfig.contact.telegram,
                    siteConfig.contact.discord,
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": `${siteConfig.url}/#website`,
                  url: `${siteConfig.url}/`,
                  name: siteConfig.name,
                  description:
                    "Software, AI, automation and blockchain engineering",
                  publisher: { "@id": `${siteConfig.url}/#organization` },
                  inLanguage: locale,
                },
              ],
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => App,
    });

  const initialProps = await NextDocument.getInitialProps(ctx);

  return {
    ...initialProps,
    locale: ctx.locale || siteConfig.defaultLocale,
  };
};