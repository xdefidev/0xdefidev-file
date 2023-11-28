import Head from "next/head";
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
import bnb from "/public/bnb.svg";
import truffle from "/public/truffle.svg";
import hardhat from "/public/hardhat.svg";
import next from "/public/next.svg";
import react from "/public/react.svg";
import js from "/public/js.svg";
import nodejs from "/public/nodejs.svg";
import html from "/public/html.svg";
import solidity from "/public/solidity.svg";
import background from "/public/background.png";

export default function Home() {
  const imageLink =
    "https://ik.imagekit.io/lzgpc48la/pexels-pixabay-265129_6m3A9XfLh.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663654325584";

  return (
    <div>
      <Head>
        <title>0xDefiDev | Blockchain and Web Development services</title>
        <html lang="en" />

        <meta
          name="description"
          content="Are you looking for Blockchain Developer? we've got you! Push your crypto project from the ground up. Develop website, Smart contracts, Web3 dApps and Web applications. Network of doers with atleast 4 years of experience"
        />

        <meta http-equiv="content-language" content="en" />
        <meta
          name="google-site-verification"
          content="C7U3VQkY7WQDIkayBFDUf9CmlRoFm-jjUWTGRACRCig"
        />

        <meta property="og:title" content="Xdefidev Crypto Services" />

        <meta
          property="og:description"
          content="Need Blockchain Developer? Let's take it out of your hands."
        />

        <meta property="og:url" content="https://xdefidev.com" />

        <link rel="preconnect" href="https://ik.imagekit.io/" />

        <meta
          property="og:image"
          content="https://ik.imagekit.io/lzgpc48la/Yellow_Bright_Business_Idea_Tutorial_Youtube_Thumbnail_n186Tgza0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665836822605"
        />

        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          defer
        />
        <script
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

      <Navbar />

      <main className={styles.main}>
        <div className="grid sm:grid-cols-2 grid-cols-1 pt-4 sm:pt-1">
          <div className="mx-4 grid order-last grid-flow-row content-center">
            <h1 className="text-6xl mb-4 font-semibold antialiased">
              Web Development and Blockchain{" "}
              <a
                href="#"
                className="font-bold text-transparent sm:text-8xl text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
              >
                Services!
              </a>
            </h1>

            <p className="text-xl antialiased font-display">
              Hire Top Vetted Developers for Blockchain, Web and Mobile
            </p>
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
          loading="lazy"
        />

        <div className="" id="grid-container">
          <div className="text-center text-5xl !mb-8 font-semibold antialiased ">
            <h2>Services</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 my-4 sm:mx-5">
            {services.map((item, index) => (
              <Link
                href={`/services/${item.slug}`}
                className={styles.card}
                alt={item.description}
                key={index}
              >
                <a className={styles.card}>
                  <img
                    src={imageLink}
                    alt={item.name}
                    width="100%"
                    height="100%"
                    loading="lazy"
                  />
                  <div className="text-black text-xs font-semibold antialiased">
                    {item.status ? "active" : "out"}
                  </div>
                  <h3 className="text-gray-900 font-medium antialiased text-balance">
                    {item.name} &rarr;
                  </h3>
                  <p className="font-thin text-xs antialiased text-balance">
                    {item.description}
                  </p>
                </a>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-5xl font-bold flex justify-center py-4 font-display text-center items-center">
            Why Hire Us?
          </h2>

          <p className="sm:mx-24 mx-8 text-center antialiased text-balance">
            Since 2018, with over 127 successful projects the goal of Xdefidev
            has been to help project starters create innovative solutions in the
            cryptocurrency space. We have consistently strived to offer expert
            guidance, technical expertise and feasible solutions to clients
            looking to create and innovate!
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 px-4 mt-6 mb-24 sm:mx-8 gap-6 antialiased">
            <div className="flex-wrap space-y-2 text-center">
              <h2 className="text-2xl font-bold ">Cost-Effective and Timely</h2>
              <p className="">
                We work with your budget and strive to provide high-quality
                services that are affordable and accessible to businesses of all
                sizes. we coordinate each project to ensure fast deliveries. You
                can save time and money by outsourcing your projects to our
                professionals.
              </p>
            </div>
            <div className="flex-wrap space-y-2 text-center">
              <h2 className="text-2xl font-bold">Professional Expertise</h2>
              <p className="">
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
              <p className="">
                We provide ongoing support and maintenance services after the
                completion of your project. we also ensure long-term success of
                each projects.
              </p>
            </div>
          </div>
        </div>

        <div className="my-24 mx-4 text-xl sm:px-8 px-4 leading-10 antialiased">
          <p className="">
            To make your ideas a reality, are you looking for remote Web and
            Blockchain developers? Look nowhere else! For both the Web2 and the
            decentralized Web3, our team specializes in building{" "}
            <u>custom websites</u>, programming intelligent{" "}
            <u>smart contracts</u>, and deploying cutting-edge{" "}
            <u>decentralized applications</u>. Count on us to offer outstanding
            results suited to your specific demands. -{" "}
            <code className={styles.code}>all in one place.</code>
          </p>
        </div>
      </main>

      <div className={styles.skill}>
        <h2 className="text-5xl font-bold antialiased">Technology</h2>
        <p className="my-4 !text-2xl antialiased">Blockchains</p>
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
        </div>
        <p className="my-4 !text-2xl antialiased">Blockchain Technologies</p>
        <div>
          <div>
            <Image
              src={solidity}
              width={60}
              height={60}
              loading="lazy"
              alt="solidity"
            />
            {/* <p>Solidity</p> */}
          </div>
          <div>
            <Image
              src={truffle}
              width={60}
              height={60}
              loading="lazy"
              alt="truffle"
            />
            {/* <p>Truffle</p> */}
          </div>
          <div>
            <Image
              src={hardhat}
              width={60}
              height={60}
              loading="lazy"
              alt="hardhat"
            />
            {/* <p>Hardhat</p> */}
          </div>
        </div>
        <p className="my-4 !text-2xl antialiased">Web Technologies</p>
        <div>
          <div>
            <Image
              src={next}
              width={60}
              height={60}
              loading="lazy"
              alt="nextjs"
            />
            {/* <p>NextJS</p> */}
          </div>
          <div>
            <Image
              src={js}
              width={60}
              height={60}
              loading="lazy"
              alt="javacript"
            />
            {/* <p>Javascript</p> */}
          </div>
          <div>
            <Image
              src={html}
              width={60}
              height={60}
              loading="lazy"
              alt="html"
            />
            {/* <p>HTML</p> */}
          </div>
          <div>
            <Image
              src={react}
              width={60}
              height={60}
              loading="lazy"
              alt="reactJS"
            />
            {/* <p>React</p> */}
          </div>
          <div>
            <Image
              src={nodejs}
              width={60}
              height={60}
              loading="lazy"
              alt="NodeJS"
            />
            {/* <p>NodeJS</p> */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
