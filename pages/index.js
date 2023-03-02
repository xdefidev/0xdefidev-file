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
import background from "/public/background.svg";

export default function Home() {
  const imageLink =
    "https://ik.imagekit.io/lzgpc48la/pexels-pixabay-265129_6m3A9XfLh.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663654325584";

  return (
    <div>
      <Head>
        <title>0xDefiDev | Blockchain and Web Development services</title>

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

        <meta property="og:url" content="https://xdefidev.shop" />

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
        <div className="header">
          <div>
            <h1 className={styles.title}>
              Web Development and Blockchain <a href="">Services!</a>
            </h1>

            <p className={styles.description}>
              Let us do all the work for you so you don't have to.{" "}
              {/* <code className={styles.code}>
                <></>
              </code> */}
            </p>
          </div>
          <div>
            <Image src={background} height={700} width={700} />
          </div>
        </div>

        <img
          src="https://ik.imagekit.io/lzgpc48la/down-arrow_vkeVMp4_k.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663634428959"
          className="arrow-down"
        />

        <div className="grid-container" id="grid-container">
          <div className="services">
            <h2>Development Services</h2>
          </div>
          <div className={styles.grid}>
            {services.map((item, index) => (
              <Link
                href={`/services/${item.slug}`}
                className={styles.card}
                alt={item.description}
                key={index}
              >
                <a className={styles.card}>
                  <img src={imageLink} alt={item.name} width="100%" />
                  <div>{item.status ? "active" : "out"}</div>
                  <h3>{item.name} &rarr;</h3>
                  <p>{item.description}</p>
                </a>
              </Link>
            ))}
          </div>
        </div>

        <p className={styles.description2}>
          To make your ideas a reality, are you looking for remote Web and
          Blockchain developers? Look nowhere else! For both the Web2 and the
          decentralized Web3, our team specializes in building{" "}
          <u>custom websites</u>, programming intelligent <u>smart contracts</u>
          , and deploying cutting-edge <u>decentralized applications</u>. Count
          on us to offer outstanding results suited to your specific demands. -{" "}
          <code className={styles.code}>all in one place.</code>
        </p>
      </main>

      <div className={styles.skill}>
        <h2>Tech we use</h2>
        <p>Blockchain</p>
        <div>
          <div>
            <Image src={eth} width={60} height={60} />
            <p>Ethereum</p>
          </div>
          <div>
            <Image src={bnb} width={60} height={60} />
            <p>Binance Smart Chain</p>
          </div>
          <div>
            <Image src={avax} width={60} height={60} />
            <p>Avalanche</p>
          </div>
          <div>
            <Image src={polygon} width={60} height={60} />
            <p>Polygon</p>
          </div>
          <div>
            <Image src={fantom} width={60} height={60} />
            <p>Fantom</p>
          </div>
        </div>
        <p>Blockchain Technologies</p>
        <div>
          <div>
            <Image src={solidity} width={60} height={60} />
            <p>Solidity</p>
          </div>
          <div>
            <Image src={truffle} width={60} height={60} />
            <p>Truffle</p>
          </div>
          <div>
            <Image src={hardhat} width={60} height={60} />
            <p>Hardhat</p>
          </div>
        </div>
        <p>Web Development Technologies</p>
        <div>
          <div>
            <Image src={next} width={60} height={60} />
            <p>NextJS</p>
          </div>
          <div>
            <Image src={js} width={60} height={60} />
            <p>Javascript</p>
          </div>
          <div>
            <Image src={html} width={60} height={60} />
            <p>HTML</p>
          </div>
          <div>
            <Image src={react} width={60} height={60} />
            <p>React</p>
          </div>
          <div>
            <Image src={nodejs} width={60} height={60} />
            <p>NodeJS</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
