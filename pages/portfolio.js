import styles from "/styles/Portfolio.module.css";
import portfolio from "./api/portfolio";
import SeoHead from "./components/Seo";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  return (
    <div>
      <SeoHead
        title="Portfolio | Web3, DeFi & Blockchain Development Projects | XDefiDev"
        description="Explore XDefiDev's portfolio of blockchain and fullstack development projects: DeFi dApps, DEXs, staking platforms, NFT marketplaces, and custom EVM blockchains we've built for clients."
        path="/portfolio"
      />

      <div className="text-center text-5xl !mb-8 font-semibold antialiased ">
        <h1>Web3 & Blockchain Development Portfolio</h1>
      </div>
      <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-8">
        A selection of DeFi, NFT, exchange, and blockchain infrastructure projects delivered by the XDefiDev team.
      </p>
      <div className={styles.body}>
        <div className={styles.container}>
          {portfolio.map((item, index) => (
            <a
              href={item.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.box}>
                <img
                  src={item.image}
                  alt={`${item.name} - ${item.description.split('.')[0]} project screenshot`}
                  loading="lazy"
                />
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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
}
