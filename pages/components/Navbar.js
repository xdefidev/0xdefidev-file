import { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import styles from "/styles/Home.module.css";
import Link from "next/link";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="my-6">
      <Link href="/" className="mr-auto flex">
        <h2 className="text-2xl font-semibold animate-pulse">XDefiDev</h2>
      </Link>
      <ul className="sm:flex hidden ">
        <li>
          <a href="/" className="font-josefin">
            Home
          </a>
        </li>
        <li>
          <a href="/services" className="font-josefin">
            Services
          </a>
        </li>
        <li>
          <a href="/portfolio" className="font-josefin">
            Portfolio
          </a>
        </li>
        
        <li>
          <a
            href="https://t.me/xdefideveloper"
            // className={styles.contact}
            target="_blank"
            className="font-josefin"
          >
            Contact
          </a>
        </li>
      </ul>

      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-black md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {/* {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-black md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )} */}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[50vw] my-2 h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-black animate-slide-in space-y-4 bg-white"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            <a href="#" target="_blank" className="w-full">
              <li
                className={`mx-4 text-lg cursor-pointer font-josefin hover:text-[#0462f7]`}
              >
                Home
              </li>
            </a>
           
            <a href="/services" target="_blank" className="w-full">
              <li
                className={`mx-4 text-lg cursor-pointer font-josefin hover:text-[#0462f7]`}
              >
                Services
              </li>
            </a>
            <a href="/portfolio" target="_blank" className="w-full">
              <li
                className={`mx-4 text-lg cursor-pointer font-josefin hover:text-[#0462f7]`}
              >
                Portfolio
              </li>
            </a>
            <a href="https://t.me/xdefideveloper" target="_blank" className="w-full">
              <li
                className={`mx-4 text-lg cursor-pointer font-josefin hover:text-[#0462f7]`}
              >
                Contact
              </li>
            </a>
          </ul>
        )}
      </div>
    </nav>
  );
}
