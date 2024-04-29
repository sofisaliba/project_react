// import { words } from "./fields";
// import Card from "./сard";

// function Game (){
//     return (
//     <section id="container">
//     {
//                     words.map((words, index) => {
//                         return (
//                             < Card words = {words} key = {index} />
//                         )                
//                     })
//                 }
//     </section>
//     );
//     }
    
//     export default Game;

// import React, { useState } from "react";
// import Card from "./сard";

// const WordCardContainer = ({ words, initialIndex = 0 }) => {
//   const [currentIndex, setCurrentIndex] = useState(initialIndex);

//   const goToNextCard = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1 < words.length ? prevIndex + 1 : 0));
//   };

//   const goToPrevCard = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 >= 0 ? prevIndex - 1 : words.length - 1));
//   };

//   return (
//     <div>
//       <Card {...words[currentIndex]} />
//       <button onClick={goToPrevCard}>Previous</button>
//       <button onClick={goToNextCard}>Next</button>
//     </div>
//   );
// };

// export default WordCardContainer;
