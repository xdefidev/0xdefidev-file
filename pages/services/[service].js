import Navbar from '../components/Navbar';
import styles from '/styles/Service.module.css';

export default function Service() {
  const imageLink =
    'https://ik.imagekit.io/lzgpc48la/pexels-pixabay-265129_6m3A9XfLh.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663654325584';

  return (
    <section>
      <Navbar />

      <div className={styles.container}>
        <div className={styles.firstDiv}>
          <img src={imageLink} />
          <div className={styles.secondDiv}>
            <h2>Custom Project</h2>
            <p>
              Send us a custom request. You can talk about the price and
              timeline to create a personalized project.
            </p>
            <button>Message now</button>
          </div>
        </div>
        <div>
          <h2>Description</h2>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </p>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </p>
        </div>
      </div>
    </section>
  );
}
