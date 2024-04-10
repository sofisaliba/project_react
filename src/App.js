import React from 'react';
import Header from './components/header';
// import Card from './components/сard';
// import List from './components/listofwords';
// import Cards from './components/сard';
// import Main from './components/main';
import CardsFromMain from './components/cardsAndMain';
import Footer from './components/footer';

import './App.css';

function App() {
  return (
      <div id='container'>
          <Header />
          <CardsFromMain />
          <Footer />
    //  </div>
  );
}

export default App;
