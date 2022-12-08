import Head from 'next/head';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>0xDefiDev Portfolio</title>

        <meta property="og:title" content="Xdefidev Dev Portfolio" />

        <meta
          property="og:description"
          content="Need Blockchain Developer? View our Portfolio"
        />

        <meta property="og:url" content="https://xdefidev.shop" />

        <meta
          property="og:image"
          content="https://ik.imagekit.io/lzgpc48la/Yellow_Bright_Business_Idea_Tutorial_Youtube_Thumbnail_n186Tgza0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665836822605"
        />
      </Head>
      <Navbar />
      <div></div>
    </div>
  );
}
