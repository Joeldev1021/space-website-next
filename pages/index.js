import Header from "../components/Header";
import Main from "../components/Main";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Meta from "../components/Meta";

export default function Home () {
  return (
      <>
          <Head>
              <Meta/>
          </Head>
          <div className={styles.home}>
              <Header />
              <Main />
          </div>
      </>
  );
}
