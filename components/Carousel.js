import { useEffect, useRef } from "react";
import styles from "../styles/crew.module.css";
import Title from "./Title";

const Carousel = ({ item, crewId, index }) => {
  const ref = useRef(null);
  useEffect(() => {
    console.log(100 * crewId);
    ref.current.style.transform = `translateX(-${100 * crewId}%)`;
  }, [crewId]);
  return (
      <div ref={ref} className={`${styles.card} ${crewId === index ? styles.carouselActive : ""}`}>
          <section>
              <Title num={"02"} text={"Meet Your Crew"}/>
              <p className={styles.role}>{item.role}</p>
              <p className={styles.name}>{item.name}</p>
              <p className={styles.description}>{item.bio}</p>
          </section>
          <div className={styles.containerImg}>
              <img src={item.images.webp} alt={item.name} />
          </div>
      </div>
  );
};

export default Carousel;
