import Head from "next/head";
import Script from 'next/script';
import styles from "../styles/Home.module.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import services from "./api/services";
import Link from "next/link";
import Image from "next/image";
import eth from "/public/eth.svg";
import avax from "/public/avax.svg";
import polygon from "/public/polygon.svg";
import fantom from "/public/fantom.svg";
import solana from "/public/solana.svg";
import base from "/public/base.svg";
import bnb from "/public/bnb.svg";
import truffle from "/public/truffle.svg";
import hardhat from "/public/hardhat.svg";
import next from "/public/next.svg";
import react from "/public/react.svg";
import js from "/public/js.svg";
import nodejs from "/public/nodejs.svg";
import html from "/public/html.svg";
import solidity from "/public/solidity.svg";
import background from "/public/background-illustration.png";
import incaswap from "/public/clients/incaswap.jpeg";
import trapix from "/public/clients/trapix.jpeg";
import pattie from "/public/clients/pattie.png";
import c12 from "/public/clients/c12.jpeg";
import shine from "/public/clients/shine-blockchain.png";
import neobinance from "/public/clients/neo-binance.png";
import fortress from "/public/clients/fortress.svg"
import midasforge from "/public/clients/midasforge.png";

import Telegram from "/public/telegram.svg";
import Discord from "/public/discord-round-black-icon.png";
import Whatsapp from "/public/whatsapp2.png";
import contact from "/public/contact-us-filled-svgrepo-com.svg";
import Mail from "/public/mail.svg";

import illus2 from "/public/illustration-2.png";




export default function Home() {
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
    <div className="mb-24">
      <Head>
        <title>xDefiDev | Blockchain and Web Development services</title>

        <meta
          name="description"
          content="Need skilled Web3 Developers? We’ve got you! Boost your crypto project with our experts in web dev, smart contracts, Web3 dApps, and web apps."
        />

        {/* <html lang="en" /> */}

        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="google-site-verification"
          content="C7U3VQkY7WQDIkayBFDUf9CmlRoFm-jjUWTGRACRCig"
        />

        <meta property="og:title" content="Xdefidev Crypto Services" />

        <meta
          property="og:description"
          content="Need Web3 Development Services? Let's take it out of your hands."
        />

        <meta property="og:url" content="https://xdefidev.com" />

        <meta name="msvalidate.01" content="31439297EBABC2B44C416D8F49DF775E" />

        <link rel="preconnect" href="https://ik.imagekit.io/" />

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" sizes="32x32" href="/favicon-32x32.png" />



        <link
          rel="canonical"
          href="https://xdefidev.com"
          key="canonical"
        />

        <meta
          property="og:image"
          content="https://ik.imagekit.io/lzgpc48la/Yellow_Bright_Business_Idea_Tutorial_Youtube_Thumbnail_n186Tgza0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665836822605"
        />
        <meta
          property="twitter:image"
          content="https://ik.imagekit.io/lzgpc48la/Yellow_Bright_Business_Idea_Tutorial_Youtube_Thumbnail_n186Tgza0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665836822605"
        />

        <meta property="twitter:card" content="summary_large_image" />

        <meta
          property="twitter:title"
          content="Blockchain and Fullstack Development services"
        />

        <meta
          property="twitter:description"
          content="Need Web3 Development Services? Let's take it out of your hands."
        />

        <meta property="og:site_name" content="Xdefidev" />

        <meta name="keywords" content="blockchain development, crypto development, dApps, Web3 applications, smart contracts, Ethereum, Solidity, blockchain technology, decentralized applications, DeFi, NFT development, Web3 development, crypto projects, fullstack blockchain, web development, front-end development, backend development, JavaScript, React, Node.js, smart contract programming, decentralized finance, blockchain consulting, cryptocurrency, blockchain security, blockchain developer, blockchain solutions, blockchain integration, digital wallets, tokenization, blockchain architecture, web application development, custom blockchain solutions, token contracts, smart contract audits, EVM, Web3.js, Truffle, Remix, blockchain frameworks, consensus mechanisms, blockchain nodes, blockchain networks, distributed ledger technology, cross-chain compatibility, blockchain ecosystems, blockchain APIs, dApp frameworks, decentralized finance apps, blockchain protocols, private blockchain development, enterprise blockchain, crypto wallet integration, blockchain scaling, NFT minting, crypto exchange development" />

        <meta name="robots" content="index, follow" />

        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          defer
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
          defer
        />
      </Head>



      <main className={styles.main}>
        <div className="grid sm:grid-cols-2 grid-cols-1 pt-4 sm:pt-1">
          <div className="mx-4 grid order-last grid-flow-row content-center">
            <h1 className="sm:text-6xl text-4xl font-semibold antialiased">
              Web and Blockchain Development{" "}
              <a
                href="#"
                className="font-bold text-transparent sm:text-8xl text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
              >
                Services!
              </a>
            </h1>

            <p className="text-xl antialiased font-display text-balance">
            Trusted devs for your blockchain & web projects – Audited, secure, and delivered fast.
            </p>
            {/* <div></div> */}
            <div className="flex pt-2 mt-4 gap-2">
              <Link href="https://t.me/xdefideveloper" className=" flex gap-1 ">
                <Image
                  src={Telegram}
                  width={30}
                  height={30}
                  className="invert "
                  alt="contact us"
                />
              </Link>
              <Link
                href="https://discord.com/users/839903148462178315/"
                className=" flex gap-1 "
              >
                <Image
                  src={Discord}
                  width={30}
                  height={30}
                  className=" "
                  alt="contact us"
                />
              </Link>
              <Link href="https://wa.me/+17062289620" className=" flex gap-1 ">
                <Image
                  src={Whatsapp}
                  width={35}
                  height={30}
                  className=" "
                  alt="contact us"
                />
              </Link>
              {/* <Link
                href="#"
                className="border border-slate-950 rounded flex gap-1 py-2 px-4 hover:invert hover:bg-white"
              >
                <Image src={Mail} width={20} height={20} className="invert" />
                E-mail
              </Link> */}
            </div>
          </div>
          <div>
            <Image src={background} height={700} width={600} alt="background" />
          </div>
        </div>

        <img
          src="https://ik.imagekit.io/lzgpc48la/down-arrow_vkeVMp4_k.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663634428959"
          className="arrow-down"
          width="100%"
          height="100%"
          alt="cryptocurrency logo header"
          // loading="lazy"
          priority loading="eager" quality={85}
        />

        <div className="" id="grid-container">
          <div className="text-center text-5xl !mb-8 font-semibold antialiased ">
            <h2>Services</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 my-4 sm:mx-5">
            {services.map(
              (item, index) =>
                index < 9 && (
                  <Link
                    href={`/services/${item.slug}`}
                    className={styles.card}
                    alt={item.description}
                    key={index}
                  >
                    <img
                      src={item.image || imageLink}
                      alt={item.name}
                      width="100%"
                      height="100%"
                      loading="lazy"
                    />
                    <div className="text-black text-xs font-semibold antialiased">
                    {formatUSD(item.price)}
                    </div>
                    <h3 className="text-gray-900 font-semibold antialiased text-xl text-balance">
                      {item.name}
                    </h3>
                    <p className="truncate line-clamp max-h-[75px] font-base text-xs antialiased text-balance !font-josefin">
                      {item.description}
                    </p>
                  </Link>
                )
            )}
          </div>
          <div className="flex w-full justify-center">
            <Link href="/services" className="rounded border px-4 py-2 border-[#000]">
              <text>View All</text>
            </Link>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-5xl font-bold flex justify-center py-4 font-display text-center items-center">
            Why Hire Us?
          </h2>

          <p className="sm:mx-24 mx-8 text-center text-xl antialiased text-balance pb-6">
            Since 2018, with 200+ successful projects the goal of Xdefidev
            has been to help project starters create innovative solutions in the
            cryptocurrency space. We have consistently strived to offer expert
            guidance, technical expertise and feasible solutions to clients
            looking to create and innovate!
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 px-4 mt-6 mb-12 sm:mx-8 gap-6 antialiased">
            <div className="flex-wrap space-y-2 text-center">
              <h2 className="text-2xl font-bold ">Cost-Effective and Timely</h2>
              <p className="text-xl">
                We work with your budget and strive to provide high-quality
                services that are affordable and accessible to businesses of all
                sizes. we coordinate each project to ensure fast deliveries. You
                can save time and money by outsourcing your projects to our
                professionals.
              </p>
            </div>
            <div className="flex-wrap space-y-2 text-center">
              <h2 className="text-2xl font-bold">Professional Expertise</h2>
              <p className="text-xl">
                Our hand picked Developers have the experience to build
                high-quality, responsive, and user-friendly websites and
                applications. They understand the latest technologies and design
                trends and can ensure that your website is up-to-date with the
                latest features, functionality, and security measures.{" "}
              </p>
            </div>
            <div className="flex-wrap space-y-2 text-center">
              <h2 className="text-2xl font-bold">
                Ongoing Support and Maintenance
              </h2>
              <p className="text-xl">
                We provide ongoing support and maintenance services after the
                completion of your project. we also ensure long-term success of
                each projects.
              </p>
            </div>
          </div>
        </div>

        <div className="my-12 mx-4 text-xl sm:px-8 px-4 leading-10 antialiased grid sm:grid-cols-2 grid-cols-1 items-center">
          <p className="">
            Are you searching for remote Web and Blockchain developers to bring
            your ideas to life? Look no further! Our expert team specializes in
            crafting <u>custom websites</u>, coding advanced{" "}
            <u>smart contracts</u>, and launching innovative{" "}
            <u>decentralized applications</u> for both Web2 and Web3. Trust us
            to deliver exceptional solutions tailored to your unique needs—all{" "}
            <code className={styles.code}>in one place.</code>
          </p>

          <div className="w-full">
          <Image
                  src={illus2}
                  width={500}
                  height={500}
                  className="w-full h-full"
                  alt="contact us"
                />
          </div>
        </div>
      </main>

      <div className={`${styles.skill} items-center`}
      >
        <h2 className="text-5xl font-bold antialiased">Technology</h2>
        <p className="my-4 !text-2xl antialiased">Blockchain Networks We Work With</p>
        <div>
          <div>
            <Image
              src={eth}
              width={60}
              height={60}
              loading="lazy"
              alt="ethereum blockchain"
            />
            {/* <p>Ethereum</p> */}
          </div>
          <div>
            <Image
              src={bnb}
              width={60}
              height={60}
              loading="lazy"
              alt="binance smart chain"
            />
            {/* <p>Binance Smart Chain</p> */}
          </div>
          <div>
            <Image
              src={avax}
              width={60}
              height={60}
              loading="lazy"
              alt="avalanche (AVAX) blockchain"
            />
            {/* <p>Avalanche</p> */}
          </div>
          <div>
            <Image
              src={polygon}
              width={60}
              height={60}
              loading="lazy"
              alt="polygon mainnet blockchain"
            />
            {/* <p>Polygon</p> */}
          </div>
          <div>
            <Image
              src={fantom}
              width={60}
              height={60}
              loading="lazy"
              alt="fantom blockchain"
            />
            {/* <p>Fantom</p> */}
          </div>

          <div>
            <Image
              src={solana}
              width={60}
              height={60}
              loading="lazy"
              alt="solana blockchain"
            />
            {/* <p>Fantom</p> */}
          </div>

          <div>
            <Image
              src={base}
              width={60}
              height={60}
              loading="lazy"
              alt="base blockchain"
            />
            {/* <p>Fantom</p> */}
          </div>
        </div>
        
      
      </div>

      <div className="items-center flex flex-col justify-center my-4 space-y-4">
        <h2 className="text-5xl font-bold antialiased">Clients</h2>
        <div className="grid grid-cols-4 gap-[1px]">
          <div>
            <Image
              src={incaswap}
              width={100}
              height={100}
              loading="lazy"
              alt="Incaswap"
            />
            {/* <p>HTML</p> */}
          </div>
          <div>
            <Image
              src={trapix}
              width={100}
              height={100}
              loading="lazy"
              alt="Trapix"
            />
            {/* <p>React</p> */}
          </div>
          <div>
            <Image
              src={pattie}
              width={100}
              height={100}
              loading="lazy"
              alt="Pattie"
            />
            {/* <p>NodeJS</p> */}
          </div>
          <div>
            <Image
              src={c12}
              width={100}
              height={100}
              loading="lazy"
              alt="C12"
            />
            {/* <p>NodeJS</p> */}
          </div>
          <div>
            <Image
              src={shine}
              width={100}
              height={100}
              loading="lazy"
              alt="Shine Blockchain"
            />
            {/* <p>NodeJS</p> */}
          </div>
          <div>
            <Image
              src={neobinance}
              width={100}
              height={100}
              loading="lazy"
              alt="Neo Binance"
            />
            {/* <p>NodeJS</p> */}
          </div>
          <div>
            <Image
              src={fortress}
              width={100}
              height={100}
              loading="lazy"
              alt="Fortress Blockchain"
            />
            {/* <p>NodeJS</p> */}
          </div>
          <div>
            <Image
              src={midasforge}
              width={100}
              height={100}
              loading="lazy"
              alt="Midas Forge"
            />
            {/* <p>NodeJS</p> */}
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
