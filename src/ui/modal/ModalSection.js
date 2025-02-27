import { Row } from "react-bootstrap";
import { ModalContent } from "./ModalContent";

export const ModalSection = ({ content, sectionTitle }) => {
  return (
    <>
      <Row className="text-center">
        <h2 className="section-title" id={sectionTitle}>
          {sectionTitle}
        </h2>
      </Row>
      <Row xs={1} md={3} className="g-4">
        {content?.map((listItem, i) => (
          <ModalContent key={i} listItem={listItem} />
        ))}
      </Row>
    </>
  );
};
