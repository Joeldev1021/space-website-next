/* eslint-disable no-unused-vars */
import styles from "../styles/navbar.module.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import BtnMenu from "./BtnMenu";

const navList = ["home", "destination", "crew", "technology"];

const NavBar = () => {
  const [active, setActive] = useState(navList[0]);
  const [activeMenu, setActiveMenu] = useState(false);
  const refNav = useRef(null);

  const handleShowMenu = () => {
    setActiveMenu(!activeMenu);
    refNav.current.classList.toggle(styles.navActive);
  };

  useEffect(() => {
    const path = window.location.pathname.split("/")[1];
    setActive(path || navList[0]);
  }, []);

  return (
      <>
          <BtnMenu handleShowMenu={handleShowMenu} activeMenu={activeMenu}/>
          <nav ref={refNav} className={styles.nav}>
              {
           navList.map((item, index) => {
             return (
                 <li className={active === item ? "nav-active" : ""} key={item}>
                     <Link href={item === "home" ? "/" : item}>
                         <a><span>0{index}</span>{item}</a>
                     </Link>
                 </li>
             );
           })
         }
          </nav>
      </>
  );
};

export default NavBar;
