import { Row, Col, Image } from "react-bootstrap";
import { Contact } from "../contact-form/Contact";
import { ThreeLogo } from "./ThreeLogo";
import { ExampleApiCall } from "./ExampleApiCall";

export const ModalContent = ({ listItem }) => {
  return (
    <>
      <Row>
        <Col xs={12}>
          <h3 className="modal-title" id={listItem?.title}>
            {listItem?.title}
          </h3>
        </Col>
        <Col xs={12}>
          <h4 className="modal-subtitle">{listItem?.subTitle}</h4>
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
    </>
  );
};
