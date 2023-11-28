import styles from "/styles/Home.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="my-6">
      <Link href="/">
        <a className="mr-auto flex">
          <h2 className="text-2xl font-semibold animate-pulse">XDefiDev</h2>
        </a>
      </Link>
      <ul className="sm:flex hidden">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/portfolio">Portfolio</a>
        </li>
        <li>
          <a href="/services">Services</a>
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
      <button className="flex sm:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="h-10 w-10 fill-jacarta-700"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M22 12.999V20a1 1 0 0 1-1 1h-8v-8.001h9zm-11 0V21H3a1 1 0 0 1-1-1v-7.001h9zM11 3v7.999H2V4a1 1 0 0 1 1-1h8zm10 0a1 1 0 0 1 1 1v6.999h-9V3h8z" />
        </svg>
      </button>
    </nav>
  );
}
