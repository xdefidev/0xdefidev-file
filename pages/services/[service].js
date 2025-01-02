import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "/styles/Service.module.css";
import services from "../api/services";
import Head from "next/head";

import Image from "next/image";
import Link from "next/link";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export async function getStaticPaths() {
  const paths = await services.map((item) => ({
    params: { service: item.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const selected = [];

  const select = await services.map(
    (item) => params.service == item.slug && selected.push(item)
  );

  const post = await selected[0];

  return { props: { post } };
}

export default function Service({ post }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const imageLink =
    "https://ik.imagekit.io/lzgpc48la/pexels-pixabay-265129_6m3A9XfLh.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663654325584";

  console.log(post.p.list);

  return (
    <section>
      <Head>
        <title>{`${post.name} | XDefiDev Services`}</title>

        <meta property="og:title" content={`${post.name} Services`} />

        <meta property="og:description" content={post.description} />

        <meta property="og:image" content={post.image || imageLink} />
        <meta
          property="og:url"
          content={`https://xdefidev.com/services/${post.slug}`}
        />

        <meta name="description" content={post.description} />

        <meta http-equiv="content-language" content="en" />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href={`https://xdefidev.com/services/${post.slug}`}
          key="canonical"
        />
      </Head>
      <Navbar />

      <div className="grid gap-4 sm:mx-24 mx-12">
        <h1 className="text-4xl font-semibold">{post.name}</h1>
        <div className={styles.firstDiv}>
          {post.youtube ? (
            <iframe
              src={`https://www.youtube.com/embed/${post.youtube}`}
              title="Need a Blockchain Developer? Best......."
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="min-h-[400px]"
            ></iframe>
          ) : (
            <img src={post.image || imageLink} loading="lazy" />
          )}

          <div className="max-w-max h-full flex flex-col gap-4 antialiased">
            <h2 className="text-2xl">Your Custom Project</h2>
            <p className="text-balance">
              Send us a custom request! Share details about your project,
              requirements, budget, and timeline, and let us help bring your
              personalized project to life.
            </p>
            <Button
              className="px-2 py-1.5 border border-zinc-700 rounded text-center text-white bg-black hover:text-black hover:bg-transparent"
              onPress={onOpen}
            >
              Contact Us
            </Button>
            {/* <a
              href="https://t.me/xdefideveloper"
              alt="contact xdefidev"
              target="_blank"
              className="px-2 py-1.5 border border-zinc-700 rounded text-center text-white bg-black hover:text-black hover:bg-transparent"
            >
              Contact Us
            </a> */}
          </div>
        </div>
        <div className="antialiased grid gap-4 mb-24 sm:mt-12 -mt-24">
          <h2 className="text-2xl font-medium">Description</h2>
          <p className="text-balance font-josefin">{post.description}</p>
          {post.p.description}
          <h3 className="text-xl">Key Features / Benefits</h3>
          <ul className="grid gap-2 list-decimal pl-8 ">
            {post.p.list.map((item) => (
              <li className="font-josefin text-balance">{item}</li>
            ))}
            {/* {console.log(post.p.list.length)} */}
          </ul>
        </div>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="bg-[#edede9]">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 !font-josefin">
                <h2 className="font-sans font-bold text-2xl">Contact</h2>
              </ModalHeader>
              <ModalBody className="w-full grid grid-cols-4">
                <Link href="https://t.me/xdefideveloper" target="_blank" className="flex justify-center">
                  <Image
                    src="/telegram-svgrepo-com (2).svg"
                    width={40}
                    height={40}
                    alt=""
                  />
                </Link>
                <Link href="https://wa.me/+17062289620" target="_blank" className="flex justify-center">
                  <Image
                    src="/whatsapp-whats-app-svgrepo-com.svg"
                    width={40}
                    height={40}
                    alt=""
                  />
                </Link>
                <Link href="https://discord.com/users/839903148462178315/" target="_blank" className="flex justify-center">
                  {" "}
                  <Image
                    src="/discord-icon-svgrepo-com.svg"
                    width={40}
                    height={40}
                    alt=""
                  />
                </Link>
                <Link href="mailto:xdefidev@gmail.com" target="_blank" className="flex justify-center">
                  <Image
                    src="/email-mail-web-svgrepo-com.svg"
                    width={40}
                    height={40}
                    alt=""
                  />
                </Link>

              
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose} className="font-sans" >
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

      {/* <Footer /> */}
    </section>
  );
}
