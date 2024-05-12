import Header from "components/common/Header/Header";
import styles from "@styles/Btech.module.css";
import Footer from "components/common/Footer";

export default function BTech() {
  const image = "/images/btech/top_bg.jpg";
  return (
    <>
      <Header image={image} text="BE" />
      {/* <!-- content of B.Sc section  --> */}
      <section id={styles.btcontent}>
        <div className={styles.mission}>
          <h2>BE</h2>
          <p>
          BE stands for Bachelor of Engineering. It's an undergraduate degree program typically spanning four years. BE courses offer students a comprehensive understanding of engineering disciplines such as Civil Engineering, 
          Mechanical Engineering, Electrical Engineering, Computer Engineering, Chemical Engineering, and more. Through theoretical studies and practical applications, BE programs equip students with the skills and knowledge necessary
           for careers in various engineering fields.
           </p>
        </div>

        <h2>Choose Your Branch</h2>
        <div id={styles.branches}>
          
          <a
            href="https://drive.google.com/file/d/1SRfFI6MPyaJJXDp4LK7AgqgNGSSLP3L3/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.bio}>
              <p>Biology</p>
            </div>
          </a>
          <a
            href="https://drive.google.com/file/d/1E8LgRucBaV1qHVovVjJc3c0JH7IRHmye/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.csc}>
              <p>Computer Science</p>
            </div>
          </a>
          <a
            href="https://drive.google.com/file/d/1MSu8-ViOvVEzfOoEY75a3mJkXoudRmxB/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.chem}>
              <p>Chemistry</p>
              
            </div>
          </a>
          <a
            href="https://drive.google.com/file/d/1gSnoQhkfyrFBJQMhXZjByJrN392XXhJq/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.math}>
              <p>Mathematics</p>
              
            </div>
          </a>
          <a
            href="https://drive.google.com/file/d/1odvzfXP4HAUBeY5z89N8z66UtNGxTpsb/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.phy}>
              <p>Physics</p>
              
            </div>
          </a>
          <a
            href="https://drive.google.com/file/d/18F5QwqkYzoLZm_BOQ74_0FRK-8J2C5AY/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.nur}>
              <p>Nursing</p>
            </div>
          </a>
          <a
            href="https://drive.google.com/file/d/1iuxcQrntJZw5q3zoQUiVSZ_bfAbyG0Y_/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.agr}>
              <p>Agriculture</p>
              
            </div>
          </a>
          
        </div>
      </section>
      <Footer />
    </>
  );
}
