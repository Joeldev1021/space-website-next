/* eslint-disable no-unused-vars */
import Header from "../../components/Header";
import styles from "../../styles/destination.module.css";
import data from "../../data.json";
import { useState } from "react";
import Title from "../../components/Title";
import Image from 'next/image'

const Destination = () => {
  const [destin, setDestin] = useState(data.destinations);
  const [destinId, setDestinId] = useState(0);

  const handleDestin = (id) => {
    setDestinId(id);
  };

  return (
      <div className={styles.destination}>
          <Header />
          <div className={styles.container}>
              <div className={styles.planet}>
                  <Title num={"01"} text={"Pick your destination"}/>
                  <div className={styles.containerImg}>
                      <img className={styles.img} src={destin[destinId].images.png} alt={destin[destinId].name} />
                  </div>
              </div>
              <section className={styles.section}>
                  <ul className={styles.ul}>
                      {destin.map((d, i) => destinId === i ? <li className={styles.active} onClick={() => handleDestin(i)} key={i}>{d.name}</li> : <li onClick={() => handleDestin(i)} key={i}>{d.name}</li>)}
                  </ul>
                  <p className={styles.name}>{destin[destinId].name}</p>
                  <p className={styles.description}>{destin[destinId].description}</p>
                  <div className={styles.containerTravel}>
                      <div>
                          <p className={styles.label}>AVG. DISTANCE</p>
                          <p className={styles.distance}>{destin[destinId].distance}</p>
                      </div>
                      <div>
                          <p className={styles.label}>EST. TRAVEL TIME</p>
                          <p className={styles.travel}>{destin[destinId].travel}</p>
                      </div>
                  </div>
              </section>
          </div>
      </div>
  );
};

export default Destination;
