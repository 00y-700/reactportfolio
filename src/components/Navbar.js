import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, } from "react-bootstrap";

class MyNavbar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" style={{height: "10vh"}}>
    <Navbar.Brand href="/">Jeffrey Harding</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Bio</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        <Nav.Link href="/cv">Resumé</Nav.Link>
        <NavDropdown title="Portfolio" id="basic-nav-dropdown">
          <NavDropdown.Item href="/work">Personal Work</NavDropdown.Item>
          <NavDropdown.Item href="/projects">Group Projects</NavDropdown.Item>
          <NavDropdown.Item href="https://github.com/00y-700">GitHub</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    );
  }
  
}

export default MyNavbar;
