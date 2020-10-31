import React, { Component } from "react";
import { Jumbotron, Container, Figure, Row, Col } from "react-bootstrap";
import Resume from "../assets/resume07:18:20.jpg";
import Resume2 from "../assets/resume07:18:20-2.jpg";
import "./style.css";

class Bio extends Component {
  render() {
    return (
    <div className="page">
        <Jumbotron fluid>
    <Container>
      <h1>Resumé</h1>
      <Row>
        <Col >
          <Figure>
            <Figure.Image
            //   width={171}
            //   height={180}
              alt="resume"
              src={Resume}
            />
            <Figure.Image
            //   width={171}
            //   height={180}
              alt="resume"
              src={Resume2}
            />
          </Figure>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
    </div>
    
 
    );
  }
  
}

export default Bio;
