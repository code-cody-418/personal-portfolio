import { Container, Modal, Nav, Navbar } from "react-bootstrap";

export const ModalNav = () => {
  return (
    <Modal.Header closeButton className="text-white border border-0">
      <Modal.Title>
        <Navbar expand="lg" className=" text-white">
          <Container>
            <Navbar.Brand>My Brand Here</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav fill variant="tabs">
                <Nav.Link>Home</Nav.Link>
                <Nav.Link >Experience</Nav.Link>
                <Nav.Link>Skills</Nav.Link>
                <Nav.Link>Stacks</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Modal.Title>
    </Modal.Header>
  );
};
