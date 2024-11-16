import Head from "next/head";
import Navbar from "./components/Navbar";
import styles from "/styles/Portfolio.module.css";
import portfolio from "./api/portfolio";

export default function Home() {
  console.log(portfolio);
  return (
    <div>
      <Head>
        <title>xDefiDev Portfolio</title>

        <meta property="og:title" content="Portfolio | View our Our Blockchain & Fullstack Development Projects" />

        <meta
          property="og:description"
          content="Explore our portfolio of innovative blockchain and fullstack development projects. See how we've helped businesses achieve their goals with cutting-edge web and mobile applications. Discover our success stories and find inspiration for your next project."
        />

        <meta name="description" content="Explore our portfolio of innovative blockchain and fullstack development projects. See how we've helped businesses achieve their goals with cutting-edge web and mobile applications. Discover our success stories and find inspiration for your next project." />

        <meta property="og:url" content="https://xdefidev.com" />

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
          content="Check our Portfolio | Blockchain and Fullstack Development services"
        />

        <meta
          property="twitter:description"
          content="Need Web3 Development Services? Let's take it out of your hands."
        />

        <meta property="og:site_name" content="Xdefidev Portfolio" />

        <meta name="robots" content="index, follow" />


        <link
          rel="canonical"
          href="https://xdefidev.com/portfolio"
          key="canonical"
        />
      </Head>
      <Navbar />
      <div className="text-center text-5xl !mb-8 font-semibold antialiased ">
        <h1>Portfolio</h1>
      </div>
      <div className={styles.body}>
        <div className={styles.container}>
          {portfolio.map((item) => (
            <a href={item.link} alt={item.description}>
              <div className={styles.box}>
                <img src={item.image} alt={item.description} loading="lazy" />
                <h2 className="!text-xl !font-semibold">{item.name}</h2>
                <p>{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
