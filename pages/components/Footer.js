import styles from "/styles/Home.module.css";
import Image from "next/image";
import Telegram from "/public/telegram.svg";
import Whatsapp from "/public/whatsapp.svg";
import Mail from "/public/mail.svg";

import Link from "next/link";

import Logo from "../../public/logo.png";

export const AcmeLogo = () => {
  return (
    <Link href="/">
      <Image src={Logo} width={150} height={100} className="invert " alt="xdefidev footer logo" />
    </Link>
  );
};

export default function Footer() {
  // const d = new Date();
  // const year = d.getFullYear();
  return (
    <footer className="bg-[#212529] rounded-t-2xl p-4 text-gray-200 min-w-full">
      <div className="grid sm:grid-cols-3 grid-flow-row m-6">
        <div className="py-6">
          <AcmeLogo />
          {/* <h2>Get in Touch</h2>  */}
          <ul className=" flex gap-2 py-2 pl-2">
            <li>
              <a
                href="https://t.me/xdefideveloper"
                alt="message us on telegram"
                target="_blank"
              >
                <Image
                  src={Telegram}
                  width={20}
                  height={20}
                  alt="contact us on telegram"
                />
              </a>
            </li>
            <li>
              <a
                href="mailto:xdefidev@gmail.com"
                alt="mail us xdefidev@gmail.com"
              >
                <Image
                  src={Mail}
                  width={20}
                  height={20}
                  alt="send us an email"
                />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/+17062289620"
                alt="Text us on whatsapp"
                target="_blank"
              >
                <Image
                  src={Whatsapp}
                  width={20}
                  height={20}
                  alt="text us on whatsapp"
                />
              </a>
            </li>
            <li></li>
          </ul>
        </div>

        <div className="py-8">
          <h2 className="text-2xl font-josefin font-semibold pb-4">
            Categories
          </h2>
          <div className="text-sm flex flex-col space-y-1.5">
            <Link href="/categories/blockchain-development">
              <p>Blockchain Development</p>
            </Link>
            <Link href="/categories/crypto-exchange-development">
              {" "}
              <p>Crypto Exchange Development </p>
            </Link>
            <Link href="/categories/telegram-bots">
              <p>Telegram Bots and Mini apps</p>
            </Link>
            <Link href="/categories/crypto-casino-development">
              <p>Casino Development</p>
            </Link>
            <Link href="/categories/defi-nft-ecosystems">
              <p>Defi and NFTs Development</p>
            </Link>
          </div>
        </div>

        <div className="py-8">
          <h2 className="text-2xl font-josefin font-semibold pb-4">
            More Info
          </h2>
          <div className="text-sm flex flex-col space-y-1.5">
            <Link href="/contact-us">
              <p>Contact Us</p>
            </Link>
            <Link href="/portfolio">
              <p>Portfolio</p>
            </Link>
          </div>
        </div>
      </div>

      <div></div>
      <div className="text-center text-sm">
        <p>© Copyright xDefiDev 2023.</p>
      </div>
    </footer>
  );
}
