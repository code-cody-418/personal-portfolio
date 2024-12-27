import { Modal, Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { useStore } from "../utils/store";
import { ModalContent } from "./ModalContent";
import { useEffect } from "react";

export const MyModal = () => {
  // Opening and closing the modal
  const modalState = useStore((state) => state.modalState);
  const handleClose = useStore((state) => state.closeModal);

  // Modal contents
  const allListItems = useStore((state) => state.allListItems);
  const sectionLocation = useStore((state) => state.sectionLocation)

  useEffect(() => {
    window.location.replace("/#" + sectionLocation)
  }, [sectionLocation])

  return (
    <>
      <Modal
        show={modalState}
        onHide={handleClose}
        size="lg"
        dialogClassName="custom-modal"
      >
        <Modal.Header
          closeButton
          className="text-white bg-dark border border-0"
        >
          <Modal.Title>
            <Navbar expand="lg" className="bg-dark text-white">
              <Container>
                <Navbar.Brand>My Brand Here</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>Experience</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Modal.Title>
        </Modal.Header>

        {allListItems?.map((listItem, i) => (
          <ModalContent key={i} listItem={listItem} />
        ))}

        <Modal.Footer className="bg-dark border border-0 text-white">
          <Container>
            <Row className="mt-3 justify-content-between">
              <Col xs={12} lg={4}>
                <p>Footer</p>
              </Col>
              <Col xs={12} lg={4}>
                <p>Footer</p>
              </Col>
            </Row>
          </Container>
        </Modal.Footer>
      </Modal>
    </>
  );
};
