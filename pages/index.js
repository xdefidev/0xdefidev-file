import Script from 'next/script';
import styles from "../styles/Home.module.css";
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
import background from "/public/background-illustration.png";
import incaswap from "/public/clients/incaswap.jpeg";
import trapix from "/public/clients/trapix.jpeg";
import pattie from "/public/clients/pattie.png";
import c12 from "/public/clients/c12.jpeg";
import shine from "/public/clients/shine-blockchain.png";
import neobinance from "/public/clients/neo-binance.png";
import fortress from "/public/clients/fortress.svg"
import midasforge from "/public/clients/midasforge.png";

import illus2 from "/public/illustration-2.png";
import CarouselFn from "./components/Carousel";
import SeoHead, { SITE_URL } from "./components/Seo";
import { Accordion, AccordionItem } from "@heroui/react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

const developmentProcess = [
  {
    title: "Discovery & Strategy",
    description:
      "We analyze your product goals, target users, and technical requirements to define a clear blockchain roadmap, tokenomics model, and delivery milestones before any code is written.",
  },
  {
    title: "Architecture & Prototyping",
    description:
      "Our engineers design the system architecture, select the right chain and tooling, and deliver an interactive prototype so you can validate the product experience early.",
  },
  {
    title: "Smart Contract Development",
    description:
      "We write, test, and deploy secure Solidity and Rust smart contracts with rigorous unit tests, gas optimization, and code reviews as an integral part of the build.",
  },
  {
    title: "dApp & Frontend Build",
    description:
      "Our full-stack team connects wallets, builds responsive interfaces, and integrates on-chain data with subgraphs and indexers to ship a production-grade Web3 application.",
  },
  {
    title: "Security Audit & Launch",
    description:
      "Before launch we run internal security reviews, coordinate third-party smart contract audits, and deploy with monitored infrastructure and post-launch support.",
  },
];

const industries = [
  {
    title: "DeFi & Fintech",
    description:
      "Lending and borrowing protocols, yield aggregators, stablecoins, and payment rails for fintech products built on blockchain.",
  },
  {
    title: "NFTs & Web3 Gaming",
    description:
      "NFT marketplaces, collections, play-to-earn ecosystems, and GameFi economies with market-ready smart contracts.",
  },
  {
    title: "Crypto Trading & Exchanges",
    description:
      "CEX and DEX platforms, trading bots, order-matching engines, and liquidity solutions for startups and scale-ups.",
  },
  {
    title: "Enterprises & Institutions",
    description:
      "Private blockchains, tokenization, supply chain tracking, and enterprise-grade wallets for regulated industries.",
  },
  {
    title: "Startups & Protocols",
    description:
      "End-to-end product development for founders launching new protocols, tokens, and community-driven platforms.",
  },
];

const faqs = [
  {
    question: "What does XDefiDev do?",
    answer:
      "XDefiDev is a Web3 development agency that designs, builds, and secures decentralized applications. We specialize in smart contract engineering, DeFi protocol development, dApps, NFT marketplaces, blockchain infrastructure, and crypto exchange platforms for founders, startups, DAOs, and enterprises.",
  },
  {
    question: "What blockchain networks are supported?",
    answer:
      "We build on Ethereum, BNB Smart Chain, Avalanche, Polygon, Fantom, Base, and Solana, as well as custom EVM-compatible networks. This includes Layer 2 solutions and bespoke Layer 1 blockchains with Proof-of-Stake, Proof-of-Authority, or Delegated Proof-of-Stake consensus.",
  },
  {
    question: "How are smart contracts secured?",
    answer:
      "Every smart contract we ship follows a security-first process: threat modeling, formal code review, unit and integration testing, gas optimization, and a third-party audit from firms such as CertiK or Hacken. We also implement reentrancy guards, access control, and upgradeability patterns to reduce exploit risk.",
  },
  {
    question: "What industries are served?",
    answer:
      "We serve decentralized finance, NFT and Web3 gaming, crypto exchanges and trading, tokenized assets, supply chain, and enterprise blockchain initiatives. Our clients range from seed-stage startups and DAOs to established protocols and financial institutions.",
  },
  {
    question: "How long does a blockchain project take?",
    answer:
      "A simple token or smart contract can ship in under a week. A full dApp with wallet integration typically takes 3 to 8 weeks, while a custom blockchain network or institutional exchange may take several months. We use an agile process with weekly deliverables.",
  },
  {
    question: "What is included in a smart contract audit?",
    answer:
      "A smart contract audit includes a line-by-line vulnerability review, automated static analysis and fuzzing, checks for reentrancy and access-control issues, gas optimization recommendations, and a detailed remediation report. We re-test after fixes to confirm issues are resolved.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#service`,
  name: "XDefiDev",
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/logo.png`,
  logo: `${SITE_URL}/logo.png`,
  email: "xdefidev@gmail.com",
  telephone: "+1-706-228-9620",
  priceRange: "$100 - $50,000+",
  description:
    "Web3 development agency offering smart contract development, smart contract auditing, DeFi protocol development, dApp and NFT marketplace engineering, blockchain infrastructure, and Web3 consulting.",
  areaServed: "Worldwide",
  sameAs: [
    "https://t.me/xdefideveloper",
    "https://discord.com/users/839903148462178315/",
  ],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Smart Contract Development" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Smart Contract Auditing" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "DeFi Protocol Development" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Blockchain Infrastructure" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web3 Consulting" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Crypto Exchange Development" } },
  ],
};

export default function Home() {
  const { t } = useTranslation('common');
  const imageLink =
    "https://ik.imagekit.io/lzgpc48la/pexels-pixabay-265129_6m3A9XfLh.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663654325584";

  const serviceName = (item) =>
    item.name || item.slug.replace(/-/g, " ");

  function formatUSD(amount) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    }).format(amount);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <SeoHead
        title="XDefiDev | Web3 & Smart Contract Development"
        description="XDefiDev: Web3 development, smart contracts, DeFi protocols, dApps, and blockchain consulting for startups, DAOs, and enterprises since 2018."
        path="/"
        image="https://ik.imagekit.io/lzgpc48la/Yellow_Bright_Business_Idea_Tutorial_Youtube_Thumbnail_n186Tgza0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665836822605"
        schema={[professionalServiceSchema, faqSchema]}
      />

      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
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
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 opacity-95"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.15),transparent_50%)]"></div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 backdrop-blur-xl border border-blue-400/30 rounded-full shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-blue-100 font-semibold text-sm tracking-wide">ELITE DEVELOPMENT AGENCY</span>
                </div>
                <div className="w-px h-4 bg-blue-400/30"></div>
                <span className="text-blue-200 text-sm font-medium">200+ Projects Delivered</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tight">
                  <span className="text-white">Your Crypto</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                    Development
                  </span>
                  <br />
                  <span className="text-blue-100">Powerhouse</span>
                </h1>
                <p className="text-xl sm:text-2xl lg:text-3xl text-blue-100/90 leading-relaxed max-w-2xl font-medium">
                  Elite developers building production-ready Web3 solutions for ambitious crypto startups. <span className="text-white font-bold">$50M+</span> secured across <span className="text-white font-bold">200+</span> successful launches.
                  <span className="block mt-3 text-lg text-blue-200/80">Smart Contracts • dApps • DeFi • NFTs • Full-Stack Web3</span>
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all duration-300 group">
                  <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">200+</div>
                  <div className="text-blue-200/80 text-xs sm:text-sm font-semibold mt-1">Projects</div>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all duration-300 group">
                  <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">$50M+</div>
                  <div className="text-blue-200/80 text-xs sm:text-sm font-semibold mt-1">Secured</div>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all duration-300 group">
                  <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-teal-400 to-teal-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">99.9%</div>
                  <div className="text-blue-200/80 text-xs sm:text-sm font-semibold mt-1">Uptime</div>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all duration-300 group">
                  <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">24/7</div>
                  <div className="text-blue-200/80 text-xs sm:text-sm font-semibold mt-1">Support</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="#contact"
                  className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 text-white font-bold rounded-2xl shadow-[0_0_40px_rgba(6,182,212,0.4)] hover:shadow-[0_0_60px_rgba(6,182,212,0.6)] transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center justify-center gap-2 text-lg">
                    Schedule Strategy Call
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </Link>

                <Link
                  href="#services"
                  className="group px-10 py-5 border-2 border-blue-400/50 bg-white/5 backdrop-blur-xl text-white font-bold rounded-2xl hover:border-blue-400 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span className="flex items-center justify-center gap-2 text-lg">
                    View Case Studies
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                </Link>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-400/30 rounded-full backdrop-blur-xl">
                  <svg className="w-4 h-4 text-orange-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-orange-200 text-sm font-semibold">Limited Availability - 3 Slots Remaining This Month</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-blue-200 text-sm font-medium">SOC 2 Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  <span className="text-blue-200 text-sm font-medium">Trusted by Industry Leaders</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-blue-200 text-sm font-medium">Audited Smart Contracts</span>
                </div>
              </div>
            </div>

            <div className="relative lg:block hidden">
              <div className="relative z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-emerald-500 to-teal-500 rounded-3xl blur-2xl opacity-40 animate-pulse"></div>

                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                  <Image
                    src={background}
                    height={600}
                    width={600}
                    alt="3D illustration of connected blockchain network nodes representing XDefiDev blockchain development services"
                    className="w-full h-auto drop-shadow-2xl rounded-2xl"
                    priority
                  />

                  <div className="absolute -top-6 -right-6 bg-gradient-to-br from-green-400 to-green-600 text-white px-6 py-3 rounded-2xl shadow-2xl font-bold text-sm flex items-center gap-2 animate-bounce">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verified Secure
                  </div>

                  <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-blue-500 to-emerald-600 text-white px-6 py-3 rounded-2xl shadow-2xl font-bold text-sm flex items-center gap-2" style={{ animation: 'bounce 2s infinite', animationDelay: '0.5s' }}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    ISO Certified
                  </div>
                </div>
              </div>

              <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-500/30 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-emerald-500/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -right-12 w-20 h-20 bg-teal-500/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </main>
      </section>

      {/* Carousel Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CarouselFn />
        </div>
      </section>

      {/* About XDefiDev Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                About <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">XDefiDev</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                XDefiDev is a full-service Web3 development agency founded in 2018. We design, build, secure, and scale decentralized applications for founders, startups, DAOs, protocol teams, and enterprises exploring blockchain technology.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our engineers specialize in Solidity smart contract development, DeFi protocol engineering, NFT marketplaces, crypto exchange platforms, and custom EVM-compatible networks. With more than 200 projects delivered and over $50 million secured for clients, we combine deep technical expertise with a practical, product-first approach.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you need a token launched, a decentralized exchange built, or an existing Web3 product audited and optimized, XDefiDev provides the engineering capacity of a large studio with the responsiveness of a dedicated partner.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-50 p-8 rounded-2xl border border-blue-100 text-center">
                <div className="text-4xl font-black text-blue-600">2018</div>
                <p className="text-gray-600 font-medium mt-2">Founded</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-100 text-center">
                <div className="text-4xl font-black text-emerald-600">200+</div>
                <p className="text-gray-600 font-medium mt-2">Projects Shipped</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100 text-center">
                <div className="text-4xl font-black text-green-600">$50M+</div>
                <p className="text-gray-600 font-medium mt-2">Value Secured</p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-100 text-center">
                <div className="text-4xl font-black text-amber-600">10+</div>
                <p className="text-gray-600 font-medium mt-2">Blockchains</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From smart contracts to full-stack dApps, we deliver cutting-edge blockchain solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Smart Contract Development</h3>
              <p className="text-gray-600 leading-relaxed">
                We write production-grade Solidity smart contracts for ERC-20 tokens, ERC-721 and ERC-1155 NFTs, staking, yield farming, vesting, and governance. Our contracts are gas-optimized, upgradeable, and tested against real-world attack vectors.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Smart Contract Auditing</h3>
              <p className="text-gray-600 leading-relaxed">
                Protect your protocol with a security-first review of your smart contracts. We identify vulnerabilities, verify access control, test edge cases with fuzzing, and deliver a prioritized remediation report before your mainnet launch.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">DeFi Protocol Development</h3>
              <p className="text-gray-600 leading-relaxed">
                We engineer lending and borrowing platforms, DEXs with automated market makers, yield aggregators, and cross-chain DeFi applications with integrated wallet connectivity and subgraph indexing.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Blockchain Infrastructure</h3>
              <p className="text-gray-600 leading-relaxed">
                From custom EVM networks with PoA or PoS consensus to Layer 2 deployments, block explorers, faucets, and node infrastructure, we build the scalable foundations your Web3 product needs.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Web3 Consulting</h3>
              <p className="text-gray-600 leading-relaxed">
                From tokenomics design and chain selection to architecture reviews and go-to-market strategy, our consultants help founders make technically sound decisions before committing engineering budget.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">dApp & NFT Development</h3>
              <p className="text-gray-600 leading-relaxed">
                We build responsive Web3 frontends, NFT marketplaces, minting sites, and Telegram mini-apps with wallet login, real-time data, and a user experience that attracts non-technical users.
              </p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
            {services.map(
              (item, index) =>
                index < 9 && (
                  <Link
                    href={`/services/${item.slug}`}
                    key={index}
                    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image || imageLink}
                        alt={serviceName(item)}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white text-sm font-semibold rounded-full shadow-lg">
                          {formatUSD(item.price)}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {t(`service.${item.slug}.name`)}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                        {t(`service.${item.slug}.description`)}
                      </p>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                )
            )}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              View All Services
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">xDefiDev?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Since 2018, with <span className="font-bold text-blue-600">200+ successful projects</span>,
              xDefiDev has been helping innovators create cutting-edge solutions in the cryptocurrency space.
              We consistently deliver expert guidance, technical expertise, and feasible solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-blue-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="absolute top-6 left-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div className="pt-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cost-Effective & Timely</h3>
                <p className="text-gray-600 leading-relaxed">
                  We work within your budget to provide high-quality services accessible to businesses of all sizes.
                  Our coordinated approach ensures fast deliveries, saving you time and money.
                </p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100">
              <div className="absolute top-6 left-6 w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="pt-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Expertise</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our hand-picked developers build high-quality, responsive applications using the latest technologies
                  and design trends, ensuring cutting-edge features and security.
                </p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
              <div className="absolute top-6 left-6 w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="pt-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ongoing Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  We provide comprehensive support and maintenance services after project completion,
                  ensuring the long-term success of your blockchain solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">Development Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A transparent, agile workflow that takes your Web3 product from idea to launch.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {developmentProcess.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-xl flex items-center justify-center font-bold text-xl mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Industries We <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">Serve</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help teams across the decentralized economy launch secure, scalable products.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.title}</h3>
                <p className="text-gray-600 leading-relaxed">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Everything founders and teams ask before starting a Web3 project with XDefiDev.
            </p>
          </div>
          <Accordion variant="splitted">
            {faqs.map((item, index) => (
              <AccordionItem
                key={index}
                aria-label={item.question}
                title={item.question}
              >
                {item.answer}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 via-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                Ready to Build the Future?
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Are you searching for remote Web3 and Blockchain developers to bring your ideas to life?
                Our expert team specializes in crafting <span className="font-semibold text-white">custom websites</span>,
                coding advanced <span className="font-semibold text-white">smart contracts</span>, and launching
                innovative <span className="font-semibold text-white">decentralized applications</span> for both Web2 and Web3.
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                <span className="text-white font-mono text-sm">All solutions in one place 🚀</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Contact Our Team
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  View Our Portfolio
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src={illus2}
                  width={500}
                  height={500}
                  className="w-full h-auto drop-shadow-2xl"
                  alt="Illustration of decentralized Web3 application development connecting blockchain networks"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/20 rounded-full blur-xl animate-pulse delay-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">Technology</span> Stack
            </h2>
            <p className="text-xl text-gray-600">Blockchain Networks We Work With</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-8 items-center justify-items-center">
            <div className="group flex flex-col items-center space-y-3 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="relative">
                <Image
                  src={eth}
                  width={60}
                  height={60}
                  loading="lazy"
                  alt="Ethereum logo - the leading blockchain for smart contracts and DeFi"
                  className="group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">Ethereum</span>
            </div>

            <div className="group flex flex-col items-center space-y-3 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="relative">
                <Image
                  src={bnb}
                  width={60}
                  height={60}
                  loading="lazy"
                  alt="BNB Smart Chain logo - low-fee EVM network for DeFi applications"
                  className="group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-yellow-500/20 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-yellow-600 transition-colors duration-300">BSC</span>
            </div>

            <div className="group flex flex-col items-center space-y-3 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="relative">
                <Image
                  src={avax}
                  width={60}
                  height={60}
                  loading="lazy"
                  alt="Avalanche logo - high-throughput blockchain platform for dApps"
                  className="group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-red-500/20 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-red-600 transition-colors duration-300">Avalanche</span>
            </div>

            <div className="group flex flex-col items-center space-y-3 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="relative">
                <Image
                  src={polygon}
                  width={60}
                  height={60}
                  loading="lazy"
                  alt="Polygon logo - Ethereum Layer 2 scaling solution"
                  className="group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-emerald-500/20 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-emerald-600 transition-colors duration-300">Polygon</span>
            </div>

            <div className="group flex flex-col items-center space-y-3 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="relative">
                <Image
                  src={fantom}
                  width={60}
                  height={60}
                  loading="lazy"
                  alt="Fantom logo - fast, scalable smart contract blockchain"
                  className="group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-400/20 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-blue-400 transition-colors duration-300">Fantom</span>
            </div>

            <div className="group flex flex-col items-center space-y-3 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="relative">
                <Image
                  src={solana}
                  width={60}
                  height={60}
                  loading="lazy"
                  alt="Solana logo - high-performance blockchain for fast dApps"
                  className="group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-green-500/20 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-green-600 transition-colors duration-300">Solana</span>
            </div>

            <div className="group flex flex-col items-center space-y-3 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="relative">
                <Image
                  src={base}
                  width={60}
                  height={60}
                  loading="lazy"
                  alt="Base logo - Coinbase Ethereum Layer 2 network"
                  className="group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-600/20 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">Base</span>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Trusted by <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-600">Join 200+ successful projects and growing</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
              <Image
                src={incaswap}
                width={120}
                height={120}
                loading="lazy"
                alt="Incaswap - decentralized exchange client project logo"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300 rounded-xl"
              />
            </div>
            <div className="group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
              <Image
                src={trapix}
                width={120}
                height={120}
                loading="lazy"
                alt="Trapix - crypto exchange client project logo"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300 rounded-xl"
              />
            </div>
            <div className="group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
              <Image
                src={pattie}
                width={120}
                height={120}
                loading="lazy"
                alt="Pattie - blockchain client project logo"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300 rounded-xl"
              />
            </div>
            <div className="group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
              <Image
                src={c12}
                width={120}
                height={120}
                loading="lazy"
                alt="Coin12pay - custom blockchain mainnet client logo"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300 rounded-xl"
              />
            </div>
            <div className="group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
              <Image
                src={shine}
                width={120}
                height={120}
                loading="lazy"
                alt="Shine Blockchain - blockchain infrastructure client logo"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300 rounded-xl"
              />
            </div>
            <div className="group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
              <Image
                src={neobinance}
                width={120}
                height={120}
                loading="lazy"
                alt="Neo Binance - exchange platform client logo"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300 rounded-xl"
              />
            </div>
            <div className="group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
              <Image
                src={fortress}
                width={120}
                height={120}
                loading="lazy"
                alt="Fortress - blockchain client project logo"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300 rounded-xl"
              />
            </div>
            <div className="group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
              <Image
                src={midasforge}
                width={120}
                height={120}
                loading="lazy"
                alt="Midas Forge - DeFi client project logo"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300 rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
