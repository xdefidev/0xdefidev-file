import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import { motion } from "framer-motion";

import { Accordion, AccordionItem } from "@heroui/react";

import services from "../api/services";

import hero1 from "../../public/blockchain-hero-1.png";

const servicesList = [
  "Blockchain Ecosystem Development",
  "Smart Contract Development",
  "Decentralized Application (dApp) Development",
  "Blockchain Consulting",
  "Blockchain Wallet Development",
  "Blockchain Integration",
  "Blockchain Testing",
  "Blockchain Maintenance",
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
        <title>Blockchain Development Services | xDefiDev</title>
        <meta
          property="og:title"
          content="Professional Blockchain Development Services | xDefiDev"
        />
        <meta
          property="og:description"
          content="Expert blockchain development services including smart contracts, dApps, and custom blockchain solutions. We build secure, scalable decentralized applications for your business needs."
        />
        <meta
          name="description"
          content="Expert blockchain development services including smart contracts, dApps, and custom blockchain solutions. We build secure, scalable decentralized applications for your business needs."
        />
        <meta
          property="og:url"
          content="https://xdefidev.com/categories/blockchain-development"
        />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/hp2oyifpf/Layer%202%20blockchain%20(1).png?updatedAt=1724719658061"
        />
        <meta
          property="twitter:image"
          content="https://ik.imagekit.io/hp2oyifpf/Layer%202%20blockchain%20(1).png?updatedAt=1724719658061"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Blockchain Development Services | xDefiDev"
        />
        <meta
          property="twitter:description"
          content="Professional blockchain development for your business needs. Smart contracts, dApps, and custom solutions."
        />
        <meta
          property="og:site_name"
          content="xDefiDev Blockchain Development"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://xdefidev.com/categories/blockchain-development"
          key="canonical"
        />
      </Head>
      <div className="sm:mx-16 mx-4 grid sm:grid-cols-2 ">
        <div className="h-full flex flex-col justify-center ">
          {" "}
          <h1 className="text-4xl font-bold">
            Blockchain <br /> Development Services
          </h1>
          <p className="text-lg">
            We are a leading blockchain development team offering comprehensive
            outsourced blockchain software development services. We specialize
            in creating innovative solutions, including blockchain ecosystem
            development, smart contract creation, and decentralized application
            (dApp) development.
          </p>
        </div>
        <div className="h-full flex justify-center items-center">
          <Image src={hero1} width={600} height={600} className="" priority={true} loading="eager" quality={85}  />
        </div>
      </div>

      <div>
        <div className="sm:mx-16 mx-4 my-24 grid grid-flow-row justify-center items-center">
          <h2 className="text-3xl font-bold text-center">
            Why Choose Our Blockchain Development Services
          </h2>
          <p className="my-4 text-center text-lg">
            We specialize in EVM blockchain forks, custom Explorers, and Uptime
            Monitoring tools to ensure your blockchain network runs seamlessly.
            Whether you need Proof of Authority (PoA), Proof of Stake (PoS),
            Proof of Work (PoW), or Delegated Proof of Stake (DPoS) solutions,
            our team delivers tailored, high-performance systems.
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
              item.category == "blockchain" && (
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
          Blockchain Features
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
            <h2 className="font-semibold text-2xl ">High Scalability</h2>
            <p>
              Our blockchain solutions can handle increasing transaction loads
              and data storage seamlessly without sacrificing performance or
              security.
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
            <h2 className="font-semibold text-2xl ">EVM Compatibility</h2>
            <p>
              The solutions are fully compatible with all Ethereum's contracts
              and dapps without requiring modifications.
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
            <h2 className="font-semibold text-2xl ">Metamask Wallet</h2>
            <p>
              Fully compatible with MetaMask, supports assets, transactions and
              dapps.
            </p>
          </div>
          <div className=" flex flex-col space-y-2">
            <svg
              fill="#000000"
              height="60"
              width="60"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <g>
                    <path d="M503.449,292.818v-11.165c0-70.433-57.3-127.733-127.733-127.733H219.942c-3.354-9.93-12.752-17.102-23.8-17.102h-9.086 v-9.086c0-13.851-11.268-25.119-25.119-25.119h-0.534V84.443h86.046c13.851,0,25.119-11.268,25.119-25.119 c0-13.851-11.268-25.119-25.119-25.119h-86.046v-9.086C161.403,11.268,150.135,0,136.284,0s-25.119,11.268-25.119,25.119v9.086 H25.119C11.268,34.205,0,45.473,0,59.324c0,13.851,11.268,25.119,25.119,25.119h86.046v18.171h-0.534 c-13.851,0-25.119,11.268-25.119,25.119v9.086h-9.086c-11.048,0-20.446,7.172-23.8,17.102H8.017c-4.427,0-8.017,3.589-8.017,8.017 v102.614c0,4.427,3.589,8.017,8.017,8.017h44.609c3.354,9.93,12.752,17.102,23.8,17.102h119.716 c11.048,0,20.446-7.172,23.8-17.102h155.774c5.01,0,9.086,4.076,9.086,9.086v11.165c-5.093,2.829-8.551,8.26-8.551,14.489v25.653 c0,9.136,7.432,16.568,16.568,16.568h102.614c9.136,0,16.568-7.432,16.568-16.568v-25.653 C512,301.078,508.542,295.647,503.449,292.818z M51.307,256.534H16.033v-86.58h35.273V256.534z M127.198,25.119 c0-5.01,4.076-9.086,9.086-9.086s9.086,4.076,9.086,9.086v9.086h-18.171V25.119z M25.119,68.409c-5.01,0-9.086-4.076-9.086-9.086 c0-5.01,4.076-9.086,9.086-9.086h222.33c5.01,0,9.086,4.076,9.086,9.086c0,5.01-4.076,9.086-9.086,9.086H25.119z M145.37,84.443 v18.171h-18.171V84.443H145.37z M101.545,127.733c0-5.01,4.076-9.086,9.086-9.086h51.307c5.01,0,9.086,4.076,9.086,9.086v9.086 h-69.478V127.733z M205.228,264.551c0,5.01-4.076,9.086-9.086,9.086H76.426c-5.01,0-9.086-4.076-9.086-9.086V161.937 c0-5.01,4.076-9.086,9.086-9.086h119.716c5.01,0,9.086,4.076,9.086,9.086V264.551z M375.716,256.534H221.261v-86.58h154.455 c61.592,0,111.699,50.108,111.699,111.699v9.086h-86.58v-9.086C400.835,267.803,389.567,256.534,375.716,256.534z M495.967,332.96 c0,0.295-0.239,0.534-0.534,0.534H392.818c-0.295,0-0.534-0.239-0.534-0.534v-25.653c0-0.295,0.239-0.534,0.534-0.534h102.614 c0.295,0,0.534,0.239,0.534,0.534V332.96z"></path>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M472.301,401.396c-10.854-17.366-21.567-30.271-22.017-30.812c-1.523-1.828-3.78-2.885-6.159-2.885 c-2.379,0-4.636,1.057-6.159,2.885c-0.45,0.541-11.164,13.447-22.017,30.812c-14.995,23.99-22.596,44.121-22.596,59.831 c0,27.995,22.777,50.772,50.772,50.772c27.995,0,50.772-22.777,50.772-50.772C494.898,445.517,487.296,425.386,472.301,401.396z M444.125,495.967c-19.155,0-34.739-15.584-34.739-34.739c0-21.804,21.359-54.782,34.741-72.56 c13.384,17.765,34.737,50.721,34.737,72.56C478.864,480.382,463.28,495.967,444.125,495.967z"></path>
                  </g>
                </g>
              </g>
            </svg>
            <h2 className="font-semibold text-2xl ">Faucet</h2>
            <p>
              Our blockchain solutions can handle increasing transaction loads
              and data storage seamlessly without sacrificing performance or
              security.
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
              aria-label="Accordion 1"
              title="How long does it take to develop a blockchain solution?"
            >
              The timeline depends on the scope of the project. Each project can
              take upto 1–4 weeks or more. We follow an agile development
              process to ensure timely delivery without compromising quality.
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              title="What is the cost of blockchain development?"
            >
              The cost of blockchain development varies depending on the
              complexity of the project, the features required, and the
              blockchain platform used. Simple projects like smart contract
              development may start from $500 while more complex projects like
              custom blockchain test and main networks can cost upwards of
              $1000.
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Accordion 3"
              title="Do you provide post-development support?"
            >
              Yes, we offer comprehensive post-development support, including:
              <br />
              Regular maintenance and updates.
              <br />
              Bug fixes and troubleshooting.
              <br />
              Performance optimization. <br />
              24/7 technical support.
            </AccordionItem>
            <AccordionItem
              key="4"
              aria-label="Accordion 4"
              title="What industries benefit most from blockchain?"
            >
              We cater to different industries such as Finance and Banking,
              Healthcare, Supply Chain and Logistics, Real Estate, Gaming and
              Entertainment, E-commerce
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Add your content here */}
    </div>
  );
};

export default BlockchainDevelopmentPage;
