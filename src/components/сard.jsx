import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import styles from './card.module.css'


const Card = (words) => {
	const [isFlipped, setIsFlipped] = useState(false);
	const handleClick = () => {
	  setIsFlipped(!isFlipped);
	};
  
	return (
	  <ReactCardFlip
		isFlipped={isFlipped}
		flipDirection="vertical"
	  >
		<div className={styles.front}>
		  <div className="word">{words.word}</div>
		  <div className="transcription">{words.transcription}</div>
		  <button onClick={handleClick} className={styles.flipbutton}>Check</button>
		</div>
		<div className={styles.back}>
		<div className="word">{words.word}</div>
		  <div className="transcription">{words.transcription}</div>
		  <div className="translation">{words.translation}</div>
		  <button onClick={handleClick} className={styles.flipbutton}>Back</button>
		</div>
	  </ReactCardFlip>
	);
  };
  
  export default Card;

//import React, { useState } from 'react';
// import ReactCardFlip from 'react-card-flip';
// import PropTypes from 'prop-types';
// //import styles from './Card.module.css'; // Assuming you have a CSS module for styling

// const Card = ({ frontContent, backContent }) => {
//   const [isFlipped, setIsFlipped] = useState(false);
  
//   const handleClick = () => {
//     setIsFlipped(!isFlipped);
//   };

//   return (
//     <ReactCardFlip
//       isFlipped={isFlipped}
//       flipDirection="vertical"
//     >
//       <div className={styles.front}>
//         <h1>{frontContent}</h1>
//         <button onClick={handleClick} className={styles.flipButton}>Check</button>
//       </div>
//       <div className={styles.back}>
//         <h1>{backContent}</h1>
//         <button onClick={handleClick} className={styles.flipButton}>Back</button>
//       </div>
//     </ReactCardFlip>
//   );
// };

// Card.propTypes = {
//   frontContent: PropTypes.node.isRequired,
//   backContent: PropTypes.node.isRequired
// };

// export default Card;
