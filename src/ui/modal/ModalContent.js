import { Col, Image, Card } from "react-bootstrap";
import { ExampleApiCall } from "./ExampleApiCall";
import { useEffect, useRef } from "react";
import { useStore } from "../utils/store";

export const ModalContent = ({ listItem }) => {
  const headerRef = useRef(null);
  const tallestCardHeaderHeight = useStore(
    (state) => state.tallestCardHeaderHeight
  );
  const setTallestCardHeaderHeight = useStore(
    (state) => state.setTallestCardHeaderHeight
  );
  useEffect(() => {
    const currentCardHeaderHeight =
      headerRef.current.getBoundingClientRect().height;
    if (currentCardHeaderHeight > tallestCardHeaderHeight) {
      setTallestCardHeaderHeight(currentCardHeaderHeight + 5); // plus 5 because it would cutoff the subtitle
    }
  }, [tallestCardHeaderHeight, setTallestCardHeaderHeight]);
  return (
    <>
      <Col className="d-flex" xs={12} md={listItem.colSize ?? 4}>
        <Card
          bg="secondary"
          text="dark"
          className="mb-2 flex-fill"
          border="light"
        >
          <Card.Header>
            <div style={{ height: tallestCardHeaderHeight }}>
              <Card.Title
                ref={headerRef}
                id={listItem?.title}
                className="modal-title"
              >
                {listItem?.title}
                <span className="skill-logo-container">
                  {listItem?.titleImg ? (
                    <Image
                      className="skill-logo"
                      src={listItem?.titleImg}
                      alt={listItem?.titleImg}
                      roundedCircle={listItem.roundImg}
                    />
                  ) : null}
                </span>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted modal-subtitle">
                {listItem?.subTitle}
              </Card.Subtitle>
            </div>
          </Card.Header>
          <Card.Body>
            {listItem?.img ? (
              <div className="card-image-container">
                <Image
                  className="card-image"
                  src={listItem?.img}
                  alt={listItem?.img}
                  roundedCircle={listItem.roundImg}
                />
              </div>
            ) : null}
            <Card.Text>{listItem?.description}</Card.Text>
            {listItem?.apiCall ? <ExampleApiCall /> : null}
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
