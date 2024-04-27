import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import ToDoList from "./myform";
// import styles from './card.module.css'
// //import React, { useState } from 'react';
// import AddButton from './buttonOnCard';
// //import BackSide from './back';
// //ПЕРВЫЙ ВАРИАНТ
// function Cards() {
//     return (       
// <div className={styles.wrap}>
  
// <div className={styles.cardContainer}>
  
//   <div className={styles.front}>
//   <div className='word'>Card Word</div>
//   <div className='transcription'>Transcription</div>
//   <AddButton />

  
//   </div>

// <div className={styles.back}>
// <div className='word'>Card Word</div>
//   <div className='transcription'>Transcription</div>
//   <div className="translation">Translation</div>
// </div>

// </div>
// </div>


//     );
//   }
  
//   export default Cards;

//ВТОРОЙ ВАРИАНТ
// export default function Cards(props) {
// 	const {word, transcription,} = props;
// 	let actionItem;
// 	if (addedToCart) {
// 		actionItem = <BackSide addedToCart={addedToCart} />;
// 	} else {
// 		actionItem = <AddButton />;
// 	}
// 	return (
// 		<div className={styles.wrap}>
// 			<div className={styles.cardContainer}>
// 				<div className={styles.front}>
//   <div className='word'>${word}</div>
//   <div className='transcription'>${transcription}</div>
  

// 			</div>
// 			<div className="card-footer">
			
// 				{actionItem}
//         </div>
{/* <div className={styles.back}>
<div className='word'>{props.word}</div>
  <div className='transcription'>{props.transcription}</div>
  <div className="translation">{props.translation}</div> */}


		// 	</div>
		// </div>
    // </div>
// 	);
// }

// Filename - App.js




function Card(props) {
	const [flip, setFlip] = useState(false);
	return (
		<ReactCardFlip isFlipped={flip}
			flipDirection="vertical">
			<div style={{
				width: '300px',
				height: '200px',
				background: '#d7fbda',
				fontSize: '40px',
				color: 'green',
				margin: '20px',
				borderRadius: '4px',
				textAlign: 'center',
				padding: '20px'
			}}>
				{props.english}
				<br />
				<br />
				<button style={{
					width: '150px',
					padding: '10px',
					fontSize: '20px',
					background: '#f5d9fa',
					fontWeight: 'bold',
					borderRadius: '5px'
				}} onClick={() => setFlip(!flip)}>
					Check</button>
			</div>
			<div style={{
				width: '300px',
				height: '200px',
				background: '#fbd7f8',
				fontSize: '40px',
				color: 'blue',
				margin: '20px',
				borderRadius: '4px',
				textAlign: 'center',
				padding: '20px'
			}}>
				{props.russian}
				<br />
				<button style={{
					width: '150px',
					padding: '10px',
					fontSize: '20px',
					background: '#f5d9fa',
					fontWeight: 'bold',
					borderRadius: '5px'
				}} onClick={() => setFlip(!flip)}>
					Back</button>
			</div>
		</ReactCardFlip>
	);
}

export default Card;
