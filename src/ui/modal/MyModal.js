import { Modal, Container, Row, Col } from "react-bootstrap";
import { useStore } from "../utils/store";
import { ModalContent } from "./ModalContent";
import { useEffect } from "react";
import { ModalNav } from "./ModalNav";

export const MyModal = () => {
  // Opening and closing the modal
  const modalState = useStore((state) => state.modalState);
  const handleClose = useStore((state) => state.closeModal);
  const setSectionLocation = useStore((state) => state.setSectionLocation);

  // Modal contents
  const allListItems = useStore((state) => state.allListItems);
  const sectionLocation = useStore((state) => state.sectionLocation);
  const sectionTitle = useStore((state) => state.sectionTitle);

  useEffect(() => {
    if (sectionLocation) {
      window.location.replace("/#" + sectionLocation);
    }
  }, [sectionLocation]);

  return (
    <>
      <Modal
        show={modalState}
        onHide={() => {
          handleClose();
          // setSectionLocation to empty is used to fix a bug with navigation if the same item is clicked twice
          setSectionLocation("");
        }}
        size="lg"
        dialogClassName="custom-modal"
      >
        <ModalNav />

        <Modal.Body className="text-white bg-dark modal-text border-0">
          <div id="top"></div>
          <Container>
            <Row className="text-center">
              <h2 className="section-title">{sectionTitle}</h2>
            </Row>
            {allListItems?.map((listItem, i) => (
              <ModalContent key={i} listItem={listItem} />
            ))}

            <Row className="mt-3 justify-content-between">
              <Col xs={12} lg={4}>
                <p className="my-0">Footer</p>
              </Col>
              <Col xs={12} lg={4}>
                <p className="my-0">Footer</p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};
