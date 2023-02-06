import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Modal from "./Modal"
function List({listImg, openModal}) {
    return (

      <ListGroup as="ul">{listImg.map(item => (<ListGroup.Item  key={item} as="li" active>
              <Card style={{ width: '18rem' }}>
              <Card.Img onClick={ () => {openModal(item)}} variant="top" src={item} alt="img" />
              
          </Card>
              </ListGroup.Item> ))}
          
      </ListGroup>
            
  );
}

export default List;
{/* <ListGroup.Item as="li" active>
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={} alt="img" />
              </Card> */}