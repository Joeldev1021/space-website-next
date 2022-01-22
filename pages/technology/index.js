/* eslint-disable no-unused-vars */
import Header from "../../components/Header";
import data from "../../data.json";
import { useEffect, useRef, useState } from "react";
import Title from "../../components/Title";
import styles from "../../styles/tech.module.css";
import useScreenSize from "../../hooks/useScreenSize";

const Tech = () => {
  const [tech, setTech] = useState(data.technology);
  const [techId, setTechId] = useState(0);
  const [src, setSrc] = useState(tech[techId].images.portrai);

 

  return (
      <div className={styles.tech}>
          <Header/>
          <div className={styles.containerImg}>
              <img src={tech[techId].images.landscape} alt={tech[techId].name} />
          </div>
          <div className={styles.container}>
              <section >
                  <Title num="03" text={"space launch 101"}/>
                  <div className={styles.flex}>
                      <ul >
                          { new Array(tech.length).fill(0).map((n, i) => <li className={i === techId ? styles.active : ""} onClick={() => setTechId(i)} key={i}>{i + 1}</li>) }
                      </ul>
                      <div className={styles.containertext}>
                          <p className={styles.terminology}>The terminology</p>
                          <p className={styles.name}>{tech[techId].name}</p>
                          <p className={styles.description}>{tech[techId].description}</p>
                      </div>
                  </div>
              </section>
          </div>
      </div>
  );
};

export default Tech;
