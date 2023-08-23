import { Modal, Container, Row, Col, Image, Button } from "react-bootstrap";
import { ContactForm } from "../contact-form/ContactForm";
import { useModalStore } from "../utils/store";

export const MyModal = () => {
    // Opening and closing the modal
    const modalState = useModalStore((state) => state.modalState)
    const handleClose = useModalStore((state) => state.closeModal)

    // Modal contents
    const allModalInfo = useModalStore((state) => state.allModalInfo)
    const allListItems = useModalStore((state) => state.allListItems)
    const currentItemIndex = useModalStore((state) => state.currentItemIndex)

    //set allModalInfo to the clicked previousItem or nextItem state
    const handleShow = useModalStore((state) => state.showModal)
    const setAllModalInfo = useModalStore((state) => state.setAllModalInfo)
    const setCurrentItemIndex = useModalStore((state) => state.setCurrentItemIndex)

    const handleTextClick = (modalInfo, index) => {
        setAllModalInfo(modalInfo)
        setCurrentItemIndex(index)
        handleShow()
    }

    let previousItemInfo = allListItems ? allListItems[currentItemIndex - 1] : null
    let nextItemInfo = allListItems ? allListItems[currentItemIndex + 1] : null

    let previousIndex = currentItemIndex - 1
    let nextIndex = currentItemIndex + 1
    return (
        <>
            <Modal show={modalState} onHide={handleClose} size="lg" dialogClassName="custom-modal">
                <Modal.Header closeButton className="text-white bg-dark bg-gradient">
                    <Modal.Title>
                        <Container>
                            <Row>
                                <Col xs={12}>
                                    <h2 className="modal-title">{allModalInfo?.title}</h2>
                                </Col>
                                <Col xs={12}>
                                    <h3 className="modal-subtitle">{allModalInfo?.subTitle}</h3>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-white bg-dark bg-gradient modal-text">
                    <Container>
                        {
                            allModalInfo?.contactForm ? ( // if contactForm display contact form contents
                                <ContactForm />
                            ) : ( // else display all other modal content
                                <>
                                    <Row>
                                        <Col xs={12} md={8}><p className="modal-body">{allModalInfo?.description}</p></Col>
                                        <Col xs={0} md={1}></Col>
                                        <Col xs={12} md={3} className="my-auto d-block text-center">
                                            {allModalInfo?.img ? <Image src={allModalInfo?.img} alt={allModalInfo?.img} roundedCircle fluid/> : null}
                                        </Col>
                                    </Row>
                                </>
                            )
                        }
                    </Container>
                </Modal.Body>
                <Modal.Footer className="bg-dark bg-gradient">
                    <Container>
                        <Row className="mt-3 justify-content-between">
                            <Col xs={12} lg={4}>
                                {previousItemInfo ?
                                    (
                                        <Button variant="link" className="px-0" onClick={() => handleTextClick(previousItemInfo, previousIndex)}>Previous: {previousItemInfo?.title}</Button>
                                    )
                                    : null}
                            </Col>
                            <Col xs={12} lg={4}>
                                {nextItemInfo ?
                                    (
                                        <Button variant="link" className="px-0" onClick={() => handleTextClick(nextItemInfo, nextIndex)}>Next: {nextItemInfo?.title}</Button>
                                    )
                                    : null}
                            </Col>
                        </Row>
                    </Container>
                </Modal.Footer>
            </Modal >
        </>
    )
}