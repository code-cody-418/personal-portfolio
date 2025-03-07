import React from "react";
import { Col, Row } from "react-bootstrap";

export const Contact = () => {
  function copyEmail() {
    navigator.clipboard.writeText("code_slama@outlook.com");
  }
  return (
    <>
      <Row className="text-center">
        <h2 className="section-title" id="Contact Me">
          Contact Me
        </h2>
      </Row>
      <Row>
        <Col xs={12} md={8}>
          <p>
            <b>Email:</b>{" "}
            <span className="email" title="Click to Copy" onClick={copyEmail}>
              code_slama@outlook.com{" "}
            </span>
          </p>
          <p>
            <b>LinkedIn Page:</b>{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://www.linkedin.com/in/code-cody/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
          {/* <ContactForm /> */}
        </Col>
      </Row>
    </>
  );
};
