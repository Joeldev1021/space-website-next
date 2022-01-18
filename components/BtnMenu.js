
import styles from "../styles/btnMenu.module.css";
import Image from "next/image";
const BtnMenu = ({ handleShowMenu, activeMenu }) => {
  const srcHamburger = "/assets/shared/icon-hamburger.svg";
  const srcClose = "/assets/shared/icon-close.svg";
  return (
      <button onClick={() => handleShowMenu()} className={styles.btnMenu}>
          <img  src={activeMenu ? srcClose : srcHamburger} alt="menu" />
      </button>
  );
};

export default BtnMenu;
