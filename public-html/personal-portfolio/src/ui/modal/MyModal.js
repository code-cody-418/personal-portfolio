import { Modal } from "react-bootstrap";
import { useModalStore } from "../utils/store";

export const MyModal = () => {
    const modalState = useModalStore((state) => state.modalState)
    const handleClose = useModalStore((state) => state.closeModal)
    const modalTitle = useModalStore((state) => state.modalTitle)
    return (
        <>
            <Modal show={modalState} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    Footer
                </Modal.Footer>
            </Modal>
        </>
    )
}