import styles from "../styles/crew.module.css";
import Title from "./Title";

const Carousel = ({ item, handleNavCrew, crewId, index }) => {
  return (
      <div className={`container ${crewId === index ? styles.carouselActive : ""}`}>
          <section>
              <Title num={"02"} text={"Meet Your Crew"}/>
              <p className={styles.role}>{item.role}</p>
              <p className={styles.name}>{item.name}</p>
              <p className={styles.description}>{item.bio}</p>
              <ul>
                  { new Array(4).fill(0).map((n, i) => <li className={i === crewId ? styles.active : ""} onClick={() => handleNavCrew(i)} key={i}></li>) }
              </ul>
          </section>
          <div className={styles.containerImg}>
              <img src={item.images.webp} alt={item.name} />
          </div>
      </div>
  );
};

export default Carousel;
