/* eslint-disable no-unused-vars */
import { useState } from "react";
import Header from "../../components/Header";
import styles from "../../styles/crew.module.css";
import data from "../../data.json";
import Title from "../../components/Title";

const Crew = () => {
  const [crew, setCrew] = useState(data.crew);
  const [crewId, setCrewId] = useState(0);

  return (
      <div className={styles.crew}>
          <Header/>
          <div className="container">
              <section>
                  <Title num={"01"} text={"Meet Your Crew"}/>
                  <p className={styles.role}>{crew[crewId].role}</p>
                  <p className={styles.name}>{crew[crewId].name}</p>
                  <p className={styles.description}>{crew[crewId].bio}</p>
                  <ul>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                  </ul>
              </section>
              <div>
                  <img src={crew[crewId].images.png} alt={crew[crewId].name} />
              </div>
          </div>
      </div>
  );
};

export default Crew;
