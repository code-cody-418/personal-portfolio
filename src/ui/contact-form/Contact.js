import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { CodeLogo } from '../scene/skills-icons/Code_logo';
import { ContactForm } from './ContactForm';


export const Contact = ({ allModalInfo }) => {

    function copyEmail() {
        navigator.clipboard.writeText("code_slama@outlook.com")
    }
    return (
        <>
            <Row>
                <Col xs={12} md={8}>
                    <p className="modal-body mb-0 pb-0">
                        <b>Email:</b> <span className='email' title="Click to Copy" onClick={copyEmail}>code_slama@outlook.com </span>
                    </p>
                    <p className="modal-body">
                        <b>LinkedIn Page:</b> <a style={{ textDecoration: "none" }} href='https://www.linkedin.com/in/code-cody/' target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </p>
                    <ContactForm />
                </Col>
                <Col xs={12} md={4} className="my-auto d-block text-center">
                    <Canvas>
                        <CodeLogo modal={true} />
                    </Canvas>
                </Col>

                
            </Row>
        </>
    )
}
