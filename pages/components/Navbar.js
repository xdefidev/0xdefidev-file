import styles from '/styles/Home.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href="/">
        <a className="home">
          <h2 className="logo">0xDefiDev</h2>
        </a>
      </Link>
      <ul className="menu">
        <li>
          <a href="#grid-container">Services</a>
        </li>
        <li>
          <a href="https://t.me/xdefidev" className={styles.contact}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
