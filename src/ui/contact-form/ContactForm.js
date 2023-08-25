import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';


export const ContactForm = ({ allModalInfo }) => {

    function copyEmail() {
        navigator.clipboard.writeText("code_slama@outlook.com")
    }
    return (
        <>
            <Row>
                <Col xs={12} md={8}>
                    <p className="modal-body">
                        <b>Email:</b> <span className='email' title="Click to Copy" onClick={copyEmail}>code_slama@outlook.com </span>
                    </p>
                    <p className="modal-body">
                        <a href='https://www.linkedin.com/in/code-cody/' target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </p>
                </Col>
                <Col xs={12} md={4} className="my-auto d-block text-center">
                    {allModalInfo?.img ? <Image src={allModalInfo?.img} alt={allModalInfo?.img} roundedCircle fluid /> : null}
                </Col>
            </Row>
        </>
    )
}
