import styles from '../styles/Navbar.module.css'
import { useState, useEffect } from "react";
import Link from 'next/link'
import Image from 'next/image'
import logo from './icons/logoPortfolio.avif'

const Navbar = () => {
  
    const [isModal, setIsModal] = useState(false);
    const contentClassname = isModal
        ? `${styles["hideMenu"]} ${styles["nav-links-container"]}`
        : `${styles["nav-links-container"]}`;

    const [isActive, setIsActive] = useState(false);
    const hambClassname = isActive
            ? `${styles["active"]} ${styles["menu-container"]} ${styles["icon"]}`
            : `${styles["menu-container"]} ${styles["icon"]}`;
    
   

  return (
    <div className={`${styles["nav-background"]}`}>
      <div className={`${styles["navbar-container"]}`}>
        <div className={`${styles["logo-close-container"]}`}>
          <Link href="#">
            <Image src={logo} height={45} width={60} alt="Link home" />
          </Link>
          <div href="#" className={hambClassname} 
          onClick={() => {setIsModal(!isModal); setIsActive(!isActive)}}>
            <span className={`${styles["span-top"]}`}></span>
            <span className={`${styles["span-middle"]}`}></span>
            <span className={`${styles["span-bottom"]}`}></span>
          </div>
        </div>
        <ul className={contentClassname}>
          <li className={`${styles["dropdown"]}`}>
            <Link href="#" className={`${styles["dropbtn"]}`}>tech stack</Link>
         </li>
          <li className={`${styles["dropdown"]}`}>
            <Link href="#" className={`${styles["dropbtn"]}`}>contact me</Link>
            </li>
          <li className={`${styles["dropdown"]}`}>
            <Link href="#" className={`${styles["dropbtn"]}`}>about</Link>
          </li>
          <li className={`${styles["dropdown"]}`}>
            <Link href="#" className={`${styles["dropbtn"]}`}>Github</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar