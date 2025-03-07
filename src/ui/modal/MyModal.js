import { Modal, Container, Row, Col } from "react-bootstrap";
import { useStore } from "../utils/store";
import { useEffect } from "react";
import { ModalNav } from "./ModalNav";
import { content } from "../scene/3d-text/content.js";
import { ModalSection } from "./ModalSection.js";
import { Contact } from "../contact-form/Contact.js";
import { AboutMe } from "../sections/AboutMe.js";

export const MyModal = () => {
  // Opening and closing the modal
  const modalState = useStore((state) => state.modalState);
  const handleClose = useStore((state) => state.closeModal);
  const setSectionLocation = useStore((state) => state.setSectionLocation);

  // Modal contents
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
          <Container>
            <AboutMe />
            <ModalSection
              content={content.experience}
              sectionTitle="Experience"
            />
            <ModalSection
              content={content.employers}
              sectionTitle="Employers"
            />
            <ModalSection content={content.skills} sectionTitle="Skills" />
            <ModalSection content={content.stack} sectionTitle="Stack" />

            <Contact />
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};
