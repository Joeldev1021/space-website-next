import styles from "../styles/explore.module.css";
import { useRouter } from "next/router";

const Explore = () => {
  const route = useRouter();
  const handleExplore = () => {
    route.push("destination");
  };

  return (
      <div onClick={() => handleExplore()} className={styles.explore}>
          <p>EXPLORE</p>
      </div>
  );
};

export default Explore;
