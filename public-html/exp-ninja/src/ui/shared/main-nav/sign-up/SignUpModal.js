import React, {useState} from "react";
import {Button} from "react-bootstrap";
import {Modal} from "react-bootstrap";
import {SignUpForm} from "./SignUpForm";
import "../sign-in/menuStyle.css"


export const SignUpModal = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button onClick={handleShow} size='lg' className='signUpButton mt-2' >
				Sign-Up
			</Button>

			<Modal show={show} onHide={handleClose} className="menuBackground">
				<Modal.Header className="signUpBackground">
					<Modal.Title>Sign-Up</Modal.Title>
				</Modal.Header>
				<Modal.Body className="signUpBackground">
					<SignUpForm/>
				</Modal.Body>
				<Modal.Footer className="signUpBackground">
					<Button size="lg" className="inMenuButton border-0" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
