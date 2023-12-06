import { Josefin_Sans } from "next/font/google";
import "../styles/globals.css";

const josefin = Josefin_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-josefin",
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${josefin.variable} font-josefin`}>
      <Component {...pageProps} />;
    </main>
  );
}

export default MyApp;
