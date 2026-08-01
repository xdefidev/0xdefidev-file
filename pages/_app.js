import { Josefin_Sans } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import { HeroUIProvider } from "@heroui/react";
import "../styles/globals.css";

import {
  HeroUIProvider,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

import Image from "next/image";
import Link from "next/link";
import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useTranslation } from 'next-i18next';

const josefin = Josefin_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-josefin",
});

function MyApp({ Component, pageProps }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();
  const { i18n } = useTranslation();

  // Ensure client i18n language matches Next.js locale to prevent hydration mismatch
  useEffect(() => {
    if (router?.locale && i18n?.language !== router.locale) {
      i18n.changeLanguage(router.locale);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router?.locale]);

  return (
    <HeroUIProvider>
      <Navbar onOpen={onOpen} />
      <main className={`${josefin.variable} font-josefin mt-4`}>
        <Component {...pageProps} onOpen={onOpen} />
      </main>
      <Footer />

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="bg-[#edede9] ">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 !font-josefin">
                <h2 className="font-josefin font-bold text-2xl">Send Us Message</h2>
              </ModalHeader>
              <ModalBody className="w-full grid grid-cols-4">
                <Link
                  href="https://t.me/xdefideveloper"
                  target="_blank"
                  className="w-full justify-center grid grid-rows-2 items-center"
                >
                  <div className="flex items-center justify-center">
                    <Image
                      src="/telegram-svgrepo-com (2).svg"
                      width={40}
                      height={40}
                      alt=""
                      className="flex"
                    />
                  </div>
                  <span>Telegram</span>
                </Link>
                <Link
                  href="https://wa.me/+17062289620"
                  target="_blank"
                  className=" justify-center grid grid-rows-2 items-center"
                >
                   <div className="flex items-center justify-center">
                   <Image
                    src="/whatsapp-whats-app-svgrepo-com.svg"
                    width={40}
                    height={40}
                    alt=""
                  />
                   </div>
                   <span>WhatsApp</span>
                </Link>
                <Link
                  href="https://discord.com/users/839903148462178315/"
                  target="_blank"
                  className="grid grid-rows-2 items-center justify-center"
                >
                  <div className="flex items-center justify-center"> <Image
                    src="/discord-icon-svgrepo-com.svg"
                    width={40}
                    height={40}
                    alt=""
                  /></div>
                   <span>Discord</span>
                </Link>
                <Link
                  href="mailto:xdefidev@gmail.com"
                  target="_blank"
                  className="grid grid-rows-2 items-center justify-center"
                >
                   <div className="flex items-center justify-center">
                   <Image
                    src="/email-mail-web-svgrepo-com.svg"
                    width={40}
                    height={40}
                    alt=""
                  />
                   </div>
                   <span>Email</span>
                </Link>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={onClose}
                  className="font-josefin"
                >
                  Close
                </Button>
                {/* <Button color="primary" onPress={onClose}>
                  Action
                </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </HeroUIProvider>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
