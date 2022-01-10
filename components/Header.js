import NavBar from "./NavBar";
import styles from "../styles/header.module.css";

const Header = () => {
  return (
      <header className={styles.header}>
          <img src="/assets/shared/logo.svg" alt="logo" />
          <span ></span>
          <NavBar/>
      </header>
  );
};

export default Header;
