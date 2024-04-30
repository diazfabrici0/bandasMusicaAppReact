import React from 'react';
import styles from "./Navbar.module.css"; 
import ButtonHome from '../ButtonHome/ButtonHome';

export const Navbar = () => {

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
