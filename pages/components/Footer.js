import styles from "/styles/Home.module.css";
import Image from "next/image";
import Telegram from "/public/telegram.svg";
import Whatsapp from "/public/whatsapp.svg";
import Mail from "/public/mail.svg";

import Link from "next/link";

import Logo from "../../public/logo.png";

export const AcmeLogo = () => {
  return (
    <Link href="/">
      <Image src={Logo} width={150} height={100} className="invert " alt="xdefidev footer logo" />
    </Link>
  );
};

export default function Footer() {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <AcmeLogo />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Trusted Web3 & Blockchain development services since 2018. 
              Building the future of decentralized applications.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://t.me/xdefideveloper"
                alt="message us on telegram"
                target="_blank"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-blue-500/20 hover:scale-110 transition-all duration-300 group"
              >
                <Image
                  src={Telegram}
                  width={24}
                  height={24}
                  alt="contact us on telegram"
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </a>
              <a
                href="mailto:xdefidev@gmail.com"
                alt="mail us xdefidev@gmail.com"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-purple-500/20 hover:scale-110 transition-all duration-300 group"
              >
                <Image
                  src={Mail}
                  width={24}
                  height={24}
                  alt="send us an email"
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </a>
              <a
                href="https://wa.me/+17062289620"
                alt="Text us on whatsapp"
                target="_blank"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-green-500/20 hover:scale-110 transition-all duration-300 group"
              >
                <Image
                  src={Whatsapp}
                  width={24}
                  height={24}
                  alt="text us on whatsapp"
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </a>
            </div>
          </div>

          {/* Services Categories */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Service Categories
            </h3>
            <div className="space-y-3">
              <Link 
                href="/categories/blockchain-development"
                className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Blockchain Development
                </span>
              </Link>
              <Link 
                href="/categories/crypto-exchange-development"
                className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Crypto Exchange Development
                </span>
              </Link>
              <Link 
                href="/categories/telegram-bots"
                className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Telegram Bots & Mini Apps
                </span>
              </Link>
              <Link 
                href="/categories/crypto-casino-development"
                className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Casino Development
                </span>
              </Link>
              <Link 
                href="/categories/defi-nft-ecosystems"
                className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  DeFi & NFT Development
                </span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <div className="space-y-3">
              <Link 
                href="/services"
                className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  All Services
                </span>
              </Link>
              <Link 
                href="/portfolio"
                className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Portfolio
                </span>
              </Link>
              <Link 
                href="/contact-us"
                className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Contact Us
                </span>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>xdefidev@gmail.com</span>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <span>+1 (706) 228-9620</span>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
                <p className="text-sm text-gray-300 leading-relaxed">
                  <span className="font-semibold text-white">200+ Projects Delivered</span>
                  <br />
                  Trusted by startups and enterprises worldwide since 2018.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © Copyright xDefiDev 2018 - {year}. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="/privacy-policy" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
