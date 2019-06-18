import React from 'react'; 
import { Container , Row, Col } from 'reactstrap';
import ContactSummery from './ContactSummery';
import ChatScreen from './ChatScreen'

const MainLayout = () => {
  return (
    <div>
        <Container>
        <Row>
          <Col xs="4" >
              <ContactSummery/>
          </Col>
              
          <Col xs="8" >
              <ChatScreen/>
          </Col>
        </Row>
        </Container>
    </div>
  );
}

export default MainLayout
