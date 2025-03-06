import { Col, Image, Row } from "react-bootstrap";
import { content } from "../scene/3d-text/content.js";

export const AboutMe = () => {
  return (
    <>
      <Row className="text-center">
        <h2 className="section-title" id={"About Me"}>
          About Me
        </h2>
      </Row>
      <Row xs={1} md={3} className="g-4">
        <Col xs={12} md={8}>
          <p>{content.aboutMe[0].description}</p>
        </Col>
        <Col xs={12} md={4}>
          <Image src={content.aboutMe[0].img} fluid rounded alt="Cody Slama" />
        </Col>
      </Row>
    </>
  );
};
