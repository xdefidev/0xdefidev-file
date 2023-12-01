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
        <title>{`Xdefidev Services`}</title>

        <meta
          name="description"
          content="check a list of our Hot selling services right now"
        />

        <meta http-equiv="content-language" content="en" />
      </Head>
      <Navbar />

      <div className="!my-24" id="grid-container ">
        <div className="text-center text-5xl !mb-8 font-semibold antialiased ">
          <h2>Services</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 my-4 sm:mx-5">
          {services.map((item, index) => (
            <Link
              href={`/services/${item.slug}`}
              className={styles.card}
              alt={item.description}
              key={index}
            >
              <a className={styles.card}>
                <img
                  src={imageLink}
                  alt={item.name}
                  width="100%"
                  loading="lazy"
                />
                <div className="text-black text-xs font-semibold antialiased">
                  {item.status ? "active" : "out"}
                </div>
                <h3 className="text-gray-900 font-medium antialiased text-balance">
                  {item.name} &rarr;
                </h3>
                <p className="font-thin text-xs antialiased text-balance">
                  {item.description}
                </p>
              </a>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
}
