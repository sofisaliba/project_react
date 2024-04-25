import styles from './header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <img src="logo.png" alt="Company Logo" className="logo" />
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
        // <>
        // <h1>
        //     Expand your vocabulary with <span className={styles.logo}>LexiCa🍁</span> - where words come to life!
        // </h1>
        // <nav>
        //     <ul>
        //         <li><Link to={'/card'}>Cards</Link></li>
        //         <li><Link to={'/listofwords'}>List of words</Link></li>
        //     </ul>
        // </nav>
        // </>
    );
}

export default Header;