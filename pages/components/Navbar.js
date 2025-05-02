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

import Image from "next/image";
// import Link from "next/link";x

import Logo from "../../public/logo.png";

export const AcmeLogo = () => {
  return (
    <Link href="/">
      <Image src={Logo} width={150} height={100} />
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
    }
  ];
  

  return (
    <Navbar
      className="bg-transparent w-full ml-0"
      maxWidth="full"
      position="static"
    >
      <NavbarBrand>
        <AcmeLogo />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-6 " justify="center">
        <NavbarItem>
          <Link color="foreground" href="/" className="!font-josefin">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/portfolio" className="">
            Portfolio
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent "
                endContent={icons.chevron}
                radius="sm"
                variant="flat"
                size="lg"
              >
                Services
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label=" features"
            className="w-[700px] !font-josefin "
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              description="EVM blockchain fork, Explorer, Uptime monitor. POA, POS, PoW, DPOS. Smart contract development and auditing."
              startContent={icons.scale}
              href="/categories/blockchain-development"
             className="font1"
            >
              
                Blockchain Development{" "}
              
            </DropdownItem>

            <DropdownItem
              key="usage_metrics"
              description="Centralised (CEX) & decentralised (DEX) crypto exchanges. Liquidity solutions, KYC/AML integration, OTC trading."
              startContent={icons.activity}
              href="/categories/crypto-exchange-development"
            >
              Crypto Exchange Development
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              description="Trading & Volume Bots, Price alert, Mini Apps, Customer support chatbots & Group/Channnel management tools."
              startContent={icons.flash}
              href="/categories/telegram-bots"
            >
              Telegram Bots and Mini Apps
            </DropdownItem>
            <DropdownItem
              key="99_uptime"
              description="Crypto enabled casino & gambling website, bot, mini app solutions. Play to Earn(P2E)."
              startContent={icons.server}
              href="/categories/crypto-casino-development"
            >
              Crypto Casino and Game Development
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              description="Staking, Farming, Lending, Borrowing, NFT marketplace, NFT Staking, Launchpad, meme coins, tokenomics."
              startContent={icons.user}
              href="/categories/defi-nft-ecosystems"
            >
              DeFi & NFT Ecosystems
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        {/* <NavbarItem isActive>
          <Link aria-current="page" href="#">
            Customers
          </Link>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="secondary"
            onPress={onOpen}
            size="md"
            variant="flat"
            className="font-semibold sm:inline-flex hidden"
          >
            Get in Touch
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden p-0 m-0 w-full" justify="end">
        <NavbarMenuToggle className="p-0 m-0" />
      </NavbarContent>

      <NavbarMenu>
      {menuItems.map((item, index) =>{ const isActive = pathname === item.href; 

        return (
          <NavbarMenuItem key={`${item.title}-${index}`} className="pt-5">
            <Link
              className="w-full text-center "
              color={isActive ? "primary" : "foreground"}
              href={item.href}
              size="lg"
            >
              {item.title}
            </Link>
            
          </NavbarMenuItem>
        )
      } )}
       <Button
            as={Link}
            color="secondary"
            onPress={onOpen}
            size="md"
            variant="flat"
            className="font-semibold "
          >
            Get in Touch
          </Button>
      </NavbarMenu>
    </Navbar>
  );
}
