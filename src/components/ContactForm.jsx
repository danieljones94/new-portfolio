import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import emailjs from "emailjs-com";
import "../styles/ContactForm.css";

class ContactForm extends React.Component {
  onFormSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_32bv9wk",
        "template_5hwa6i9",
        e.target,
        "user_6d2GVOhBO8RZlexEfHcDJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  render() {
    return (
      <div id="contact">
        <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
        <Card>
          <Card.Body>
            <Card.Title>Get In Touch!</Card.Title>
            <Form onSubmit={this.onFormSubmit} id="comments">
              <Form.Group>
                <Form.Label>Your Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Jane Doe" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control name="message" as="textarea" rows="3" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ContactForm;
