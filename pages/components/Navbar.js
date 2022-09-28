import styles from '/styles/Home.module.css';

export default function Navbar() {
  return (
    <nav>
      <h2 className="logo">0xDefiDev</h2>
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
