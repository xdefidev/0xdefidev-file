import Carousel from "react-multi-carousel";
import Image from "next/image";
import Link from "next/link";
import "react-multi-carousel/lib/styles.css";

/**
 * Category image strip on the homepage.
 *
 * Images are referenced by public path rather than imported, so moving this
 * file does not break the bundler resolution.
 */

const SLIDES = [
  {
    href: "/categories/blockchain-development",
    src: "/categories/blockchain-development.png",
    alt: "Blockchain development: smart contracts, dApps and custom networks",
  },
  {
    href: "/categories/crypto-exchange-development",
    src: "/categories/crypto-exchange-development.jpg",
    alt: "Crypto exchange development: CEX and DEX platforms",
  },
  {
    href: "/categories/telegram-bots",
    src: "/categories/Telegram-Bots-mini-apps-development.jpg",
    alt: "Telegram bot and mini app development for crypto projects",
  },
  {
    href: "/categories/crypto-casino-development",
    src: "/categories/casino-development.jpg",
    alt: "Provably fair crypto casino and gambling platform development",
  },
  {
    href: "/categories/defi-nft-ecosystems",
    src: "/categories/defi-nft-development.jpg",
    alt: "DeFi and NFT ecosystem development: staking, marketplaces and dApps",
  },
];

const BREAKPOINTS = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5, slidesToSlide: 1 },
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 3, slidesToSlide: 1 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 2, slidesToSlide: 1 },
};

export default function CarouselFn() {
  return (
    <Carousel
      containerClass="carousel-container"
      itemClass="carousel-item"
      responsive={BREAKPOINTS}
      ssr
      infinite
      autoPlay
      autoPlaySpeed={4500}
      swipeable
      draggable={false}
      showDots={false}
      removeArrowOnDeviceType={["mobile"]}
    >
      {SLIDES.map((slide) => (
        <Link
          key={slide.href}
          href={slide.href}
          className="group block overflow-hidden rounded-xl border border-surface-border transition-all duration-300 ease-smooth hover:border-brand-200 hover:shadow-card"
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            width={400}
            height={260}
            loading="lazy"
            className="h-40 w-full object-cover transition-transform duration-500 ease-smooth group-hover:scale-105"
          />
        </Link>
      ))}
    </Carousel>
  );
}