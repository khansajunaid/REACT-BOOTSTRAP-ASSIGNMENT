import { Container } from 'react-bootstrap';
import './App.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { TestButton } from './Components/Button';

import "./Components/Button/style.css"
import BasicExample from './Components/Card';
import FormSubmit from './Components/Form';
function App() {
  return (
    <div className="App">
      <Container>
      DEMO REACT 
      <Row>
      <Col className='one'>
      
     
 <TestButton buttonname={"login"}/>
     </Col>
     <Col className='two'>
 <TestButton buttonname={"Sign up"}/>
   </Col>
   </Row> 
   <BasicExample/>
  <FormSubmit></FormSubmit>
  </Container>
    </div>
  );
}

export default App;
