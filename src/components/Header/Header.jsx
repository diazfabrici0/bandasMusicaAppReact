import React from 'react';
import { FaHome } from "react-icons/fa";
import styles from "./Header.module.css"; 
//import ButtonHome from '../ButtonHome/ButtonHome';

const Header = () => {

  return (
    <div className={styles.primary}>
        <div className={styles.secondary}>
            <div className={styles.icono}>

                    <FaHome size={30} />

            </div>
        </div>
    </div>
  );
}

export default Header;
