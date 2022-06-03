import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import SliderCarousel from "./SliderCarousel";
import logo6 from "../../assets/img/logo6.svg";
import logo7 from "../../assets/img/logo7.svg";

const Slider = () => {
  return (
    <div className="slider">
      <Container>
        <Row>
          <Col md={4}>
            News Feed
            <Card>
              <Image src={logo6} />
              Marketplace
            </Card>
            <Card>
              <Image src={logo6} />
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <SliderCarousel />
            </Card>
            <Card>
              <SliderCarousel />
            </Card>
          </Col>
          <Col md={4}>
            form
            <Card>
              {" "}
              <Image src={logo7} />
            </Card>
            <Card>
              {" "}
              <Image src={logo6} />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Slider;
