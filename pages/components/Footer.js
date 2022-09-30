import styles from "/styles/Home.module.css";
import Link from "next/link";

export default function Footer() {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <footer className={styles.footer}>
      <div>
        <h2>Get in Touch</h2>
        <ul className="footer-list">
          <li>
            <a
              href="https://t.me/xdefidev"
              alt="message us on telegram"
              target="_blank"
            >
              Telegram
            </a>
          </li>
          <li>
            <a
              href="mailto:xdefidev@gmail.com"
              alt="mail us xdefidev@gmail.com"
            >
              e-Mail
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/+17062289620"
              alt="Text us on whatsapp"
              target="_blank"
            >
              Whatsapp
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
