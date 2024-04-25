import styles from './footer.module.css'
import { BrowserRouter as Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className={styles.footer}>
            {/* <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav> */}
            <div className={styles.buttonContainer}>
        {/* <button className={`${styles.button} ${styles.primary}`}><Link to={'/card'}>Карточки</Link></button>
        <button className={`${styles.button} ${styles.secondary}`}><Link to={'/listofwords'}>Список слов</Link></button> */}
        <Link to="/card" className={`${styles.button} ${styles.primary}`}>Карточки</Link>
                <Link to="/listofwords" className={`${styles.button} ${styles.secondary}`}>Список слов</Link>
            
      </div>
        </footer>
    );
}

export default Footer;