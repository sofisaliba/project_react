import styles from './footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;