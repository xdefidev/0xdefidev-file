import Head from "next/head";
import Navbar from "./components/Navbar";
import styles from "/styles/Portfolio.module.css";
import portfolio from "./api/portfolio";

export default function Home() {
  console.log(portfolio);
  return (
    <div>
      <Head>
        <title>0xDefiDev Portfolio</title>

        <meta property="og:title" content="Xdefidev Dev Portfolio" />

        <meta
          property="og:description"
          content="Need Blockchain Developer? View our Portfolio"
        />

        <meta property="og:url" content="https://xdefidev.shop" />

        <meta
          property="og:image"
          content="https://ik.imagekit.io/lzgpc48la/Yellow_Bright_Business_Idea_Tutorial_Youtube_Thumbnail_n186Tgza0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665836822605"
        />
      </Head>
      <Navbar />
      <div className={styles.body}>
        <div className={styles.container}>
          {portfolio.map((item) => (
            <a href={item.link}>
              <div className={styles.box}>
                <img src={item.image} />
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
