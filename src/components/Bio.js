import React, { Component } from "react";
import { Jumbotron, Container, Figure, Row, Col } from "react-bootstrap";
import bioPic from "../assets/one.jpg";
import "./style.css";

class Bio extends Component {
  render() {
    return (
    <div className="page">
        <Jumbotron fluid>
    <Container>
      <h1>About Me</h1>
      <Row>
        <Col xs={2} md={4}>
          <Figure className="photo">
            <Figure.Image
              width={171}
              height={180}
              alt="profilePic"
              src={bioPic}
            />
          </Figure>
        </Col>
        <Col xs={4} md={8}>
          <p className="bioText">
            My name is Jeffrey Harding. I am from Layton, UT. I studied English and Environmental Studies at the University of Utah. I worked as a cook while I was at the University and after leaving spent several years working at different restaurants and hospitality sites. In addition to coding and computer science I am also interested in the natural sciences, music, literature, backpacking, critical theory, visual art, and NBA basketball.
          </p>
      </Col>
      </Row>
    </Container>
  </Jumbotron>
    </div>
    
 
    );
  }
  
}

export default Bio;
