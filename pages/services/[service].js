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
        <title>{`${post.name} services`}</title>

        <meta name="description" content={post.description} />

        <meta http-equiv="content-language" content="en" />
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
            <img src={imageLink} loading="lazy" />
          )}

          <div className="max-w-max h-full flex flex-col gap-4 antialiased">
            <h2 className="text-2xl">Your Custom Project</h2>
            <p className="text-balance">
              Send us a custom message request. Talk about project,
              requirements, the price and timeline to create your personalized
              project.
            </p>
            <a
              href="https://t.me/xdefideveloper"
              alt="contact xdefidev"
              target="_blank"
              className="px-2 py-1.5 border border-zinc-700 rounded text-center text-white bg-black hover:text-black hover:bg-transparent"
            >
              Message now
            </a>
          </div>
        </div>
        <div className="antialiased grid gap-4 mb-24 sm:mt-12 -mt-24">
          <h2 className="text-2xl font-medium">Description</h2>
          <p className="text-balance">{post.description}</p>
          {post.p.description}
          <h3 className="text-xl">Features / Benefits</h3>
          <ul className="grid gap-2 list-decimal pl-8 ">
            {post.p.list.map((item) => (
              <li className="font-josefin">{item}</li>
            ))}
            {/* {console.log(post.p.list.length)} */}
          </ul>
        </div>
      </div>

      {/* <Footer /> */}
    </section>
  );
}
