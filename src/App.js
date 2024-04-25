import React from 'react';
import Header from './components/Header/header';
//import MyForm from './components/listofwords';
import CardsFromMain from './components/Card/RouteForCards/cardsAndMain';
import Footer from './components/Footer/footer';
// import Cards from './components/sum';


import './App.css';
// import { Router } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Cards from './components/sum';
// function App() {
//   return (
//       <div id='container'>
//           <Header />
//           <MyForm/>
//           {/* <Cards /> */}
//           <CardsFromMain />
//           <Footer />
//     //  </div>
//   );
// }

 function App () {
  return (

 <Router>

   {/* <Header showLoginForm={showLoginForm} u /> */}
   {/* {isLoginFormShown && <LoginForm closeLoginForm={closeLoginForm} />} */}
   <Header/>
  
     <Routes>
      {/* <Route exact path="/listofwords" element={<MyForm />} /> */}
       {/* <Route exact path="/card" element={<Cards />} /> */}
       <Route exact path="/cardsAndMain" element={<CardsFromMain/>} />
      
      
     </Routes>
  
   <Footer />

  
 </Router>
 
   );
 }

export default App;
