import React from 'react';

import styles from './content.module.css'


function Content() {
    return (
      // <Router>
        <div className={styles.main}>
    <p className={styles.name}>Учи язык эффективно</p>

<button className={styles.showCards}>Игра</button>

                   
  </div>

    );
  }

  export default Content