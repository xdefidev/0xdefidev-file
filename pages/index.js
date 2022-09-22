import Head from 'next/head';
import styles from '../styles/Home.module.css';
import services from '../services';

export default function Home() {
  const imageLink =
    'https://ik.imagekit.io/lzgpc48la/pexels-pixabay-265129_6m3A9XfLh.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663654325584';

  const d = new Date();
  const year = d.getFullYear();

  return (
    <div>
      <Head>
        <title>0xDefiDev | Blockchain and Web Development services</title>

        <meta
          name="description"
          content="0xDefiDev Blockchain and web development services. Looking for a Crypto Dev? we've got you!. Push your crypto project from ground up"
        />

        <meta http-equiv="content-language" content="en" />
        <meta
          name="google-site-verification"
          content="C7U3VQkY7WQDIkayBFDUf9CmlRoFm-jjUWTGRACRCig"
        />

        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>

      <nav>
        <h2 className="logo">0xDefiDev</h2>
        <ul className="menu">
          <li>
            <a href="#grid-container">Services</a>
          </li>
          <li>
            <a href="https://t.me/xdefidev" className={styles.contact}>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <main className={styles.main}>
        <div className="header">
          <div>
            <h1 className={styles.title}>
              Web Development and Blockchain <a href="">Services!</a>
            </h1>

            <p className={styles.description}>
              We are detail oriented-designers and proficient Web and Blockchain
              Developers{' '}
              <code className={styles.code}>
                <></>
              </code>
            </p>
          </div>
          <div></div>
        </div>

        <img
          src="https://ik.imagekit.io/lzgpc48la/down-arrow_vkeVMp4_k.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663634428959"
          className="arrow-down"
        />

        <div className="grid-container" id="grid-container">
          <div className="services">
            <h2>Development Services</h2>
          </div>
          <div className={styles.grid}>
            {services.map((item, index) => (
              <a
                href={item.youtube}
                className={styles.card}
                alt={item.description}
                key={index}
              >
                <img src={imageLink} alt={item.name} />
                <div>{item.status ? 'active' : 'out'}</div>
                <h3>{item.name} &rarr;</h3>
                <p>{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      </main>

      <div className={styles.skill}>
        <hr></hr>
        <h2>Technologies we use in our Development.</h2>
        <div>
          <img src="https://ik.imagekit.io/lzgpc48la/Frame_1__4__9cQ3E44HH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663647803835" />
        </div>
      </div>

      <footer className={styles.footer}>
        <div>
          <h2>Get in Touch</h2>
          <ul className="footer-list">
            <li>
              <a href="https://t.me/xdefidev">Telegram</a>
            </li>
            <li>
              <a href="mailto:xdefidev@gmail.com">e-Mail</a>
            </li>
            <li>
              <a href="https://wa.me/+17062289620">Whatsapp</a>
            </li>
            <li></li>
          </ul>
        </div>
        <div></div>
        <div className="content-body">
          <p>© Copyright 0xDefiDev {year}</p>
        </div>
      </footer>
    </div>
  );
}
