import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default function Document({ locale = 'en' }) {
  return (
    <Html lang={locale}>
      <Head>
        <meta name="theme-color" content="#1e3a8a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://xdefidev.xyz/#organization",
                  "url": "https://xdefidev.xyz/",
                  "name": "XDefiDev",
                  "legalName": "XDefiDev",
                  "description":
                    "Premium Blockchain, Crypto Exchange, and Web3 Development Services. Smart contract development, DeFi protocols, dApps, and blockchain consulting.",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://xdefidev.xyz/logo.png",
                    "width": 150,
                    "height": 100
                  },
                  "image": "https://xdefidev.xyz/logo.png",
                  "email": "xdefidev@gmail.com",
                  "telephone": "+1-706-228-9620",
                  "contactPoint": [
                    {
                      "@type": "ContactPoint",
                      "telephone": "+1-706-228-9620",
                      "contactType": "sales",
                      "availableLanguage": ["en", "zh", "es", "hi", "ar", "pt", "ru", "ja", "de", "fr"]
                    }
                  ],
                  "sameAs": [
                    "https://t.me/xdefideveloper",
                    "https://discord.com/users/839903148462178315/"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://xdefidev.xyz/#website",
                  "url": "https://xdefidev.xyz/",
                  "name": "XDefiDev",
                  "description":
                    "Premium Blockchain, Crypto Exchange, and Web3 Development Services",
                  "publisher": { "@id": "https://xdefidev.xyz/#organization" },
                  "inLanguage": "en"
                }
              ]
            })
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
  const { locale } = ctx;
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => App,
    });

  const initialProps = await NextDocument.getInitialProps(ctx);

  return {
    ...initialProps,
    locale: locale || "en",
  };
};
