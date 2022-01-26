import {  useState } from "react";
import Header from "../../components/Header";
import styles from "../../styles/crew.module.css";
import CarouselItem from "../../components/CarouselItem";
import Layout from "../../components/Layout";
import api from "../../api";

const Crew = ({crewData}) => {
  const [crew, setCrew] = useState(crewData);
  const [crewId, setCrewId] = useState(0);

  const handleNavCrew = (id) => {
    setCrewId(id);
  };

  
  return (
      <Layout page="crew">
          <div className={styles.carousel}>
              {crew.map((item, i) => <CarouselItem item={item} index={i} crewId={crewId} key={i}/>)}
          </div>
          <ul className={styles.ul}>
              { new Array(4).fill(0).map((n, i) => <li className={i === crewId ? styles.active : ""} onClick={() => handleNavCrew(i)} key={i}></li>) }
          </ul>
      </Layout>
  );
};

export default Crew;

export async function getStaticProps() {
    const res = await api.getCrew();
  return {
    props: {
      crewData: res,
    },
  };
}