import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import { motion } from "framer-motion";

import { Accordion, AccordionItem } from "@heroui/react";

import services from "../api/services";

import hero1 from "../../public/icons8-telegram-750-min.png";

const servicesList = [
"AI-Powered Telegram Chatbots",
"Automated Customer Support Bots",
"Interactive Command-Based Bots",
"Telegram Crypto Trading Bots (CEX/DEX Integration)",
"Automated Market-Making (AMM) Strategies for Bots",
"Price Alerts & Trading Signal Bots",
"Telegram Mini Apps with Wallet Connectivity",
"Cross-Chain Swap Integration in Bots",
"Staking & Yield Farming Automation via Bots",
"Crypto Payment & Checkout Bots",
"24/7 Bot Monitoring & Maintenance",

];

const Checkmark = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      width="25px"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
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
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
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
          stroke-width="2"
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
  <title>Telegram Bots & Mini Apps Development | xDefiDev</title>
  <meta property="og:title" content="Telegram Bot & Mini App Development Services | xDefiDev" />
  <meta property="og:description" content="Create powerful Telegram bots and mini apps to engage your audience. We develop custom Telegram solutions including payment bots, games, and business automation tools." />
  <meta name="description" content="Create powerful Telegram bots and mini apps to engage your audience. We develop custom Telegram solutions including payment bots, games, and business automation tools." />
  <meta property="og:url" content="https://xdefidev.com/categories/telegram-bots" />
  <meta property="og:image" content="https://ik.imagekit.io/lzgpc48la/pexels-pixabay-265129_6m3A9XfLh.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663654325584" />
  <meta property="twitter:image" content="https://ik.imagekit.io/lzgpc48la/pexels-pixabay-265129_6m3A9XfLh.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663654325584" />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:title" content="Telegram Bot & Mini App Development | xDefiDev" />
  <meta property="twitter:description" content="Custom Telegram solutions including bots, mini apps, and business automation." />
  <meta property="og:site_name" content="xDefiDev Telegram Development" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://xdefidev.com/categories/telegram-bots" key="canonical" />
</Head>
      <div className="sm:mx-16 mx-4 grid sm:grid-cols-2 ">
        <div className="h-full flex flex-col justify-center ">
          {" "}
          <h1 className="text-4xl font-bold">
            Telegram Bots<br /> & Mini Apps <br /> Development Services
          </h1>
          <p className="text-lg">
          We build high-performance Telegram bots and mini apps. Our expertise includes building AI-powered bots, Volume Generating bots, automated trading bots, interactive mini apps, and seamless crypto integrations within Telegram. We deliver scalable, secure, and user-friendly solutions tailored for engagement, automation, and decentralized finance (DeFi) on Telegram’s ecosystem.
          </p>
        </div>
        <div className="h-full flex justify-center items-center">
          <Image src={hero1} width={600} height={600} className="py-8" priority loading="eager" quality={85} />
        </div>
      </div>

      <div>
        <div className="sm:mx-16 mx-4 my-24 grid grid-flow-row justify-center items-center">
          <h2 className="text-3xl font-bold text-center">
            Why Choose Our Telegram Development Services
          </h2>
          <p className="my-4 text-center text-lg">
          We specialize in high-performance Telegram bots & mini apps designed for engagement, automation, and seamless crypto integration. Our expertise includes:  AI-Powered Chatbots, Interactive Mini Apps, Automated Trading Bots, and Seamless Crypto Integrations. We deliver scalable, secure, and user-friendly solutions tailored for the Telegram ecosystem.
          </p>
          <div className="relative w-full overflow-hidden bg-transparent">
            <motion.div
              className="flex space-x-6 w-max will-change-transform"
              initial={{ x: 0 }}
              animate={{ x: "-50%" }} // Moves by half since we duplicated the list
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 40, // Adjust speed
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
              item.category == "telegram bots" && (
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
        Telegram Bots and Mini Apps Features
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
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
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
              Performance & Scalability
            </h2>
            <p>
            Our bots handle millions of concurrent requests with sub-second response times, while mini apps use edge caching and CDN optimization for instant loading globally.
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
            Seamless API Ecosystem for Telegram  
            </h2>
            <p>
            Pre-built connectors for crypto exchanges (Binance, Bybit), payment gateways, and DeFi protocols via REST/WebSocket APIs + custom webhooks for real-time triggers.
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
            Self-Custody Crypto Solutions 
            </h2>
            <p>
            Direct wallet connections (MetaMask, WalletConnect) and wallet generation for secure, non-custodial swaps, balances, and transactions within Telegram bots/mini apps.
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
            End-to-end encryption, KYC/AML compliance for regulated mini apps, and anti-phishing safeguards for user accounts.
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
            <h2 className="font-semibold text-2xl ">Customization and Branding</h2>
            <p>
            Fully Branded Telegram Experiences  
            Custom bot personas, branded mini app interfaces, and tailored color schemes matching your corporate identity – all deployable under your domain.
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
    title="Can I customize bots/mini apps to match my brand?"
  >
   Yes! We offer white-label solutions: branded interfaces, custom bot personas, and adaptive UI themes—all deployable under your domain with no coding needed (via modular templates).
  </AccordionItem>
  
  <AccordionItem
    key="2"
    aria-label="Exchange Cost"
    title="What’s the development timeline for a Telegram trading bot or DeFi mini app?"
  >
    Basic bots take 4 days - 2 weeks; advanced mini apps (with wallets/trading) require 6-8 weeks. Clones take less time.</AccordionItem>

  <AccordionItem
    key="3"
    aria-label="Support"
    title="Do you provide ongoing exchange maintenance?"
  >
    Our premium support package includes:
    <br />• 99.9% uptime monitoring
    <br />• Hotfix deployment within 2 hours
    <br />• Quarterly security upgrades
    {/* <br />• Liquidity provider coordination */}
    <br />• Compliance updates (travel rule, KYC/AML)
  </AccordionItem>

  <AccordionItem
    key="4"
    aria-label="Customization"
    title="How secure are Telegram bots for crypto/financial services?"
  >
   Security includes:  
   <br/>
   <br/>• End-to-end encryption for all bot-user interactions  
   <br/>• Non-custodial WalletConnect/MetaMask integrations  
   <br/>• Optional KYC (SumSub, Onfido) for regulated services  
   <br/>• Smart contract audits (CertiK, Hacken) for DeFi mini apps  
   <br/>• Rate-limiting and anti-phishing protections  
We've built 50+ crypto bots with zero security breaches since 2019.
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
