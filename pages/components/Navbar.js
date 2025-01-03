import { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import styles from "/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image"
import Logo from "../../public/logo.png"

import services from "../api/services";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <nav className="my-6">
      <Link href="/" className="mr-auto flex">
        {/* <h2 className="text-2xl font-semibold text-[#404145]"></h2> */}
        <Image src={Logo} alt="logo" width={150} height={100} />
      </Link>
      <ul className="sm:flex hidden ">
        <li>
          <a href="/" className="font-josefin font-semibold text-[#62646A]">
            Home
          </a>
        </li>
        {/* <li>
          <a
            href="/services"
            className="font-josefin font-semibold flex items-center gap-1 text-[#62646A]"
          >
            Services{" "}
            <span>
              <svg
                width="11"
                height="7"
                viewBox="0 0 11 7"
                fill="#62646A"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z"></path>
              </svg>
            </span>
          </a>
        </li> */}
        <li className="relative">
          <a
            href="/services"
            className="font-josefin font-semibold flex items-center gap-1 text-[#62646A]"
            onMouseEnter={(e) => {
              e.preventDefault();
              toggleDropdown();
            }}
          >
            Services{" "}
            <span>
              <svg
                width="11"
                height="7"
                viewBox="0 0 11 7"
                fill="#62646A"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z"></path>
              </svg>
            </span>
          </a>

          {isOpen && (
            <ul
              onMouseLeave={() => toggleDropdown()}
              className="absolute left-0 mt-2 w-60 bg-[#edede9] shadow-lg rounded-md z-10 p-2"
            >
              <div className="grid grid-cols-1 ">
                {services.map((item) => (
                  <a href={item.link} alt={item.description} className="p-1 rounded cursor-pointer hover:bg-white">
                    <li className="text-xs ">
                      <p className="">{item.name}</p>
                    </li>
                  </a>
                ))}
                <div className="flex justify-end">
                <li className="items-end text-sm cursor-pointer underline"> <a href="/services" alt="Full service page">View All {">>>"}</a></li>
                </div>
                
              </div>
            </ul>
          )}
          
        </li>
        <li>
          <a
            href="/portfolio"
            className="font-josefin font-semibold text-[#62646A]"
          >
            Portfolio
          </a>
        </li>

        <li>
          <a
            href="https://t.me/xdefideveloper"
            // className={styles.contact}
            target="_blank"
            className="font-josefin font-semibold text-[#62646A]"
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
                className={`mx-4 text-lg cursor-pointer font-josefin font-semibold hover:text-[#0462f7]`}
              >
                Home
              </li>
            </a>

            <a href="/services" target="_blank" className="w-full">
              <li
                className={`mx-4 text-lg cursor-pointer font-josefin font-semibold hover:text-[#0462f7]`}
              >
                Services
              </li>
            </a>
            <a href="/portfolio" target="_blank" className="w-full">
              <li
                className={`mx-4 text-lg cursor-pointer font-josefin font-semibold hover:text-[#0462f7]`}
              >
                Portfolio
              </li>
            </a>
            <a
              href="https://t.me/xdefideveloper"
              target="_blank"
              className="w-full"
            >
              <li
                className={`mx-4 text-lg cursor-pointer font-josefin font-semibold hover:text-[#0462f7]`}
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
