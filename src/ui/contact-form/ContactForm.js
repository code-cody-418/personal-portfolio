import { useState } from "react";
import { Button, Form, Col } from "react-bootstrap";

export const ContactForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    // console.log("submitted", event)

    const form = event.currentTarget;
    console.log(form.checkValidity());

    if (form.checkValidity() === false) {
      console.log("in-valid");
    } else if (form.checkValidity() === true) {
      console.log("valid");
    }
    event.stopPropagation();
    event.preventDefault();
    setValidated(true);
  };
  return (
    <>
      <Form
        className="modal-body"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Group as={Col} md="8" controlId="fullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control required type="text" placeholder="Full Name" />
          <Form.Control.Feedback type="invalid">
            Please enter full name
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="8" controlId="company">
          <Form.Label>Company Name (Optional)</Form.Label>
          <Form.Control type="text" placeholder="Optional: Company Name" />
        </Form.Group>
        
        <Form.Group as={Col} md="8" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control required type="email" placeholder="Email" />
          <Form.Control.Feedback type="invalid">
            Please enter valid Email.
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group as={Col} md="8" controlId="message">
          <Form.Label>Enter a Message</Form.Label>
          <Form.Control style={{ height: '100px' }} required as="textarea" placeholder="Message" />
          <Form.Control.Feedback type="invalid">
            Please leave a message.
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit">Submit form</Button>
      </Form>
    </>
  );
};
