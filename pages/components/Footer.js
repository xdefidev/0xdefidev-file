import styles from "/styles/Home.module.css";
import Image from "next/image";
import Telegram from "/public/telegram.svg";
import Whatsapp from "/public/whatsapp.svg";
import Mail from "/public/mail.svg";

export default function Footer() {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <footer className={styles.footer}>
      <div>
        <h2>Get in Touch</h2>
        <ul className="footer-list ">
          <li>
            <a
              href="https://t.me/xdefideveloper"
              alt="message us on telegram"
              target="_blank"
            >
              <Image src={Telegram} width={30} height={30} alt="telegram" />
              <span className="flex text-center justify-center items-center text-sm">
                Telegram
              </span>
            </a>
          </li>
          <li>
            <a
              href="mailto:xdefidev@gmail.com"
              alt="mail us xdefidev@gmail.com"
            >
              <Image src={Mail} width={30} height={30} alt="email" />
              <span className="flex text-center justify-center items-center text-sm">
                e-Mail
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/+17062289620"
              alt="Text us on whatsapp"
              target="_blank"
            >
              <Image src={Whatsapp} width={30} height={30} alt="whatsapp" />
              <span className="flex text-center justify-center items-center text-sm">
                Whatsapp
              </span>
            </a>
          </li>
          <li></li>
        </ul>
      </div>
      <div></div>
      <div className="content-body">
        <p>© Copyright 0xDefiDev {year}</p>
      </div>
    </footer>
  );
}
