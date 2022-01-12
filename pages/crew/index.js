/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import styles from "../../styles/crew.module.css";
import data from "../../data.json";
import Title from "../../components/Title";
import Carousel from "../../components/Carousel";

const Crew = () => {
  const [crew, setCrew] = useState(data.crew);
  const [crewId, setCrewId] = useState(0);

  const handleNavCrew = (id) => {
    setCrewId(id);
  };

  return (
      <div className={styles.crew}>
          <Header/>
          <div className={styles.carousel}>
              {
                crew.map((item, i) => <Carousel item={item} index={i} crewId={crewId} key={i}/>)
              }
          </div>
          <ul>
              { new Array(4).fill(0).map((n, i) => <li className={i === crewId ? styles.active : ""} onClick={() => handleNavCrew(i)} key={i}></li>) }
          </ul>
      </div>
  );
};

export default Crew;

{ /* <div className="container">
<section>
    <Title num={"02"} text={"Meet Your Crew"}/>
    <p className={styles.role}>{crew[crewId].role}</p>
    <p className={styles.name}>{crew[crewId].name}</p>
    <p className={styles.description}>{crew[crewId].bio}</p>
    <ul>
        { new Array(crew.length).fill(0).map((n, i) => <li className={i === crewId ? styles.active : ""} onClick={() => handleNavCrew(i)} key={i}></li>) }
    </ul>
</section>
<div className={styles.containerImg}>
    <img src={crew[crewId].images.webp} alt={crew[crewId].name} />
</div>
</div> */ }
