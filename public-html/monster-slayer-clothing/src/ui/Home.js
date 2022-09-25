import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
// import winterClothes from "../images/Winter-clothes-for-kids-set.jpg"
import logo from "../images/logo-01.png";
import orangeCoat from "../images/orange-coat.png";
import pinkCoat from "../images/pink-coat.png";
import purpleCoat from "../images/purple-coat.png";
import blueCoat from "../images/blue-coat.png";
import brownCoat from "../images/brown-coat.png";
import greenCoat from "../images/green-coat.png";
import facebookIcon from "../images/facebook-icon.png";
import afterDonation from "../images/monster-slayer-clothing-after-donation.png";
import "./home.css";
import { ContactForm } from "./contact-form/ContactForm";
import { DonatePayPal } from "./DonatePayPal";
import { BigDonatePayPal } from "./BigDonatePayPal";
import { FaFacebook } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

export const Home = () => {
  return (
    <>
      <Navbar
        sticky
        collapseOnSelect
        expand="lg"
        className="customNavbar sticky-top"
      >
        {/*<Container>*/}
        <Navbar.Brand
          href="#home"
          className="navBarTitle ms-2 align-items-center"
        >
          <img
            alt="Bear Jacket Logo"
            src={logo}
            width="50"
            height="50"
            className=""
          />{" "}
          Monster Slayer Clothing Bank
          {/*{*/}
          {/*    (window.innerWidth > 600)*/}
          {/*        ? ""*/}
          {/*        : ""*/}
          {/*}*/}
        </Navbar.Brand>
        {/*<Button className="donateButton ms-auto">*/}
        <div className="ms-auto me-2">
          <DonatePayPal />
        </div>
        {/*</Button>*/}
        {/*<Navbar.Toggle aria-controls="basic-navbar-nav"/>*/}
        {/*<Navbar.Collapse id="basic-navbar-nav">*/}
        {/*    <Nav className="ms-auto">*/}
        {/*        <Nav.Link href="/">Home</Nav.Link>*/}
        {/*        <Nav.Link href="#about-us">About Us</Nav.Link>*/}
        {/*        <Nav.Link href="/clothing-bank">Contact</Nav.Link>*/}
        {/*    </Nav>*/}
        {/*    */}
        {/*</Navbar.Collapse>*/}
        {/*</Container>*/}
      </Navbar>

      <Container fluid className="backgroundImage">
        <Row className="align-items-center backgroundText">
          <Col>
            <h2 className="titleHeaders text-center mb-0 ">
              Accepting Solidarity Donations
            </h2>
            <p className="titleText mb-0">For Children's Clothing Needs</p>
            <p className="titleText my-0">in Central Navajo Nation</p>
            <BigDonatePayPal />
            {/*    {*/}
            {/*        (window.innerWidth > 600)*/}
            {/*            ? " "*/}
            {/*            : "Accepting Solidarity Donations"*/}
            {/*    }*/}
            {/*</p>*/}
          </Col>
        </Row>
      </Container>
      {/*<Container>*/}
      {/*<Row className="align-items-center">*/}
      {/*<Button className="donateButton">*/}
      {/*<Col>*/}
      {/*    <DonatePayPal/>*/}
      {/*</Col>*/}
      {/*</Button>*/}
      {/*</Row>*/}
      {/*</Container>*/}

      <Container className="mt-5 aboutMeText">
        <Row className="align-items-center text-center">
          <Col>
            <h2 className="mainHeaders">About Us: </h2>
          </Col>
        </Row>
        <Row className="align-items-center text-center ">
          <Col>
            <p className="mainText">
              Monster Slayer Clothing Bank started during the fall of 2021 in
              response to the lack of adequate clothing and hygiene needs for
              families affected by poverty within central Navajo Nation. In
              effort to uphold our traditionally socialist values and maintain a
              community of K’é, we welcome you to share your resources with our
              Navajo community. We understand the pertinence of taking care of
              each other as we attempt to slay poverty. By helping our children
              get basic needs met, we are helping them to better focus on their
              personal well-being. As we revisit the history of colonial crimes
              committed against our Indigenous children in boarding schools, we
              need to continually respond to the resulting impacts of trauma and
              poverty. Please consider donating and sharing your resources in
              solidarity with Navajo children. You may get in contact with us
              via the contact form below to accommodate your requests of helping
              our Navajo communities in the heart of Navajo Nation. Ahéhee'
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="my-4">
        <Row className="align-items-center">
          <Col lg={2} xs={4}>
            <Image fluid src={orangeCoat} />
          </Col>
          <Col lg={2} xs={4}>
            <Image fluid src={pinkCoat} />
          </Col>
          <Col lg={2} xs={4}>
            <Image fluid src={purpleCoat} />
          </Col>
          <Col lg={2} xs={4}>
            <Image fluid src={blueCoat} />
          </Col>
          <Col lg={2} xs={4}>
            <Image fluid src={brownCoat} />
          </Col>
          <Col lg={2} xs={4}>
            <Image fluid src={greenCoat} />
          </Col>
        </Row>
      </Container>

      {/*<Container>*/}
      {/*    <Row>*/}
      {/*        <h2 className="mainHeaders">Items Being Requested</h2>*/}
      {/*    </Row>*/}
      {/*    <Row>*/}
      {/*        <Col>*/}
      {/*            <Card>*/}
      {/*                <Card.Img variant="top" src={orangeCoat} />*/}
      {/*                <Card.Body>*/}
      {/*                    <Card.Text>*/}
      {/*                        Some quick example text to build on the card title and make up the bulk*/}
      {/*                        of the card's content.*/}
      {/*                    </Card.Text>*/}
      {/*                </Card.Body>*/}
      {/*                <Card.Footer>*/}
      {/*                    <Button className="donateButton">Donate Item</Button>*/}
      {/*                </Card.Footer>*/}
      {/*            </Card>*/}
      {/*        </Col>*/}
      {/*        <Col>*/}
      {/*            <Card>*/}
      {/*                <Card.Img variant="top" src={pinkCoat} />*/}
      {/*                <Card.Body>*/}
      {/*                    <Card.Text>*/}
      {/*                        Some quick example text to build on the card title and make up the bulk*/}
      {/*                        of the card's content.*/}
      {/*                    </Card.Text>*/}
      {/*                </Card.Body>*/}
      {/*                <Card.Footer>*/}
      {/*                    <Button className="donateButton">Donate Item</Button>*/}
      {/*                </Card.Footer>*/}
      {/*            </Card>*/}
      {/*        </Col>*/}
      {/*        <Col>*/}
      {/*            <Card>*/}
      {/*                <Card.Img variant="top" src={purpleCoat} />*/}
      {/*                <Card.Body>*/}
      {/*                    <Card.Text>*/}
      {/*                        Some quick example text to build on the card title and make up the bulk*/}
      {/*                        of the card's content.*/}
      {/*                    </Card.Text>*/}
      {/*                </Card.Body>*/}
      {/*                <Card.Footer>*/}
      {/*                    <Button className="donateButton">Donate Item</Button>*/}
      {/*                </Card.Footer>*/}
      {/*            </Card>*/}
      {/*        </Col>*/}
      {/*    </Row>*/}
      {/*</Container>*/}

      <Container className="donationContainer text-center mt-5">
        <Row>
          <h2 className="mainHeaders">Your Donation Makes a Difference</h2>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Image
              src={logo}
              alt="Piece of Clothing"
              className="startDonationAnimation"
            />
          </Col>
          <Col>
            <Image
              src={afterDonation}
              alt="Happy Emoji after Donation"
              className="afterDonationAnimation"
            />
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <Row className="text-center">
          <h2 className="mainHeaders">Ways to Donate</h2>
        </Row>
        <Row className="align-items-start mt-2">
          {/*<Col>*/}
          <ul className="list-group list-group list-group-horizontal-md list-group-numbered">
            <li className="list-group-item flex-fill">
              You may contribute monetary donations through this website, or
              contact us for our Venmo or Zelle information.
              <DonatePayPal />
            </li>
            <li className="list-group-item flex-fill">
              We also accept donations by mail. Contact us for mailing
              information.
            </li>
            <li className="list-group-item flex-fill">
              To arrange a pick-up/drop-off of clothing donations in or near
              Navajo Nation, please fill out contact form below.
            </li>
          </ul>
          {/*</Col>*/}
        </Row>
      </Container>
      <Container className="text-center mt-5">
        <Row>
          <h2 className="mainHeaders">Contact Form</h2>
        </Row>
      </Container>
      <ContactForm />
      <Container fluid className="customNavbar mt-3 py-2">
        <Row className="align-items-center text-center">
          <Col>
            <p>
              <a href="/privacyPolicy" class="text-reset">
                Privacy Policy
              </a>
            </p>
          </Col>
          <Col className="">
            <IconContext.Provider value={{ color: "#3b5998", size: "2em" }}>
              <a
                href="https://x.facebook.com/monsterslayerclothingbank/?_se_imp=0Im4wolt9gvlfpaYI"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
              </a>
            </IconContext.Provider>
          </Col>
          <Col>
            <p>
              <a href="/termsOfService" class="text-reset">
                Terms of Service
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
