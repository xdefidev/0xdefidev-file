import { Josefin_Sans } from "next/font/google";
import Footer from "./components/Footer";
import { NextUIProvider } from "@nextui-org/react";
import "../styles/globals.css";

const josefin = Josefin_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-josefin",
});

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <main className={`${josefin.variable} font-josefin`}>
        <Component {...pageProps} />;
        <Footer />
      </main>
    </NextUIProvider>
  );
}

export default MyApp;
