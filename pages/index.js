import Main from "../components/Main";
import Layout from "../components/Layout";
import styles from "../styles/main.module.css";
import Header from "../components/Header";


export default function Home () {
  return (
          <div className={styles.home}>
            <Header/>
            <Main />
          </div>       
  );
}
