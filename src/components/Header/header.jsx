import styles from './header.module.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className={styles.header}>
            <img src="/scrabble.png" alt="Company Logo" className="logo"  />
            
            <nav>
                <ul>
                <Link to="/">Home</Link>
                </ul>
            </nav>
        </header>

    );
}

export default Header;