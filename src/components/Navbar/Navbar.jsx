import React from 'react';
import styles from "./Navbar.module.css"; 
import ButtonHome from '../ButtonHome/ButtonHome';

export default function Navbar () {

  return (
    <div className={styles.primary}>
        <div className={styles.secondary}>
            <div className={styles.icono}>
                <ButtonHome />   
            </div>
        </div>
    </div>
  );
}

//export Header;
