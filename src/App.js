import React from 'react';
import Header from './components/Header/header';
import Content from './components/Card/RouteForCards/content';
import Footer from './components/Footer/footer';
import MyForm from './components/myform';
import Card from './components/сard';
import Missing from './components/Missing';


import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div id='container'>
          <Header />
       
          
          <Routes>

    
          <Route path='/' element={<Content/>}/>
          <Route path='/listofwords' element={<MyForm/>}/>
          <Route path='/cards' element={<Card/>}/>
          <Route path='*' element={<Missing/>}/>



          </Routes>

          <Footer />
      </div>
    </Router>
  );
}


 export default App;
