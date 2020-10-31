import React, { Component } from "react";
import { Jumbotron, Container, Row, Col, Card } from "react-bootstrap";

class Projects extends Component {
    render() {
        return (
        <Jumbotron fluid>
        <Container>
          <h1>Group Projects</h1>
          <Row>
            <Col xs={2} md={4}>
              <Card className="projectCard">
                  <h3>Space Exploration</h3>
                  <a href="https://github.com/00y-700/spaceexploration">GitHub</a>
                  <a href="https://00y-700.github.io/spaceexploration/">GitHub Page</a>
              </Card>
            </Col>
            <Col xs={2} md={4}>
              <Card className="projectCard">
                  <h3>Flix Nut</h3>
                  <a href="https://github.com/00y-700/flix-nut">GitHub</a>
                  <a href="https://flix-nut.herokuapp.com/">Heroku App</a>
              </Card>
            </Col>
            <Col xs={2} md={4}>
              <Card className="projectCard">
                  <h3>Hang</h3>
                  <a href="">GitHub</a>
                  <a href="">Heroku App</a>
              </Card>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
     
        );
      }
}

export default Projects;
