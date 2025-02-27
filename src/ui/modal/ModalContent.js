import { Col, Image, Card } from "react-bootstrap";
import { ExampleApiCall } from "./ExampleApiCall";

export const ModalContent = ({ listItem }) => {
  return (
    <>
      <Col className="d-flex">
        <Card
          bg="secondary"
          text="dark"
          className="mb-2 flex-fill"
          border="light"
        >
          <Card.Header className="card-header">
            <Card.Title id={listItem?.title} className="modal-title">
              {
                //listItem.title Logic to avoid duplication with headers
                listItem?.title === "About Me" ||
                listItem?.title === "Contact Me"
                  ? ""
                  : listItem?.title
              }
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted modal-subtitle">
              {listItem?.subTitle}
            </Card.Subtitle>
          </Card.Header>
          <Card.Body>
            <Card.Text>{listItem?.description}</Card.Text>
          </Card.Body>
          {listItem?.img ? (
            <Image
              src={listItem?.img}
              alt={listItem?.img}
              roundedCircle={listItem.roundImg}
            />
          ) : null}
          {listItem?.apiCall ? <ExampleApiCall /> : null}
        </Card>
      </Col>
    </>
  );
};
