import { Modal, Container, Row, Col } from "react-bootstrap";
import { useStore } from "../utils/store";
import { ModalContent } from "./ModalContent";
import { useEffect } from "react";
import { ModalNav } from "./ModalNav";

export const MyModal = () => {
  // Opening and closing the modal
  const modalState = useStore((state) => state.modalState);
  const handleClose = useStore((state) => state.closeModal);

  // Modal contents
  const allListItems = useStore((state) => state.allListItems);
  const sectionLocation = useStore((state) => state.sectionLocation);

  useEffect(() => {
    if (sectionLocation) {
      window.location.replace("/#" + sectionLocation);
    }
  }, [sectionLocation]);

  return (
    <>
      <Modal
        show={modalState}
        onHide={handleClose}
        size="lg"
        dialogClassName="custom-modal"
      >
        <ModalNav />

        <Modal.Body className="text-white bg-dark modal-text border-0">
        <div id="top"></div>
          <Container>
            {allListItems?.map((listItem, i) => (
              <ModalContent key={i} listItem={listItem} />
            ))}
          </Container>
        </Modal.Body>

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
