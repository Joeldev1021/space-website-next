
import styles from "/styles/destination.module.css";
import { useState } from "react";
import Title from "../../components/Title";
import Image from 'next/image'
import Layout from "../../components/Layout";
import api from "../../api";

const Destination = ({dest}) => {
  const [destin, setDestin] = useState(dest);
  const [destinId, setDestinId] = useState(0);

  const handleDestin = (id) => {
    setDestinId(id);
  };

  return (
      <Layout page="destination">
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
      </Layout>
  );
};

export default Destination;

export const getStaticProps = async () => {
    const res = await api.getDestination();
    return {
        props: {
        dest: res,
        }
    }
}