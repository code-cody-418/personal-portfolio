import { Modal, Container, Row, Col, Image } from "react-bootstrap";
import { useModalStore } from "../utils/store";

export const MyModal = () => {
    // Opening and closing the modal
    const modalState = useModalStore((state) => state.modalState)
    const handleClose = useModalStore((state) => state.closeModal)

    // Modal contents
    const modalTitle = useModalStore((state) => state.modalTitle)
    const modalSubTitle = useModalStore((state => state.modalSubTitle))
    const modalDescription = useModalStore((state) => state.modalDescription)
    const modalImg = useModalStore((state) => state.modalImg)

    return (
        <>
            <Modal show={modalState} onHide={handleClose} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <Container>
                            <Row>
                                <Col xs={12}>
                                    {modalTitle}
                                    <br />
                                    {modalSubTitle}
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-text">
                    <Container>
                        <Row>
                            <Col xs={12} md={8}>{modalDescription}</Col>
                            <Col xs={12} md={4} className="my-auto d-block text-center">
                                {modalImg ? <Image src={modalImg} alt="Me" roundedCircle fluid /> : null}
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    )
}