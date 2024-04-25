// import { Card } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import styles from './main.module.css'
import Cards from '../../сard';
import styles from './cardsAndMain.module.css'


// import Button from 'react-bootstrap/Button';
// function Cards() {
//     return (
//       <Card style={{ width: '18rem' }}>
//         <Card.Body>
//           <Card.Title>Card Title</Card.Title>
//           <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//           {/* <Card.Link href="#">Card Link</Card.Link>
//           <Card.Link href="#">Another Link</Card.Link> */}
//           {/* <Button variant="primary">Go somewhere</Button> */}
//           <Button size="small" color="green">Known</Button>
//                      <Button size="small" color="red">Unknown</Button>
//         </Card.Body>
//       </Card>
//     );
//   }
  

function CardsFromMain() {
    return (
      <Router>
        <div className={styles.main}>
    <p className={styles.name}>Учи язык эффективно</p>
<button className={styles.showCards}><Link to='/card' target="_blank" className={styles.underline}>Игра</Link></button>

                   
  
          <Routes>
            <Route path='/card' element={<Cards />}/>
          </Routes>
          </div>
      </Router>
    );
  }

  export default CardsFromMain