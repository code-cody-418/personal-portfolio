import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import { useStore } from "../utils/store";
import { ModalContent } from "./ModalContent";

export const MyModal = () => {
  // Opening and closing the modal
  const modalState = useStore((state) => state.modalState);
  const handleClose = useStore((state) => state.closeModal);

  // Modal contents
  const allListItems = useStore((state) => state.allListItems);

  const handleShow = useStore((state) => state.showModal);

  const handleTextClick = (modalInfo, index) => {
    handleShow();
  };

  return (
    <>
      <Modal
        show={modalState}
        onHide={handleClose}
        size="lg"
        dialogClassName="custom-modal"
      >
        <Modal.Header closeButton className="text-white bg-dark bg-gradient">
          <Modal.Title>
            <Container>
              <Row>
                <Col xs={12}>
                  <h2 className="modal-title">Modal Title Temp</h2>
                </Col>
              </Row>
            </Container>
          </Modal.Title>
        </Modal.Header>

        {allListItems?.map((listItem, i) => (
          <ModalContent key={i} listItem={listItem} />
        ))}

        <Modal.Footer className="bg-dark bg-gradient">
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
