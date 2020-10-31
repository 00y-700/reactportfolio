import React, { Component } from "react";
import { Jumbotron, Container, Row, Col, Card } from "react-bootstrap";

class FooterCard extends Component {
  render() {
    return (
    <Jumbotron fluid>
    <Container>
      <h1>Apps</h1>
      <Row>
        <Col xs={2} md={4}>
          <Card className="projectCard">
              <h4>Employee Manager CLI</h4>
              <a href="https://github.com/00y-700/employee.manager">GitHub</a>
          </Card>
        </Col>
        <Col xs={2} md={4}>
          <Card className="projectCard">
              <h4>Budget App</h4>
              <a href="https://murmuring-oasis-65476.herokuapp.com/">Heroku App</a>
          </Card>
        </Col>
        <Col xs={2} md={4}>
          <Card className="projectCard">
              <h4>Fitness App</h4>
              <a href="https://thawing-plateau-50369.herokuapp.com/?id=5f9b7615f1a7730017d598f7">Heroku App</a>
          </Card>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
 
    );
  }
}

export default FooterCard;
