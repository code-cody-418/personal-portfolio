import { Modal } from "react-bootstrap";
import { useModalStore } from "../utils/store";

export const MyModal = () => {
    // Opening and closing the modal
    const modalState = useModalStore((state) => state.modalState)
    const handleClose = useModalStore((state) => state.closeModal)

    // Modal contents
    const modalTitle = useModalStore((state) => state.modalTitle)
    const modalDescription = useModalStore((state) => state.modalDescription)
    const modalSubTitle = useModalStore((state => state.modalSubTitle))
    return (
        <>
            <Modal show={modalState} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {modalTitle}
                        <br />
                        {modalSubTitle}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {modalDescription}
                </Modal.Body>
            </Modal>
        </>
    )
}