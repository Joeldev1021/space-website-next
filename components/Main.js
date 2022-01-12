import Explore from "./Explore";
import styles from "../styles/main.module.css";

const Main = () => {
  return (
      <main className={styles.main}>
          <div className={styles.container}>
              <div className={styles.details}>
                  <p className={styles.title}>So, you want to travel to</p>
                  <p className={styles.titlelg}>SPACE</p>
                  <p className={styles.text}>
                      Let’s face it; if you want to go to space, you might as well
                      genuinely go to outer space and not hover kind of on the edge of it.
                      Well sit back, and relax because we’ll give you a truly out of this
                      world experience!
                  </p>
              </div>
              <Explore />
          </div>
      </main>
  );
};

export default Main;
