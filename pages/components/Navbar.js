import styles from "/styles/Home.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="my-6">
      <Link href="/">
        <a className="mr-auto flex">
          <h2 className="text-2xl font-semibold ">XDefiDev</h2>
        </a>
      </Link>
      <ul className="sm:flex hidden">
        <li>
          <a href="/portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#grid-container">Services</a>
        </li>
        <li>
          <a
            href="https://t.me/xdefideveloper"
            className={styles.contact}
            target="_blank"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
