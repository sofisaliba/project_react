//import { Card } from 'react-bootstrap';
import styles from './footer.module.css'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className={styles.footer}>
            
            <Link to="/listofwords">List of Words</Link>
    <Link to="/cards">Cards</Link>
            
        </footer>
    );
}

export default Footer;