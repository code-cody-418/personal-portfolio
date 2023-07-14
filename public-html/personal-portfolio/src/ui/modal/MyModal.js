import { Modal, Container, Row, Col, Image } from "react-bootstrap";
import { useModalStore } from "../utils/store";

export const MyModal = () => {
    // Opening and closing the modal
    const modalState = useModalStore((state) => state.modalState)
    const handleClose = useModalStore((state) => state.closeModal)

    // Modal contents
    const allModalInfo = useModalStore((state) => state.allModalInfo)

    return (
        <>
            <Modal show={modalState} onHide={handleClose} size="lg" centered>
                <Modal.Header closeButton className="text-white bg-dark bg-gradient">
                    <Modal.Title>
                        <Container>
                            <Row>
                                <Col xs={12}>
                                    {allModalInfo?.title}
                                    <br />
                                    {allModalInfo?.subTitle}
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-white bg-dark bg-gradient modal-text">
                    <Container>
                        <Row>
                            <Col xs={12} md={8} className="my-auto">{allModalInfo?.description}</Col>
                            <Col xs={12} md={4} className="my-auto d-block text-center">
                                {allModalInfo?.img ? <Image src={allModalInfo?.img} alt="Me" roundedCircle fluid /> : null}
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    )
}