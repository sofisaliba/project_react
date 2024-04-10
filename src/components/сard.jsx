// export default function Card() {
//     return (
//         <div style={{}}>
//             <h4>The word</h4>
//             <Card
//                 style={{
//                     width: 400,
//                     backgroundColor: "yellow",
//                 }}
//             >
//                 <CardContent>
//                     <Typography
//                         style={{ fontSize: 14 }}
//                         color="textSecondary"
//                         gutterBottom
//                     >
//                         Meaning of the word
//                     </Typography>
//                     <Typography variant="h5" component="h2">
//                         transcrition
//                     </Typography>
//                 </CardContent>
//                 <CardActions>
//                     <Button size="small" color="green">Known</Button>
//                     <Button size="small" color="red">Unknown</Button>
//                 </CardActions>
//             </Card>
//         </div>
//     );
// }

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function Cards() {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//   );
// }

// export default Cards;




//АКТИВНАЯ ЧАСТЬ С БОТСРАПОМ ДАЛЬШЕ





import Button from 'react-bootstrap/Button';
 import Card from 'react-bootstrap/Card';
function Cards() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          {/* <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link> */}
          {/* <Button variant="primary">Go somewhere</Button> */}
          <Button size="small" color="green">Known</Button>
//                     <Button size="small" color="red">Unknown</Button>
        </Card.Body>
      </Card>
    );
  }
  
  export default Cards;