import { Container, Modal, Nav, Navbar } from "react-bootstrap";
import { useStore } from "../utils/store";

export const ModalNav = () => {
  const handleClose = useStore((state) => state.closeModal);
  const setSectionLocation = useStore((state) => state.setSectionLocation);

  return (
    // rounded-0 is used for a flashing bug
    <Modal.Header closeButton className="text-white py-0 bg-dark">
      <Modal.Title>
        <Navbar expand="lg" className="py-0">
          <Container>
            <Navbar.Brand>
              <img
                onClick={() => handleClose()}
                src="/code-icon-10.png"
                width="30"
                height="30"
                className="d-inline-block align-top nav-logo"
                alt="Code Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link onClick={() => handleClose()} className="text-white">
                  Home
                </Nav.Link>
                <Nav.Link
                  className="text-white"
                  onClick={() => {
                    setSectionLocation("About Me")
                  }}
                >
                  About Me
                </Nav.Link>
                <Nav.Link
                  className="text-white"
                  onClick={() => {
                    setSectionLocation("Experience")
                  }}
                >
                  Experience
                </Nav.Link>
                <Nav.Link
                  className="text-white"
                  onClick={() => {
                    setSectionLocation("Skills")
                  }}
                >
                  Skills
                </Nav.Link>
                <Nav.Link
                  className="text-white"
                  onClick={() => {
                    setSectionLocation("Stack")
                  }}
                >
                  Stack
                </Nav.Link>
                <Nav.Link
                  className="text-white"
                  onClick={() => {
                    setSectionLocation("Contact Me")
                  }}
                >
                  Contact Me
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Modal.Title>
    </Modal.Header>
  );
};
