import Navbar from '../components/Navbar';
import styles from '/styles/Service.module.css';
import services from '../services';
import Head from 'next/head';

export default function Service({ post }) {
  const imageLink =
    'https://ik.imagekit.io/lzgpc48la/pexels-pixabay-265129_6m3A9XfLh.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663654325584';

  return (
    <section>
      <Head>
        <title>{post.name}</title>

        <meta name="description" content={post.description} />

        <meta http-equiv="content-language" content="en" />
      </Head>
      <Navbar />

      <div className={styles.container}>
        <div className={styles.firstDiv}>
          {post.youtube ? (
            <iframe
              src={`https://www.youtube.com/embed/${post.youtube}`}
              title="Need a Blockchain Developer? Best......."
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          ) : (
            <img src={imageLink} />
          )}

          <div className={styles.secondDiv}>
            <h2>Custom Project</h2>
            <p>
              Send us a custom request. You can talk about the price and
              timeline to create a personalized project.
            </p>
            <a href="t.me/xdefidev">Message now</a>
          </div>
        </div>
        <div>
          <h2>Description</h2>
          <p>{post.description}</p>
          <p></p>
        </div>
      </div>
    </section>
  );
}

export async function getStaticPaths() {
  const paths = services.map((item) => ({
    params: { service: item.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const selected = [];

  const select = services.map(
    (item) => params.service == item.slug && selected.push(item)
  );

  const post = selected[0];

  return { props: { post } };
}
