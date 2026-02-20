import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>

        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://0xdefidev.com/#website",
                  "url": "https://0xdefidev.com/",
                  "name": "Xdefidev",
                  "description": "Premium Blockchain, Crypto Exchange, and Web3 Development Services",
                  "potentialAction": [
                    {
                      "@type": "SearchAction",
                      "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://0xdefidev.com/search?q={search_term_string}"
                      },
                      "query-input": "required name=search_term_string"
                    }
                  ]
                },
                {
                  "@type": "SiteNavigationElement",
                  "@id": "https://0xdefidev.com/#navigation",
                  "name": "Main Navigation",
                  "hasPart": [
                    {
                      "@type": "WebPage",
                      "name": "Blockchain Development",
                      "url": "https://0xdefidev.com/categories/blockchain-development"
                    },
                    {
                      "@type": "WebPage",
                      "name": "Crypto Exchange Development",
                      "url": "https://0xdefidev.com/categories/crypto-exchange-development"
                    },
                    {
                      "@type": "WebPage",
                      "name": "Telegram Bots and Mini Apps",
                      "url": "https://0xdefidev.com/categories/telegram-bots"
                    },
                    {
                      "@type": "WebPage",
                      "name": "Crypto Casino and Game Development",
                      "url": "https://0xdefidev.com/categories/crypto-casino-development"
                    },
                    {
                      "@type": "WebPage",
                      "name": "Defi & NFT Ecosystems",
                      "url": "https://0xdefidev.com/categories/defi-nft-ecosystems"
                    },
                    {
                      "@type": "WebPage",
                      "name": "Portfolio",
                      "url": "https://0xdefidev.com/portfolio"
                    },
                    {
                      "@type": "WebPage",
                      "name": "Our Services",
                      "url": "https://0xdefidev.com/services"
                    },
                    {
                      "@type": "WebPage",
                      "name": "Contact Us",
                      "url": "https://0xdefidev.com/contact-us"
                    }
                  ]
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
