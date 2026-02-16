"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from "@heroui/react";

import { usePathname } from 'next/navigation';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import Image from "next/image";
// import Link from "next/link";x

import Logo from "../../public/logo.png";

export const AcmeLogo = () => {
  return (
    <Link href="/">
      <Image src={Logo} width={150} height={100} alt="Xdefidev Logo" />
    </Link>
  );
};

export const ChevronDown = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Lock = ({ fill, size, height, width, ...props }) => {
  const color = fill;

  return (
    <svg
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g transform="translate(3.5 2)">
        <path
          d="M9.121,6.653V4.5A4.561,4.561,0,0,0,0,4.484V6.653"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth={1.5}
          transform="translate(3.85 0.75)"
        />
        <path
          d="M.5,0V2.221"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth={1.5}
          transform="translate(7.91 12.156)"
        />
        <path
          d="M7.66,0C1.915,0,0,1.568,0,6.271s1.915,6.272,7.66,6.272,7.661-1.568,7.661-6.272S13.4,0,7.66,0Z"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth={1.5}
          transform="translate(0.75 6.824)"
        />
      </g>
    </svg>
  );
};

export const Activity = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      >
        <path d="M6.918 14.854l2.993-3.889 3.414 2.68 2.929-3.78" />
        <path d="M19.668 2.35a1.922 1.922 0 11-1.922 1.922 1.921 1.921 0 011.922-1.922z" />
        <path d="M20.756 9.269a20.809 20.809 0 01.194 3.034c0 6.938-2.312 9.25-9.25 9.25s-9.25-2.312-9.25-9.25 2.313-9.25 9.25-9.25a20.931 20.931 0 012.983.187" />
      </g>
    </svg>
  );
};

export const Flash = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.09 13.28h3.09v7.2c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.92 1.06-.53 1.92.87 1.92Z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Server = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.32 10H4.69c-1.48 0-2.68-1.21-2.68-2.68V4.69c0-1.48 1.21-2.68 2.68-2.68h14.63C20.8 2.01 22 3.22 22 4.69v2.63C22 8.79 20.79 10 19.32 10ZM19.32 22H4.69c-1.48 0-2.68-1.21-2.68-2.68v-2.63c0-1.48 1.21-2.68 2.68-2.68h14.63c1.48 0 2.68 1.21 2.68 2.68v2.63c0 1.47-1.21 2.68-2.68 2.68ZM6 5v2M10 5v2M6 17v2M10 17v2M14 6h4M14 18h4"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const TagUser = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.98c0-1.64 1.34-2.97 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91c0 1.63-1.34 2.97-3 2.97Z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d="M12 10a2.33 2.33 0 1 0 0-4.66A2.33 2.33 0 0 0 12 10ZM16 15.66c0-1.8-1.79-3.26-4-3.26s-4 1.46-4 3.26"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Scale = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7ZM18 6 6 18"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M18 10V6h-4M6 14v4h4"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export default function App({ onOpen }) {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: (
      <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };

  const pathname = usePathname(); // Gets current route

  const menuItems = [
    {
      title: "Blockchain Development",
      href: "/categories/blockchain-development"
    },
    {
      title: "Crypto Exchange Development",
      href: "/categories/crypto-exchange-development"
    },
    {
      title: "Telegram Bots and Mini Apps",
      href: "/categories/telegram-bots"
    },
    {
      title: "Crypto Casino and Game Development",
      href: "/categories/crypto-casino-development"
    },
    {
      title: "Defi & NFT Ecosystems",
      href: "/categories/defi-nft-ecosystems"
    },
    {
      title: "Portfolio",
      href: "/portfolio"
    },

    {
      title: "Contact Us",
      href: "/contact-us"
    },
    {
      title: "Our Services",
      href: "/services"
    },
  ];

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'zh', label: '中文' },
    { code: 'es', label: 'Español' },
    { code: 'hi', label: 'हिन्दी' },
    { code: 'ar', label: 'العربية' },
    { code: 'pt', label: 'Português' },
    { code: 'ru', label: 'Русский' },
    { code: 'ja', label: '日本語' },
    { code: 'de', label: 'Deutsch' },
    { code: 'fr', label: 'Français' },
  ];

  const handleLanguageChange = async (lang) => {
    await i18n.changeLanguage(lang);
    router.push(router.asPath, router.asPath, { locale: lang });
  };

  return (
    <Navbar
      className="bg-transparent w-full ml-0"
      maxWidth="full"
      position="static"
    >
      <NavbarBrand>
        <AcmeLogo />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            href="/"
            className="font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
          >
            {t('home')}
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                {t('categories')}
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Service Categories"
            className="w-160 p-3 bg-white/95 backdrop-blur-xl border border-gray-100 shadow-2xl rounded-2xl"
            itemClasses={{
              base: "gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-purple-50/80 hover:shadow-md transition-all duration-300 border border-transparent hover:border-blue-100/50",
              title: "text-gray-900 font-semibold text-base",
              description: "text-gray-600 text-sm leading-relaxed",
            }}
          >
            <DropdownItem
              key="blockchain-dev"
              description="Smart contracts, dApps, DeFi protocols, NFT marketplaces, tokenomics, Web3 integrations & auditing."
              startContent={
                <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg group-hover:shadow-blue-200 transition-shadow duration-300">
                  {icons.scale}
                </div>
              }
              href="/categories/blockchain-development"
              className="group"
            >
              <div className="flex flex-col">
                <span className="text-gray-900 font-semibold text-base group-hover:text-blue-600 transition-colors duration-300">{t('navbar.blockchainDevelopment')}</span>
              </div>
            </DropdownItem>

            <DropdownItem
              key="crypto-exchange"
              description="Centralised (CEX) & decentralised (DEX) crypto exchanges. Liquidity solutions, KYC/AML integration, OTC trading."
              startContent={
                <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg group-hover:shadow-purple-200 transition-shadow duration-300">
                  {icons.activity}
                </div>
              }
              href="/categories/crypto-exchange-development"
              className="group"
            >
              <div className="flex flex-col">
                <span className="text-gray-900 font-semibold text-base group-hover:text-purple-600 transition-colors duration-300">{t('navbar.cryptoExchangeDevelopment')}</span>
              </div>
            </DropdownItem>

            <DropdownItem
              key="telegram-bots"
              description="Trading & Volume Bots, Price alert, Mini Apps, Customer support chatbots & Group/Channel management tools."
              startContent={
                <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg group-hover:shadow-green-200 transition-shadow duration-300">
                  {icons.flash}
                </div>
              }
              href="/categories/telegram-bots"
              className="group"
            >
              <div className="flex flex-col">
                <span className="text-gray-900 font-semibold text-base group-hover:text-green-600 transition-colors duration-300">{t('navbar.telegramBots')}</span>
              </div>
            </DropdownItem>

            <DropdownItem
              key="crypto-casino"
              description="Crypto enabled casino & gambling website, bot, mini app solutions. Play to Earn(P2E)."
              startContent={
                <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg group-hover:shadow-orange-200 transition-shadow duration-300">
                  {icons.server}
                </div>
              }
              href="/categories/crypto-casino-development"
              className="group"
            >
              <div className="flex flex-col">
                <span className="text-gray-900 font-semibold text-base group-hover:text-orange-600 transition-colors duration-300">{t('navbar.cryptoCasino')}</span>
              </div>
            </DropdownItem>

            <DropdownItem
              key="defi-nft"
              description="Staking, Farming, Lending, Borrowing, NFT marketplace, NFT Staking, Launchpad, meme coins, tokenomics."
              startContent={
                <div className="p-3 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl shadow-lg group-hover:shadow-pink-200 transition-shadow duration-300">
                  {icons.user}
                </div>
              }
              href="/categories/defi-nft-ecosystems"
              className="group"
            >
              <div className="flex flex-col">
                <span className="text-gray-900 font-semibold text-base group-hover:text-pink-600 transition-colors duration-300">{t('navbar.defiNft')}</span>
              </div>
            </DropdownItem>

          </DropdownMenu>
        </Dropdown>

        <NavbarItem>
          <Link
            color="foreground"
            href="/services"
            className="font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
          >
            {t('services')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/portfolio"
            className="font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
          >
            {t('portfolio')}
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="bordered"
                size="sm"
                className="border-gray-200 text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
              >
                {languages.find(l => l.code === i18n.language)?.label || 'Language'}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Language Selector"
              className="p-2"
              itemClasses={{
                base: "rounded-lg hover:bg-blue-50 transition-colors duration-300",
              }}
            >
              {languages.map(lang => (
                <DropdownItem
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className="font-medium"
                >
                  {lang.label}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>

        <NavbarItem>
          <Button
            as={Link}
            onPress={onOpen}
            size="md"
            className="font-semibold sm:inline-flex hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
          >
            {t('getInTouch')}
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden p-0 m-0 w-full" justify="end">
        <NavbarMenuToggle className="p-0 m-0 text-gray-700" />
      </NavbarContent>

      <NavbarMenu className="bg-white/95 backdrop-blur-md">
        {menuItems.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <NavbarMenuItem key={`${item.title}-${index}`} className="pt-6">
              <Link
                className="w-full text-center font-medium text-lg"
                color={isActive ? "primary" : "foreground"}
                href={item.href}
              >
                <span className={`${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors duration-300`}>
                  {item.title}
                </span>
              </Link>
            </NavbarMenuItem>
          )
        })}

        <NavbarMenuItem className="pt-6">
          <Button
            as={Link}
            onPress={onOpen}
            size="md"
            className="font-semibold w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
          >
            {t('getInTouch')}
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
