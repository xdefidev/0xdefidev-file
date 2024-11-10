import Navbar from "../components/Navbar";
import Link from "next/link";
import Footer from "../components/Footer";
// import styles from "/styles/Service.module.css";
import styles from "/styles/Home.module.css";
import services from "../api/services";
import Head from "next/head";

export default function Service() {
  const imageLink =
    "https://ik.imagekit.io/lzgpc48la/pexels-pixabay-265129_6m3A9XfLh.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663654325584";

  return (
    <section>
      <Head>
        <title>{`Services| Expert Blockchain & Fullstack Development Solutions`}</title>

        <meta
          name="description"
          content="Discover our range of services, from blockchain development to fullstack web and mobile solutions. We offer tailored development, consulting, and implementation services to bring your digital ideas to life. Partner with us to elevate your business with innovative technology"
        />

        <meta http-equiv="content-language" content="en" />

        <meta name="robots" content="index, follow" />


        <link
          rel="canonical"
          href="https://xdefidev.com/services"
          key="canonical"
        />
      </Head>
      <Navbar />

      <div className="!my-24 " id="grid-container ">
        <div className="text-center text-5xl !mb-8 font-semibold antialiased ">
          <h1>Services</h1>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 my-4 sm:mx-5">
          {services.map((item, index) => (
            <Link
              href={`/services/${item.slug}`}
              className={styles.card}
              alt={item.description}
              key={index}
            >
              <img
                src={item.image || imageLink}
                alt={item.name}
                width="100%"
                loading="lazy"
              />
              <div className="text-black text-xs font-semibold antialiased">
                {item.status ? "active" : "out"}
              </div>
              <h3 className="text-gray-900 font-semibold antialiased text-balance">
                {item.name} &rarr;
              </h3>
              <p className="ffont-base text-xs antialiased text-balance !font-josefin">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
      {/* <Footer /> */}
    </section>
  );
}
