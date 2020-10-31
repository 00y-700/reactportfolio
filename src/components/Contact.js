import React, { Component } from "react";
import { Card, Form, } from "react-bootstrap";
import "./style.css";

class Contact extends Component {
  render() {
    return (
      <div className="page">
          <Card>
        <Form className="contact">
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="textarea" placeholder="name" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
        </Form>
      </Card>
      </div>
      
    )
  
};
}

export default Contact;
