import { useState, useeffect } from "react";
import Carousel from "react-multi-carousel";
import Image from "next/image"
import Link from "next/link";
import "react-multi-carousel/lib/styles.css";

// Import category images
import blockchainImage from "../../public/categories/blockchain-development.png";
import cryptoImage from "../../public/categories/crypto-exchange-development.jpg";
import telegramBotImage from "../../public/categories/Telegram-Bots-mini-apps-development.jpg";
import casinoImage from "../../public/categories/casino-development.jpg";
import definftImage from "../../public/categories/defi-nft-development.jpg";

const BreakpointSlides = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


export default function CarouselFn() {
  return (
    <div className="h-full  top-0 left-0 right-0">
      <Carousel
        containerClass="carousel-container"
        itemClass="carousel-item"
        responsive={BreakpointSlides}
        ssr
        infinite
        autoPlay
      >
        <Link href="/categories/blockchain-development">
          <div>
            <Image
              alt="Blockchain Technology"
              src={blockchainImage}
              priority={true}
              quality={50}
              layout="responsive"
              width={60}
              height={60}
              className="rounded"
            />
          </div>
        </Link>
        <Link href="/categories/crypto-exchange-development">
          <div>
            <Image
              alt="Crypto Exchange"
              src={cryptoImage}
              priority={true}
              quality={50}
              layout="responsive"
              width={60}
              height={60}
              className=" rounded"
            />
          </div>
        </Link>
        <Link href="/categories/telegram-bots">
          <div>
            <Image
              alt="Telegram Bot Development"
              src={telegramBotImage}
              priority={true}
              quality={50}
              layout="responsive"
              width={60}
              height={60}
              className=" rounded"
            />
          </div>
        </Link>
        <Link href="/categories/crypto-casino-development">
          <div>
            <Image
              alt="Casino Gaming"
              src={casinoImage}
              priority={true}
              quality={50}
              layout="responsive"
              width={60}
              height={60}
              className=" rounded"
            />
          </div>
        </Link>
        <Link href="/categories/defi-nft-ecosystems">
          <div>
            <Image
              alt="Defi and NFT develpment"
              src={definftImage}
              priority={true}
              quality={50}
              layout="responsive"
              width={60}
              height={60}
              className=" rounded"
            />
          </div>
        </Link>
      </Carousel>
    </div>
  );
}
