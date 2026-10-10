import { Josefin_Sans } from "next/font/google";
import Navbar from "../components/Navbar";
import NoticeBar from "../components/NoticeBar";
import Footer from "../components/Footer";
import "../styles/globals.css";

import { HeroUIProvider } from "@heroui/react";
import herouiTheme from "../heroui-theme";

import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../next-i18next.config";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useTranslation } from "next-i18next";

import { CartProvider } from "../lib/cart";
import { ContactProvider } from "../components/Contact";
import { isRtl } from "../site.config";

// Josefin Sans is a variable font with 100-700 available; 800/900 do not
// exist and requesting them fails the build. Heavy weights map to 700.
const josefin = Josefin_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-josefin",
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { i18n } = useTranslation();

  // Keep client i18n language aligned with the Next.js route locale to
  // prevent a hydration mismatch on the first render of a localised page.
  useEffect(() => {
    if (router?.locale && i18n?.language !== router.locale) {
      i18n.changeLanguage(router.locale);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router?.locale]);

  return (
    <HeroUIProvider theme={herouiTheme}>
      <ContactProvider>
        <CartProvider>
          <div
            dir={isRtl(router?.locale) ? "rtl" : "ltr"}
            className={`${josefin.variable} font-josefin flex min-h-screen flex-col bg-white text-ink`}
          >
            <NoticeBar />
            <Navbar />
            <main className="flex-1">
              <Component {...pageProps} />
            </main>
            <Footer />
          </div>
        </CartProvider>
      </ContactProvider>
    </HeroUIProvider>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);