import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { FiFacebook } from "react-icons/fi";
import { IoLogoOctocat } from "react-icons/io";
import { GiBatMask } from "react-icons/gi";
import { FiSend } from "react-icons/fi";
import { AiFillInstagram } from "react-icons/ai";
import { FaFigma } from "react-icons/fa";

const Footer = () => {
  return (
    <Container className="footer">
      <Row>
        <Col lg={3}>
          <ul className="footer-li">
            <li>
              <h2>3gram</h2>
            </li>
            <p />
            <p />
            <li>
              High level experience in web design and development knowledge,
              producing quality work.
            </li>
            <li>
              <p />
            </li>
          </ul>
        </Col>
        <Col lg={3}>
          <ul className="footer-li">
            <li>
              <h2>Use Cases</h2>
            </li>
            <p />
            <p />
            <li>Web-designers</li>
            <li>
              <p />
            </li>
            <li>Small Business</li>
            <p />
            <li>Website Builder</li>
          </ul>
        </Col>

        <Col lg={3}>
          <ul className="footer-li">
            <li>
              <h2>Company</h2>
            </li>
            <p />
            <p />
            <li>About Us</li>
            <li>
              <p />
            </li>
            <li>Careers</li>
            <li>
              <p />
            </li>
            <li>FAQs</li>
            <li>
              <p />
            </li>
            <li>Teams</li>
            <li>
              <p />
            </li>
            <li>Contact Us</li>
          </ul>
        </Col>
        <Col lg={3}>
          <ul className="footer-li">
            <li>
              <h2>Follow us</h2>
            </li>
            <p />
            <p />
            <li>
              <FiFacebook /> <GiBatMask /> <IoLogoOctocat /> <FiSend />
              <AiFillInstagram /> <FaFigma />
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
