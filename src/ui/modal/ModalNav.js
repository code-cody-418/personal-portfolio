import { Container, Modal, Nav, Navbar } from "react-bootstrap";
import { useStore } from "../utils/store";
import { content } from "../scene/3d-text/content.js";

export const ModalNav = () => {
  const setAllListItems = useStore((state) => state.setAllListItems);
  const setSectionTitle = useStore((state) => state.setSectionTitle);
  const handleClose = useStore((state) => state.closeModal);

  return (
    // rounded-0 is used for a flashing bug
    <Modal.Header
      closeButton
      className="text-white border-0 header-custom py-0 rounded-0 bg-dark"
    >
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
                  href="#top"
                  className="text-white"
                  onClick={() => {
                    setSectionTitle("About Me");
                    setAllListItems(content.aboutMe);
                  }}
                >
                  About Me
                </Nav.Link>
                <Nav.Link
                  href="#top"
                  className="text-white"
                  onClick={() => {
                    setSectionTitle("Experience");
                    setAllListItems(content.employers);
                  }}
                >
                  Experience
                </Nav.Link>
                <Nav.Link
                  href="#top"
                  className="text-white"
                  onClick={() => {
                    setSectionTitle("Skills");
                    setAllListItems(content.skills);
                  }}
                >
                  Skills
                </Nav.Link>
                <Nav.Link
                  href="#top"
                  className="text-white"
                  onClick={() => {
                    setSectionTitle("Stack");
                    setAllListItems(content.stack);
                  }}
                >
                  Stack
                </Nav.Link>
                <Nav.Link
                  href="#top"
                  className="text-white"
                  onClick={() => {
                    setSectionTitle("Contact Me");
                    setAllListItems(content.contact);
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
