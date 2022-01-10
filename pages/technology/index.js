/* eslint-disable no-unused-vars */
import Header from "../../components/Header";
import styles from "../../styles/tech.module.css";
import data from "../../data.json";
import { useState } from "react";

const Tech = () => {
  const [tech, setTech] = useState(data.technology);
  return (
      <div className={styles.tech}>
          <Header/>
      </div>
  );
};

export default Tech;
