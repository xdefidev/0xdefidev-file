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
import CarouselFn from "./components/Carousel";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}


export default function Home() {
  const { t } = useTranslation('common');
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
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



      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 opacity-95"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.15),transparent_50%)]"></div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-10">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-blue-400/30 rounded-full shadow-lg">
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
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
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

              {/* Statistics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all duration-300 group">
                  <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">200+</div>
                  <div className="text-blue-200/80 text-xs sm:text-sm font-semibold mt-1">Projects</div>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all duration-300 group">
                  <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">$50M+</div>
                  <div className="text-blue-200/80 text-xs sm:text-sm font-semibold mt-1">Secured</div>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all duration-300 group">
                  <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-pink-400 to-pink-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">99.9%</div>
                  <div className="text-blue-200/80 text-xs sm:text-sm font-semibold mt-1">Uptime</div>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all duration-300 group">
                  <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">24/7</div>
                  <div className="text-blue-200/80 text-xs sm:text-sm font-semibold mt-1">Support</div>
                </div>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="#contact"
                  className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white font-bold rounded-2xl shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:shadow-[0_0_60px_rgba(59,130,246,0.6)] transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

              {/* Urgency Element */}
              <div className="flex items-center gap-3 pt-2">
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-400/30 rounded-full backdrop-blur-xl">
                  <svg className="w-4 h-4 text-orange-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-orange-200 text-sm font-semibold">Limited Availability - 3 Slots Remaining This Month</span>
                </div>
              </div>

              {/* Trust Indicators */}
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
                  <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-blue-200 text-sm font-medium">Audited Smart Contracts</span>
                </div>
              </div>
            </div>

            {/* Enhanced Hero Visual */}
            <div className="relative lg:block hidden">
              <div className="relative z-10">
                {/* Glowing Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-40 animate-pulse"></div>

                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                  <Image
                    src={background}
                    height={600}
                    width={600}
                    alt="Enterprise Blockchain Development"
                    className="w-full h-auto drop-shadow-2xl rounded-2xl"
                    priority
                  />

                  {/* Floating Badges */}
                  <div className="absolute -top-6 -right-6 bg-gradient-to-br from-green-400 to-green-600 text-white px-6 py-3 rounded-2xl shadow-2xl font-bold text-sm flex items-center gap-2 animate-bounce">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verified Secure
                  </div>

                  <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white px-6 py-3 rounded-2xl shadow-2xl font-bold text-sm flex items-center gap-2" style={{ animation: 'bounce 2s infinite', animationDelay: '0.5s' }}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    ISO Certified
                  </div>
                </div>
              </div>

              {/* Enhanced Floating elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-500/30 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-purple-500/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -right-12 w-20 h-20 bg-pink-500/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
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

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From smart contracts to full-stack dApps, we deliver cutting-edge blockchain solutions
            </p>
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
                        alt={item.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full shadow-lg">
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

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                )
            )}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
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
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">xDefiDev?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Since 2018, with <span className="font-bold text-blue-600">200+ successful projects</span>,
              xDefiDev has been helping innovators create cutting-edge solutions in the cryptocurrency space.
              We consistently deliver expert guidance, technical expertise, and feasible solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
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

            <div className="group relative bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
              <div className="absolute top-6 left-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
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

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
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
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src={illus2}
                  width={500}
                  height={500}
                  className="w-full h-auto drop-shadow-2xl"
                  alt="Web3 Development Illustration"
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
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Technology</span> Stack
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
                  alt="ethereum blockchain"
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
                  alt="binance smart chain"
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
                  alt="avalanche (AVAX) blockchain"
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
                  alt="polygon mainnet blockchain"
                  className="group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-purple-600 transition-colors duration-300">Polygon</span>
            </div>

            <div className="group flex flex-col items-center space-y-3 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="relative">
                <Image
                  src={fantom}
                  width={60}
                  height={60}
                  loading="lazy"
                  alt="fantom blockchain"
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
                  alt="solana blockchain"
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
                  alt="base blockchain"
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
              Trusted by <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Industry Leaders</span>
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
                alt="Incaswap"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300 rounded-xl"
              />
            </div>
            <div className="group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
              <Image
                src={trapix}
                width={120}
                height={120}
                loading="lazy"
                alt="Trapix"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300 rounded-xl"
              />
            </div>
            <div className="group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
              <Image
                src={pattie}
                width={120}
                height={120}
                loading="lazy"
                alt="Pattie"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300 rounded-xl"
              />
            </div>
            <div className="group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
              <Image
                src={c12}
                width={120}
                height={120}
                loading="lazy"
                alt="C12"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300 rounded-xl"
              />
            </div>
            <div className="group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
              <Image
                src={shine}
                width={120}
                height={120}
                loading="lazy"
                alt="Shine Blockchain"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300 rounded-xl"
              />
            </div>
            <div className="group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
              <Image
                src={neobinance}
                width={120}
                height={120}
                loading="lazy"
                alt="Neo Binance"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300 rounded-xl"
              />
            </div>
            <div className="group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
              <Image
                src={fortress}
                width={120}
                height={120}
                loading="lazy"
                alt="Fortress Blockchain"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300 rounded-xl"
              />
            </div>
            <div className="group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
              <Image
                src={midasforge}
                width={120}
                height={120}
                loading="lazy"
                alt="Midas Forge"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300 rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}
