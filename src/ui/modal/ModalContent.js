import { Modal, Container, Row, Col, Image, Button } from "react-bootstrap";
import { useStore } from "../utils/store";
import { Contact } from "../contact-form/Contact";
import { ThreeLogo } from "./ThreeLogo";
import { ExampleApiCall } from "./ExampleApiCall";

export const ModalContent = ({ listItem }) => {
  return (
    <>
      <Modal.Body className="text-white bg-dark modal-text">
        <Container>
          <Row>
            <Col xs={12}>
              <h2 className="modal-title">{listItem?.title}</h2>
            </Col>
            <Col xs={12}>
              <h3 className="modal-subtitle">{listItem?.subTitle}</h3>
            </Col>
          </Row>
          {listItem?.contactForm ? ( // if contactForm display contact form contents
            <Contact />
          ) : (
            // else display all other modal content
            <>
              <Row>
                <Col xs={12} md={8}>
                  <p className="modal-body">{listItem?.description}</p>
                </Col>
                <Col xs={12} md={4} className="my-auto d-block">
                  {listItem?.img ? (
                    <Image
                      src={listItem?.img}
                      alt={listItem?.img}
                      roundedCircle={listItem.roundImg}
                      fluid
                    />
                  ) : null}
                  {listItem?.threeLogo ? (
                    <ThreeLogo threeLogo={listItem?.threeLogo} />
                  ) : null}
                  {listItem?.apiCall ? <ExampleApiCall /> : null}
                </Col>
              </Row>
            </>
          )}
        </Container>
      </Modal.Body>
      {/* <Modal.Footer className="bg-dark bg-gradient">
        <Container>
          <Row className="mt-3 justify-content-between">
            <Col xs={12} lg={4}>
              {previousItemInfo ? (
                <Button
                  variant="link"
                  className="px-0 link-underline link-underline-opacity-0"
                  onClick={() =>
                    handleTextClick(previousItemInfo, previousIndex)
                  }
                >
                  Previous: {previousItemInfo?.title}
                </Button>
              ) : null}
            </Col>
            <Col xs={12} lg={4}>
              {nextItemInfo ? (
                <Button
                  variant="link"
                  className="px-0 link-underline link-underline-opacity-0"
                  onClick={() => handleTextClick(nextItemInfo, nextIndex)}
                >
                  Next: {nextItemInfo?.title}
                </Button>
              ) : null}
            </Col>
          </Row>
        </Container>
      </Modal.Footer> */}
    </>
  );
};
