import logo from '../../logo.svg';
import styles from '../styles/layout.module.css';

function Home() {
    return (
      <div className={styles.Home}>
        <header className={styles.Homeheader}>
          <img src={logo} className={styles.Homelogo} alt={styles.logo} />
          <p>
            Edit <code>src/Home.js</code> and save to reload.
          </p>
          <a
            className={styles.Homelink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
  
  export default Home;