import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import { motion } from "framer-motion";

import { Accordion, AccordionItem } from "@heroui/react";

import services from "../api/services";

import hero1 from "../../public/exchange-hero.png";

import hero2 from "../../public/categories/crypto-exchange-development.jpg"

const servicesList = [
  "Centralized Exchange (CEX) Development",
  "Decentralized Exchange (DEX) Development",
  "Hybrid Exchange Solutions",
  "Automated Market Maker (AMM) Development",
  "Order Book & Matching Engine Development",
  "Liquidity Aggregation & Management",
  "Cross-Chain & Multi-Chain Swap Integration",
  "Trading Bot & Algorithmic Trading Solutions",
  "KYC/AML & Security Compliance Solutions",
  "Crypto Wallet Integration (Hot & Cold Wallets)",
  "Staking & Yield Farming Modules",
  "Token Listing & Exchange API Development",
  "Smart Contract Audits & Security Testing",
  "Exchange UI/UX Design & Optimization",
  "24/7 Monitoring & Exchange Maintenance",
];

const Checkmark = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      width="25px"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <defs>
          {" "}
          <path
            id="check-a"
            d="M4.29289322,0.292893219 C4.68341751,-0.0976310729 5.31658249,-0.0976310729 5.70710678,0.292893219 C6.09763107,0.683417511 6.09763107,1.31658249 5.70710678,1.70710678 L1.90917969,5.46118164 C1.5186554,5.85170593 0.885490417,5.85170593 0.494966125,5.46118164 C0.104441833,5.07065735 0.104441833,4.43749237 0.494966125,4.04696808 L4.29289322,0.292893219 Z"
          ></path>{" "}
          <path
            id="check-c"
            d="M10.7071068,13.2928932 C11.0976311,13.6834175 11.0976311,14.3165825 10.7071068,14.7071068 C10.3165825,15.0976311 9.68341751,15.0976311 9.29289322,14.7071068 L0.292893219,5.70710678 C-0.0976310729,5.31658249 -0.0976310729,4.68341751 0.292893219,4.29289322 L4.29289322,0.292893219 C4.68341751,-0.0976310729 5.31658249,-0.0976310729 5.70710678,0.292893219 C6.09763107,0.683417511 6.09763107,1.31658249 5.70710678,1.70710678 L2.41421356,5 L10.7071068,13.2928932 Z"
          ></path>{" "}
        </defs>{" "}
        <g fill="none" fill-rule="evenodd" transform="rotate(-90 11 7)">
          {" "}
          <g transform="translate(1 1)">
            {" "}
            <mask id="check-b" fill="#ffffff">
              {" "}
              <use href="#check-a"></use>{" "}
            </mask>{" "}
            <use fill="#D8D8D8" fill-rule="nonzero" href="#check-a"></use>{" "}
            <g fill="#FFA0A0" mask="url(#check-b)">
              {" "}
              <rect
                width="24"
                height="24"
                transform="translate(-7 -5)"
              ></rect>{" "}
            </g>{" "}
          </g>{" "}
          <mask id="check-d" fill="#ffffff">
            {" "}
            <use href="#check-c"></use>{" "}
          </mask>{" "}
          <use fill="#000000" fill-rule="nonzero" href="#check-c"></use>{" "}
          <g fill="#7600FF" mask="url(#check-d)">
            {" "}
            <rect
              width="24"
              height="24"
              transform="translate(-6 -4)"
            ></rect>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};

const Arrow = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      height="50px"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M5 12H19M19 12L13 6M19 12L13 18"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
};

const BlockchainDevelopmentPage = () => {
  const imageLink =
    "https://ik.imagekit.io/lzgpc48la/pexels-pixabay-265129_6m3A9XfLh.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663654325584";


    function formatUSD(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0, // Allow no decimal places
        maximumFractionDigits: 2  // But show up to 2 if needed
      }).format(amount);
    }

  return (
    <div className="my-12 ">
      <Head>
        <title>Crypto Exchange Development | xDefiDev</title>
        <meta
          property="og:title"
          content="Professional Crypto Exchange Development Services | xDefiDev"
        />
        <meta
          property="og:description"
          content="Build your own secure, scalable cryptocurrency exchange platform with our expert development services. We create spot, margin, and derivatives trading platforms with high liquidity."
        />
        <meta
          name="description"
          content="Build your own secure, scalable cryptocurrency exchange platform with our expert development services. We create spot, margin, and derivatives trading platforms with high liquidity."
        />
        <meta
          property="og:url"
          content="https://xdefidev.com/categories/crypto-exchange-development"
        />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/hp2oyifpf/polywrap-uniswap-demo.png?updatedAt=1745273698271"
        />
        <meta
          property="twitter:image"
          content="https://ik.imagekit.io/hp2oyifpf/polywrap-uniswap-demo.png?updatedAt=1745273698271"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Crypto Exchange Development Services | xDefiDev"
        />
        <meta
          property="twitter:description"
          content="Professional crypto exchange development for spot, margin, and derivatives trading."
        />
        <meta
          property="og:site_name"
          content="xDefiDev Crypto Exchange Development"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://xdefidev.com/categories/crypto-exchange-development"
          key="canonical"
        />
      </Head>
      <div className="sm:mx-16 mx-4 grid sm:grid-cols-2 ">
        <div className="h-full flex flex-col justify-center ">
          {" "}
          <h1 className="text-4xl font-bold">
            Cryptocurrency <br /> Exchange <br /> Development Services
          </h1>
          <p className="text-lg">
            We are a premier crypto development team specializing in end-to-end
            cryptocurrency exchange solutions. Our expertise includes building
            secure and scalable Centralized Exchanges (CEX) and Decentralized
            Exchanges (DEX), along with liquidity integration, order-matching
            engines, and cross-chain trading protocols. We deliver cutting-edge
            blockchain technology tailored for seamless crypto trading, DeFi
            integration, and secure wallet solutions.
          </p>
        </div>
        <div className="h-full flex justify-center items-center">
          <Image src={hero1} width={600} height={600} className="py-8" priority={true} loading="eager" quality={85} />
        </div>
      </div>

      <div className="flex justify-center items-center w-full my-8">
        <Image src={hero2} width={600} height={600} className="flex rounded-lg " priority={true} loading="eager" quality={85}  />
      </div>

      <div>
        <div className="sm:mx-16 mx-4 my-16 grid grid-flow-row justify-center items-center">
          <h2 className="text-3xl font-bold text-center">
            Why Choose Our Cryptocurrency Exchange Development Services
          </h2>
          <p className="my-4 text-center text-lg">
            We specialize in developing high-performance Centralized (CEX) and
            Decentralized Exchanges (DEX), offering end-to-end crypto trading
            solutions. Our expertise includes secure order-matching engines,
            liquidity aggregation, cross-chain swaps, and automated market maker
            (AMM) development. Whether you need a high-speed CEX with advanced
            trading features or a trustless DEX with multi-chain support, our
            team delivers scalable, secure, and user-friendly exchange platforms
            tailored to your needs.
          </p>
          <div className="relative w-full overflow-hidden bg-transparent">
            <motion.div
              className="flex space-x-6 w-max will-change-transform"
              initial={{ x: 0 }}
              animate={{ x: "-50%" }} // Moves by half since we duplicated the list
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 50, // Adjust speed
                ease: "linear",
                delay: "0.2",
              }}
            >
              {[...servicesList, ...servicesList].map((item, index) => (
                <div key={index} className="w-full ">
                  <div className="w-[300px] p-6 border-slate-800 border-2 text-center min-h-[110px] flex justify-center items-center">
                    <p> {item}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="sm:mx-16 mx-4 my-24">
        <h2 className="text-4xl text-center font-semibold">Services</h2>

        <div className="grid sm:grid-cols-3  gap-4 my-6">
          {services.map(
            (item, index) =>
              item.category == "exchange" && (
                <Link
                  href={`/services/${item.slug}`}
                  className="rounded-lg shadow-md p-4 relative"
                  alt={item.description}
                  key={index}
                >
                  <img
                    src={item.image || imageLink}
                    alt={item.name}
                    width="100%"
                    loading="lazy"
                    className="rounded h-[200px]"
                  />
                  <div className="text-black bg-white rounded-md p-1 text-xs font-semibold antialiased absolute top-7 left-8">
                    {formatUSD(item.price)}
                  </div>
                  <h3 className="min-h-[50px] text-gray-900 font-semibold antialiased text-balance text-xl my-2">
                    {item.name} &rarr;
                  </h3>
                  <p className="ffont-base text-lg antialiased text-balance !font-josefin truncate line-clamp max-h-[75px]">
                    {item.description}
                  </p>
                </Link>
              )
          )}
          <div>
            <Link href="/contact-us" className="">
              <div className="rounded-lg shadow-md p-4 items-center justify-center  flex flex-col">
                <h3 className=" text-gray-900 font-semibold antialiased text-balance text-2xl my-2">
                  Want more?
                </h3>
                <div className="bg-[#6020a0] p-2 rounded-full my-8">
                  <Arrow className=" p-4 rounded" />
                </div>

                <p className="my-2 ffont-base text-md antialiased text-balance !font-josefin truncate line-clamp max-h-[75px]">
                  Send Us a Custom request!
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="sm:mx-16 mx-4 my-24">
        <h2 className="text-4xl text-center font-semibold">
          Crypto Exchange Features
        </h2>

        <div className="grid sm:grid-cols-3  gap-4 my-6">
          <div className=" flex flex-col space-y-2">
            <svg
              fill="#000000"
              width="60"
              height="60"
              viewBox="0 -0.08 20 20"
              data-name="Capa 1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M18,11.49a3.72,3.72,0,0,0-3-3.12,4.18,4.18,0,0,0-.88-2,4,4,0,0,0-3.62-1.44A4.48,4.48,0,0,0,8,6.27a3.41,3.41,0,0,0-3.84,2.4A3,3,0,0,0,2,11.62,3,3,0,0,0,5,15h9.82a3.65,3.65,0,0,0,2.41-1.18A2.91,2.91,0,0,0,18,11.49Zm-1.24,1.86a3,3,0,0,1-1.89,1H5c-.1,0-2.27,0-2.27-2.68A2.48,2.48,0,0,1,5,9.13l.17,0a.36.36,0,0,0,.22-.44A.35.35,0,0,0,5,8.42H5A2.57,2.57,0,0,1,6.06,7.26,3.08,3.08,0,0,1,8.73,7.2.34.34,0,0,0,9.18,7,.35.35,0,0,0,9,6.54l-.21-.07a3.71,3.71,0,0,1,1.79-.89,3.24,3.24,0,0,1,3,1.19,4,4,0,0,1,.82,2.64.35.35,0,0,0,.35.35A.35.35,0,0,0,15,9.41c0-.11,0-.2,0-.31a3,3,0,0,1,2.27,2.48A2.21,2.21,0,0,1,16.71,13.35Z"></path>
                <path d="M12.13,8a.14.14,0,0,0,0-.09.35.35,0,0,0-.41-.28,15.09,15.09,0,0,1-1.52.25.35.35,0,0,0,0,.69h0l.72-.1L10,9.76a.34.34,0,0,0,.27.57.36.36,0,0,0,.27-.12l1-1.27.06.51a.35.35,0,1,0,.69-.08c-.08-.74-.16-1.32-.16-1.32Z"></path>
                <path d="M9.59,12.18l-.7.17.89-1.26a.34.34,0,0,0-.08-.49.35.35,0,0,0-.49.08L8.31,12c0-.15-.07-.32-.11-.5a.34.34,0,0,0-.41-.26.35.35,0,0,0-.27.41c.16.71.24,1.26.24,1.28a.33.33,0,0,0,0,.14.36.36,0,0,0,.34.25h.1S9,13,9.74,12.86a.35.35,0,0,0-.15-.68Z"></path>
              </g>
            </svg>
            <h2 className="font-semibold text-2xl ">
              High Performance & Scalability
            </h2>
            <p>
              Our crypto exchanges (CEX & DEX) are built to handle millions of
              transactions per second with low latency, ensuring smooth trading
              even during peak volumes.
            </p>
          </div>
          <div className=" flex flex-col space-y-2">
            <svg
              viewBox="-0.5 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
              strokeWidth="1"
              height="60"
              width="60"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M10 11H3C2.72 11 2.5 10.78 2.5 10.5V3.5C2.5 3.22 2.72 3 3 3H10C10.28 3 10.5 3.22 10.5 3.5V10.5C10.5 10.78 10.28 11 10 11Z"
                  stroke="#0F0F0F"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M21 11H14C13.72 11 13.5 10.78 13.5 10.5V3.5C13.5 3.22 13.72 3 14 3H21C21.28 3 21.5 3.22 21.5 3.5V10.5C21.5 10.78 21.28 11 21 11Z"
                  stroke="#0F0F0F"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M21 22H14C13.72 22 13.5 21.78 13.5 21.5V14.5C13.5 14.22 13.72 14 14 14H21C21.28 14 21.5 14.22 21.5 14.5V21.5C21.5 21.78 21.28 22 21 22Z"
                  stroke="#0F0F0F"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M10 22H3C2.72 22 2.5 21.78 2.5 21.5V14.5C2.5 14.22 2.72 14 3 14H10C10.28 14 10.5 14.22 10.5 14.5V21.5C10.5 21.78 10.28 22 10 22Z"
                  stroke="#0F0F0F"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
            <h2 className="font-semibold text-2xl ">
              Multi-Chain & Cross-Chain Support
            </h2>
            <p>
              Seamlessly integrate Ethereum, BSC, Solana, and other major
              blockchains for cross-chain swaps and liquidity aggregation.
            </p>
          </div>
          <div className=" flex flex-col space-y-2">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              height="60"
              width="60"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="none"
                  stroke="#000000"
                  strokeWidth="1"
                  d="M7,11 L7,6 C7,3 9,1 12,1 C15,1 17,3 17,6 L17,11 M12,23 C15.8659932,23 19,19.8659932 19,16 C19,12.1340068 15.8659932,9 12,9 C8.13400675,9 5,12.1340068 5,16 C5,19.8659932 8.13400675,23 12,23 Z M12,15 L12,19 M12,16 C12.5522847,16 13,15.5522847 13,15 C13,14.4477153 12.5522847,14 12,14 C11.4477153,14 11,14.4477153 11,15 C11,15.5522847 11.4477153,16 12,16 Z"
                ></path>
              </g>
            </svg>
            <h2 className="font-semibold text-2xl ">
              Secure & Non-Custodial Trading (DEX)
            </h2>
            <p>
              Trustless trading with self-custody wallets (MetaMask,
              WalletConnect, and more), eliminating the need for centralized
              control of funds.
            </p>
          </div>
          <div className=" flex flex-col space-y-2">
            <svg
              viewBox="0 0 64 64"
              data-name="Icon Set - Black"
              id="Icon_Set_-_Black"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              height="60"
              width="60"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <defs>
                  <style>{`
        .cls-1 {
          fill: none;
          stroke: #000000;
          strokeLinecap: round;
          strokeLinejoin: round;
          strokeWidth: 0.512;
        }
        .cls-2 {
          fill: #ccc;
        }
      `}</style>
                </defs>
                <g id="Slider">
                  <line
                    className="cls-1"
                    x1="10"
                    x2="54"
                    y1="16"
                    y2="16"
                  ></line>
                  <line
                    className="cls-1"
                    x1="10"
                    x2="54"
                    y1="32"
                    y2="32"
                  ></line>
                  <line
                    className="cls-1"
                    x1="10"
                    x2="54"
                    y1="48"
                    y2="48"
                  ></line>
                  <path d="M20,8a8,8,0,1,0,8,8,8,8,0,0,0-8-8Z"></path>
                  <path d="M44,24a8,8,0,1,0,8,8,8,8,0,0,0-8-8Z"></path>
                  <path d="M20,40a8,8,0,1,0,8,8,8,8,0,0,0-8-8Z"></path>
                  <circle className="cls-2" cx="20" cy="16" r="3"></circle>
                  <circle className="cls-2" cx="44" cy="32" r="3"></circle>
                  <circle className="cls-2" cx="20" cy="48" r="3"></circle>
                </g>
              </g>
            </svg>
            <h2 className="font-semibold text-2xl ">
              Advanced Order Types (CEX)
            </h2>
            <p>
              Support for limit orders, market orders, stop-loss, and margin
              trading with ultra-fast matching engines.
            </p>
          </div>
          <div className=" flex flex-col space-y-2">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              width="60"
              height="60"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="none"
                  stroke="#231F20"
                  strokeWidth="0.88"
                  d="M8,6 L16,6 L16,1 L8,1 L8,6 L8,6 L8,6 Z M16,3 L21,3 L21,23 L3,23 L3,3 L8,3 M8,14 L11,17 L17,11"
                ></path>
              </g>
            </svg>
            <h2 className="font-semibold text-2xl ">Compliance & Security</h2>
            <p>
              Enterprise-grade KYC/AML, fraud detection, and cold storage
              integration to meet regulatory standards.
            </p>
          </div>
          <div className=" flex flex-col space-y-2">
            <svg
              fill="#000000"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 32 32"
              xmlSpace="preserve"
              width="60"
              height="60"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  id="user--interface_1_"
                  d="M29,3.5C29,3.776,28.776,4,28.5,4S28,3.776,28,3.5S28.224,3,28.5,3S29,3.224,29,3.5 M26.5,3 C26.224,3,26,3.224,26,3.5S26.224,4,26.5,4S27,3.776,27,3.5S26.776,3,26.5,3 M24.5,3C24.224,3,24,3.224,24,3.5S24.224,4,24.5,4 S25,3.776,25,3.5S24.776,3,24.5,3 M31,30.36H1c-0.199,0-0.36-0.161-0.36-0.36V2c0-0.199,0.161-0.36,0.36-0.36h30 c0.199,0,0.36,0.161,0.36,0.36v28C31.36,30.199,31.199,30.36,31,30.36z M1.36,29.64h29.28V5.36H1.36V29.64z M1.36,4.64h29.28V2.36 H1.36V4.64z M15,25.36h-5c-0.199,0-0.36-0.161-0.36-0.36v-3c0-0.199,0.161-0.36,0.36-0.36h5c0.199,0,0.36,0.161,0.36,0.36v3 C15.36,25.199,15.199,25.36,15,25.36z M10.36,24.64h4.28v-2.28h-4.28C10.36,22.36,10.36,24.64,10.36,24.64z M22,20.36h-5 c-0.199,0-0.36-0.161-0.36-0.36v-3c0-0.199,0.161-0.36,0.36-0.36h5c0.199,0,0.36,0.161,0.36,0.36v3 C22.36,20.199,22.199,20.36,22,20.36z M17.36,19.64h4.279v-2.28H17.36V19.64z M15,20.36h-5c-0.199,0-0.36-0.161-0.36-0.36v-3 c0-0.199,0.161-0.36,0.36-0.36h5c0.199,0,0.36,0.161,0.36,0.36v3C15.36,20.199,15.199,20.36,15,20.36z M10.36,19.64h4.28v-2.28 h-4.28C10.36,17.36,10.36,19.64,10.36,19.64z M22,15.36h-5c-0.199,0-0.36-0.161-0.36-0.36v-3c0-0.199,0.161-0.36,0.36-0.36h5 c0.199,0,0.36,0.161,0.36,0.36v3C22.36,15.199,22.199,15.36,22,15.36z M17.36,14.64h4.279v-2.28H17.36V14.64z M15,15.36h-5 c-0.199,0-0.36-0.161-0.36-0.36v-3c0-0.199,0.161-0.36,0.36-0.36h5c0.199,0,0.36,0.161,0.36,0.36v3 C15.36,15.199,15.199,15.36,15,15.36z M10.36,14.64h4.28v-2.28h-4.28C10.36,12.36,10.36,14.64,10.36,14.64z M8,15.36H3 c-0.199,0-0.36-0.161-0.36-0.36v-3c0-0.199,0.161-0.36,0.36-0.36h5c0.199,0,0.36,0.161,0.36,0.36v3C8.36,15.199,8.199,15.36,8,15.36 z M3.36,14.64h4.28v-2.28H3.36V14.64z M29,10.36h-5c-0.199,0-0.36-0.161-0.36-0.36V7c0-0.199,0.161-0.36,0.36-0.36h5 c0.199,0,0.36,0.161,0.36,0.36v3C29.36,10.199,29.199,10.36,29,10.36z M24.36,9.64h4.279V7.36H24.36V9.64z M22,10.36h-5 c-0.199,0-0.36-0.161-0.36-0.36V7c0-0.199,0.161-0.36,0.36-0.36h5c0.199,0,0.36,0.161,0.36,0.36v3 C22.36,10.199,22.199,10.36,22,10.36z M17.36,9.64h4.279V7.36H17.36V9.64z M15,10.36h-5c-0.199,0-0.36-0.161-0.36-0.36V7 c0-0.199,0.161-0.36,0.36-0.36h5c0.199,0,0.36,0.161,0.36,0.36v3C15.36,10.199,15.199,10.36,15,10.36z M10.36,9.64h4.28V7.36h-4.28 C10.36,7.36,10.36,9.64,10.36,9.64z M8,10.36H3c-0.199,0-0.36-0.161-0.36-0.36V7c0-0.199,0.161-0.36,0.36-0.36h5 c0.199,0,0.36,0.161,0.36,0.36v3C8.36,10.199,8.199,10.36,8,10.36z M3.36,9.64h4.28V7.36H3.36V9.64z"
                ></path>
                <rect
                  id="_Transparent_Rectangle"
                  style={{ fill: "none" }}
                  width="32"
                  height="32"
                ></rect>
              </g>
            </svg>
            <h2 className="font-semibold text-2xl ">Customizable UI/UX</h2>
            <p>
              White-label exchange interfaces with responsive dashboards,
              real-time charts, and trader-friendly tools.
            </p>
          </div>
        </div>
      </div>

      <div className="sm:mx-16 mx-4 my-24 grid sm:grid-cols-2">
        <h2 className="text-6xl font-semibold">Frequently Asked Questions</h2>
        <div className="my-6">
          <Accordion variant="splitted">
            <AccordionItem
              key="1"
              aria-label="Exchange Timeline"
              title="How long does it take to develop a crypto exchange?"
            >
              Development timelines vary based on complexity:
              <br />• Basic DEX with AMM: 4 days to a week
              <br />• Feature-rich CEX: a week to a month
              {/* <br />• Enterprise-grade hybrid exchange: 6+ months */}
              <br />
              We use agile development with bi-weekly deliverables.
            </AccordionItem>

            <AccordionItem
              key="2"
              aria-label="Exchange Cost"
              title="What's the cost to build a cryptocurrency exchange?"
            >
              Costs scale with features and security requirements:
              <br />• Basic DEX: $600 - $1000
              <br />• Medium CEX: $2000 - $10,000
              <br />• Institutional-grade exchange: $200,000+
              {/* <br />Includes matching engine, liquidity solutions, and security audits. */}
            </AccordionItem>

            <AccordionItem
              key="3"
              aria-label="Support"
              title="Do you provide ongoing exchange maintenance?"
            >
              Our premium support package includes:
              <br />• 99.9% uptime monitoring
              <br />• Hotfix deployment within 2 hours
              <br />• Quarterly security upgrades
              <br />• Liquidity provider coordination
              <br />• Compliance updates (travel rule, KYC/AML)
            </AccordionItem>

            <AccordionItem
              key="4"
              aria-label="Customization"
              title="Can you customize existing exchange software?"
            >
              We specialize in white-label solutions for:
              <br />• Binance/KuCoin cex style clones
              <br />• Uniswap/PancakeSwap forks
              <br />• Adding derivatives/options modules
              <br />• Cross-chain bridge integration
              <br />• Custom tokenomics implementations
            </AccordionItem>

            <AccordionItem
              key="5"
              aria-label="Security"
              title="What security measures do you implement?"
            >
              Enterprise-grade protection:
              <br />• Penetration testing + CertiK audits
              <br />• Multi-sig cold wallets
              <br />• DDoS mitigation (10TB+ capacity)
              <br />• Fraud detection AI
              <br />• Insurance fund integration
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Add your content here */}
    </div>
  );
};

export default BlockchainDevelopmentPage;
