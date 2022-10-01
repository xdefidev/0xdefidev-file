import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "/styles/Service.module.css";
import services from "../api/services";
import Head from "next/head";

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
  const imageLink =
    "https://ik.imagekit.io/lzgpc48la/pexels-pixabay-265129_6m3A9XfLh.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663654325584";

  console.log(post.p.list);

  return (
    <section>
      <Head>
        <title>{post.name}</title>

        <meta name="description" content={post.description} />

        <meta http-equiv="content-language" content="en" />
      </Head>
      <Navbar />

      <div className={styles.container}>
        <h1>{post.name}</h1>
        <div className={styles.firstDiv}>
          {post.youtube ? (
            <iframe
              src={`https://www.youtube.com/embed/${post.youtube}`}
              title="Need a Blockchain Developer? Best......."
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          ) : (
            <img src={imageLink} />
          )}

          <div className={styles.secondDiv}>
            <h2>Your Custom Project</h2>
            <p>
              Send us a custom message request. Talk about project,
              requirements, the price and timeline to create your personalized
              project.
            </p>
            <a
              href="https://t.me/xdefidev"
              alt="contact xdefidev"
              target="_blank"
            >
              Message now
            </a>
          </div>
        </div>
        <div className={styles.thirdDiv}>
          <h2>Description</h2>
          <p>{post.description}</p>
          {post.p.description}
          <h3>Features / Benefits</h3>
          <ul>
            <li>{post.p.list[1]}</li>
            <li>{post.p.list[2]}</li>
            <li>{post.p.list[3]}</li>
            {/* {post.map((item) => console.log(post))} */}
            {}
          </ul>
        </div>
      </div>

      <Footer />
    </section>
  );
}
