import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
   function BasicExample() {
    return (
      <div className="d-flex justify-content-center ">
         <Card style={{ width: '300px', height: '300px' }}>
         
        <Card.Img variant="top" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" />
        <Card.Body>
          <Card.Title>WELCOME</Card.Title>
          <Card.Text>
            HOPE YOU ARE DOING FINE!
          </Card.Text>
          <Button variant="primary">ENTER IN TO OUR WORLD</Button>
        </Card.Body>
      </Card>
      </div>
      
     
    );
  }
  export default BasicExample;
  