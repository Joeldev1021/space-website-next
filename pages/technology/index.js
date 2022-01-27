import { useEffect, useState } from "react";
import Title from "../../components/Title";
import styles from "../../styles/tech.module.css";
import useScreenSize from "../../hooks/useScreenSize";
import Layout from "../../components/Layout";
import api from "../../api";

const Tech = ({techData}) => {
   const {width} = useScreenSize();
   const [tech, setTech] = useState(techData);
   const [techId, setTechId] = useState(0);
  const [srcImg, setSrcImg] = useState(tech[techId].images.portrait);
 
 useEffect(() => {
        width < 768 ? setSrcImg(tech[techId].images.landscape) : setSrcImg(tech[techId].images.portrait);
 }, [width]);
 

  return (
      <Layout page="tech">
          <div className={styles.containerImg}>
              <img src={srcImg}  alt={tech[techId].name} />
          </div>
          <div className={styles.container}>
              <section >
                  <Title num="03" text={"space launch 101"}/>
                  <div className={styles.flex}>
                      <ul className={styles.ul} >
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
      </Layout>
  );
};

export default Tech;
 
export const getStaticProps = async () => {
    const res = await api.getTech();
    return {
        props: {
        techData: res,
        }
    }
}