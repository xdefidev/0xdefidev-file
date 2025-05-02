import React from "react";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import { Accordion, AccordionItem } from "@heroui/react";

import services from "../api/services";

import hero1 from "../../public/casino-hero-4.png";

const servicesList = [
"White-Label Crypto Casino Solutions",
  "Web3 Casino Platform Development",
  "Solana-Powered Casino Systems",
  "Provably Fair Smart Contracts",
  "Multi-Chain Gambling dApps",
  "Mobile-Optimized Web3 Casinos",
  "Loyalty Program Development",
  "Crypto Payment Gateway Integration",
  "Tokenized Reward Systems",

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
        stroke-linecap="round"
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
        stroke-linecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M5 12H19M19 12L13 6M19 12L13 18"
          stroke="#FFFFFF"
          stroke-width="2"
          stroke-linecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
};

const BlockchainDevelopmentPage = () => {
  const imageLink =
    "https://ik.imagekit.io/lzgpc48la/pexels-pixabay-265129_6m3A9XfLh.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663654325584";

  return (
    <div className="my-12 ">
      <div className="sm:mx-16 mx-4 grid sm:grid-cols-2 ">
        <div className="h-full flex flex-col justify-center ">
          {" "}
          <h1 className="text-4xl font-bold">
            Cryptocurrency <br/> Casino Development Services
          </h1>
          <p className="text-lg">
          We build blockchain-powered gambling platforms that combine provably fair systems with cutting-edge Web3 technology. As a leading crypto casino software development agency, we specialize in creating secure, transparent, and high-performance betting solutions for the decentralized economy—including crypto-enabled casinos, gambling websites, bots, and mini-apps with Play-to-Earn (P2E) integration.
          </p>
        </div>
        <div className="h-full flex justify-center items-center">
          <Image src={hero1} width={600} height={600} className="" />
        </div>
      </div>

      <div>
        <div className="sm:mx-16 mx-4 my-24 grid grid-flow-row justify-center items-center">
          <h2 className="text-3xl font-bold text-center">
            Why Choose Our Cryptocurrency Casino Development Services
          </h2>
          <p className="my-4 text-center text-lg">
          Our expertise includes custom EVM-based casino, White label solutions, provably fair RNG systems, and real-time monitoring tools to ensure your crypto casino operates with maximum security, transparency, and uptime.
          </p>
          <div className="relative w-full overflow-hidden bg-transparent">
            <motion.div
              className="flex space-x-6 w-max will-change-transform"
              initial={{ x: 0 }}
              animate={{ x: "-50%" }} // Moves by half since we duplicated the list
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 25, // Adjust speed
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
              item.category == "casino" && (
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
                    {item.status ? "active" : "out"}
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
          Crypto Casino Features
        </h2>

        <div className="grid sm:grid-cols-3  gap-4 my-6">
          <div className=" flex flex-col space-y-2">
          <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    stroke="#000000" 
    strokeWidth="0.88"
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
        d="M18.496 10.709L9.86 19.589c-.24.246-.638-.039-.483-.346l3.074-6.066c.101-.2-.044-.436-.268-.436H5.718c-.266 0-.4-.321-.213-.511l8.01-8.114c.232-.236.619.023.49.327l-2.297 5.416c-.085.199.063.42.28.417l6.291-.078c.267-.003.405.318.219.509z"
        stroke="#000000"
      />
    </g>
  </svg>
            <h2 className="font-semibold text-2xl ">High-Speed Gaming Infrastructure</h2>
            <p>
            Our systems process huge amounts of wagers per second with real-time settlement. Built on low-latency cloud servers and optimized game engines, we guarantee instant payouts – even during peak traffic.
            </p>
          </div>
          <div className=" flex flex-col space-y-2">
            <svg
              viewBox="0 0 32 32"
              id="_x3C_Layer_x3E_"
              version="1.1"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
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
                <style>{`
      .st0 {
        fill: none;
        stroke: #455A64;
        strokeLinecap: round;
        strokeLinejoin: round;
        strokeMiterlimit: 10;
      }
      .st1 {
        fill: none;
        stroke: #263238;
        strokeLinecap: round;
        strokeLinejoin: round;
        strokeMiterlimit: 10;
      }
    `}</style>
                <g id="Ethereum_x2C__crypto_x2C__cryptocurrency_1_">
                  <g id="XMLID_15_">
                    <polygon
                      className="st1"
                      id="XMLID_8_"
                      points="16.01,1.5 7.62,16.23 16.01,21.5 24.38,16.18"
                    ></polygon>
                    <line
                      className="st1"
                      id="XMLID_31_"
                      x1="16.01"
                      x2="16.01"
                      y1="30.5"
                      y2="24.1"
                    ></line>
                    <polygon
                      className="st1"
                      id="XMLID_12_"
                      points="16.01,30.5 7.62,18.83 16.01,24.1 24.38,18.78"
                    ></polygon>
                    <polygon
                      className="st1"
                      id="XMLID_30_"
                      points="16.01,12.3 7.62,16.23 16.01,21.5 24.38,16.18"
                    ></polygon>
                    <line
                      className="st1"
                      id="XMLID_32_"
                      x1="16.01"
                      x2="16.01"
                      y1="1.5"
                      y2="21.5"
                    ></line>
                    <polygon
                      className="st1"
                      id="XMLID_192_"
                      points="16.01,1.5 7.62,16.23 16.01,21.5 24.38,16.18"
                    ></polygon>
                  </g>
                </g>
              </g>
            </svg>
            <h2 className="font-semibold text-2xl ">EVM Casino Ready</h2>
            <p>
            Run provably fair slots, poker, and roulette using existing Ethereum smart contracts. Seamless migration from ETH/BSC casinos.
            </p>
          </div>
          <div className=" flex flex-col space-y-2">
            <svg
              viewBox="0 0 48 48"
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
        .a {
          fill: none;
          stroke: #000000;
          strokeLinecap: round;
          strokeLinejoin: round;
        }
      `}</style>
                </defs>
                <polyline
                  className="a"
                  points="23.971 35.016 26.233 35.016 26.959 38.431 23.624 38.431"
                ></polyline>
                <polyline
                  className="a"
                  points="42.158 31.771 30.588 31.984 26.233 35.016 26.617 16.784 29.008 10.85 40.621 6.239 42.5 11.96 40.792 18.706 40.963 22.121 39.853 23.759 42.158 31.771 40.066 40.267 31.527 37.62 26.959 41.761 23.971 41.761"
                ></polyline>
                <line
                  className="a"
                  x1="39.8529"
                  y1="23.7591"
                  x2="31.698"
                  y2="21.3529"
                ></line>
                <line
                  className="a"
                  x1="40.7922"
                  y1="18.7057"
                  x2="42.2865"
                  y2="18.4496"
                ></line>
                <line
                  className="a"
                  x1="42.2865"
                  y1="20.3282"
                  x2="40.8818"
                  y2="20.4987"
                ></line>
                <line
                  className="a"
                  x1="26.4389"
                  y1="25.2438"
                  x2="34.3878"
                  y2="25.0674"
                ></line>
                <polyline
                  className="a"
                  points="35.647 31.891 31.527 37.62 30.588 31.984 34.388 25.067 31.698 21.353 26.617 16.784 40.621 6.239"
                ></polyline>
                <line
                  className="a"
                  x1="26.2329"
                  y1="35.0155"
                  x2="31.5272"
                  y2="37.6199"
                ></line>
                <polygon
                  className="a"
                  points="27.45 29.663 30.636 28.478 28.362 27.293 27.45 29.663"
                ></polygon>
                <line
                  className="a"
                  x1="29.0081"
                  y1="10.8497"
                  x2="23.9708"
                  y2="10.8497"
                ></line>
                <polyline
                  className="a"
                  points="24.029 35.016 21.767 35.016 21.041 38.431 23.624 38.431"
                ></polyline>
                <polyline
                  className="a"
                  points="5.842 31.771 17.412 31.984 21.767 35.016 21.383 16.784 18.992 10.85 7.379 6.239 5.5 11.96 7.208 18.706 7.037 22.121 8.147 23.759 5.842 31.771 7.934 40.267 16.473 37.62 21.041 41.761 24.029 41.761"
                ></polyline>
                <line
                  className="a"
                  x1="8.1471"
                  y1="23.7591"
                  x2="16.302"
                  y2="21.3529"
                ></line>
                <line
                  className="a"
                  x1="7.2078"
                  y1="18.7057"
                  x2="5.7135"
                  y2="18.4496"
                ></line>
                <line
                  className="a"
                  x1="5.7135"
                  y1="20.3282"
                  x2="7.1182"
                  y2="20.4987"
                ></line>
                <line
                  className="a"
                  x1="21.5611"
                  y1="25.2438"
                  x2="13.6122"
                  y2="25.0674"
                ></line>
                <polyline
                  className="a"
                  points="12.353 31.891 16.473 37.62 17.412 31.984 13.612 25.067 16.302 21.353 21.383 16.784 7.379 6.239"
                ></polyline>
                <line
                  className="a"
                  x1="21.7671"
                  y1="35.0155"
                  x2="16.4728"
                  y2="37.6199"
                ></line>
                <polygon
                  className="a"
                  points="20.55 29.663 17.364 28.478 19.638 27.293 20.55 29.663"
                ></polygon>
                <line
                  className="a"
                  x1="18.9919"
                  y1="10.8497"
                  x2="24.0292"
                  y2="10.8497"
                ></line>
              </g>
            </svg>
            <h2 className="font-semibold text-2xl ">Web3 Wallet Integration</h2>
            <p>
            One-click MetaMask login for anonymous betting. Supports all ERC-20 tokens and casino chips.
            </p>
          </div>
          <div className=" flex flex-col space-y-2">
          <svg 
    viewBox="0 0 24 24" 
    id="Layer_1" 
    data-name="Layer 1" 
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
      <defs>
        <style>{`
          .cls-1 {
            fill: none;
            stroke: #020202;
            strokeMiterlimit: 10;
            strokeWidth: 0.648;
          }
        `}</style>
      </defs>
      <rect className="cls-1" x="3.38" y="3.38" width="17.25" height="17.25" rx="2.18"></rect>
      <rect className="cls-1" x="7.21" y="7.21" width="9.58" height="9.58" rx="1.92"></rect>
      <line className="cls-1" x1="7.21" y1="0.5" x2="7.21" y2="2.42"></line>
      <line className="cls-1" x1="12" y1="0.5" x2="12" y2="2.42"></line>
      <line className="cls-1" x1="16.79" y1="0.5" x2="16.79" y2="2.42"></line>
      <line className="cls-1" x1="7.21" y1="21.58" x2="7.21" y2="23.5"></line>
      <line className="cls-1" x1="12" y1="21.58" x2="12" y2="23.5"></line>
      <line className="cls-1" x1="16.79" y1="21.58" x2="16.79" y2="23.5"></line>
      <line className="cls-1" x1="0.5" y1="16.79" x2="2.42" y2="16.79"></line>
      <line className="cls-1" x1="0.5" y1="12" x2="2.42" y2="12"></line>
      <line className="cls-1" x1="0.5" y1="7.21" x2="2.42" y2="7.21"></line>
      <line className="cls-1" x1="21.58" y1="16.79" x2="23.5" y2="16.79"></line>
      <line className="cls-1" x1="21.58" y1="12" x2="23.5" y2="12"></line>
      <line className="cls-1" x1="21.58" y1="7.21" x2="23.5" y2="7.21"></line>
    </g>
  </svg>
            <h2 className="font-semibold text-2xl ">Provably Fair RNG</h2>
            <p>
           
            On-chain verifiable randomness for transparent dice, cards, and lottery games.
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
    aria-label="Development Timeline"
    title="How long does it take to build a crypto casino platform?"
  >
    Development time varies based on features:
    <br />• White-label solution: <strong>3 days to a week</strong>
    <br />• Custom Web3 casino: <strong>3-6 weeks</strong>
    <br />• Full provably fair ecosystem: <strong>8-12 weeks</strong>
    <br /><br />We use agile development to deliver fast without compromising security.
  </AccordionItem>
  
  <AccordionItem
    key="2"
    aria-label="Pricing"
    title="What's the cost to develop a crypto casino?"
  >
    Costs depend on complexity:
    <br />• Basic white-label: <strong>$400+</strong>
    <br />• Custom blockchain casino: <strong>$5,000+</strong>
    <br />• Enterprise-grade with P2E: <strong>$10,000+</strong>
    <br /><br /><em>Includes smart contracts, RNG systems, and multi-chain support.</em>
  </AccordionItem>

  <AccordionItem
    key="3"
    aria-label="Support"
    title="Do you provide ongoing casino maintenance?"
  >
    Yes, we offer 24/7 crypto casino support:
    <br />• Smart contract audits & upgrades
    <br />• Game fairness monitoring
    <br />• Payment gateway integrations
    <br />• Fraud prevention systems
    <br />• Player analytics dashboards
  </AccordionItem>

  <AccordionItem
    key="4"
    aria-label="Blockchains"
    title="Which blockchains do you support for gambling dApps?"
  >
    We develop on all major gambling-friendly chains:
    <br />• Ethereum & Layer 2s (Polygon, Arbitrum)
    <br />• Solana (High-speed slots & poker)
    <br />• BSC (Low-fee sports betting & Gambling)
    <br />• EOS & WAX (Provably fair dice)
    <br />• Custom EVM chains (Private casino networks)
  </AccordionItem>
</Accordion>
        </div>
      </div>

      {/* Add your content here */}
    </div>
  );
};

export default BlockchainDevelopmentPage;
