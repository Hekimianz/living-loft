import about1 from "../../assets/about1.jpg";
import about2 from "../../assets/about2.jpg";
import styles from "../../routes/About/about.module.css";

const About = () => {
  return (
    <div className="main--cont">
      <div className={styles["about--main"]}>
        <div className={styles.aboutSection}>
          <img
            className={styles.workers}
            src={about1}
            alt="workers in a warehouse"
          />
          <h1 className={styles.mainTitle}>Where Style Meets Functionality.</h1>
          <p className={styles.mainSubtitle}>
            Curated pieces to make your house a home, with quality and design at
            the forefront.
          </p>
        </div>
        <div className={styles.aboutSection}>
          <h2 className={styles.title}>Our Journey.</h2>
          <p className={styles.subtitle}>
            At The Living Loft, we help you create unique spaces with timeless,
            functional designs. Whether upgrading your kitchen or adding a
            statement piece, we make it simple and enjoyable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
