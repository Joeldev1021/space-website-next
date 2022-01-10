/* eslint-disable no-unused-vars */
import styles from "../styles/navbar.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

const navList = ["home", "destination", "crew", "technology"];

const NavBar = () => {
  const [active, setActive] = useState(navList[0]);

  useEffect(() => {
    const path = window.location.pathname.split("/")[1];
    setActive(path || navList[0]);
  }, []);

  return (
      <nav className={styles.nav}>
          {
           navList.map((item, index) => {
             return (
                 <li className={active === item && "nav-active"} key={item}>
                     <Link href={item === "home" ? "/" : item}>
                         <a ><span>0{index}</span> {item}</a>
                     </Link>
                 </li>
             );
           })
         }
      </nav>
  );
};

export default NavBar;
