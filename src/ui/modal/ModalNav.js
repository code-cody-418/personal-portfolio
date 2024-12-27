import { Container, Modal, Nav, Navbar } from "react-bootstrap";
import { useStore } from "../utils/store";
import { content } from "../scene/3d-text/content.js";

export const ModalNav = () => {
  const setAllListItems = useStore((state) => state.setAllListItems);

  return (
    <Modal.Header
      closeButton
      className="text-white border border-0 header-custom my-2 py-0 rounded-0"
    >
      <Modal.Title>
        <Navbar expand="lg" className="text-white py-0">
          <Container>
            <Navbar.Brand>My Brand Here</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav fill variant="tabs">
                <Nav.Link>Home</Nav.Link>
                <Nav.Link
                  onClick={() => {
                    setAllListItems(content.employers);
                    window.location.replace("/#top");
                  }}
                >
                  Experience
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    setAllListItems(content.skills);
                    window.location.replace("/#top");
                  }}
                >
                  Skills
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    setAllListItems(content.stack);
                    window.location.replace("/#top");
                  }}
                >
                  Stacks
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Modal.Title>
    </Modal.Header>
  );
};
