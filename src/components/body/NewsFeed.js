import React from "react";
import { Card, Col, Container } from "react-bootstrap";
import { BsNewspaper } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineAppstore } from "react-icons/ai";

const NewsFeed = () => {
  return (
    <Container>
      <Card>
        <Col>
          <ul className="footer-li">
            <li>
              <BsNewspaper />
              News Feed
            </li>
            <p />
            <li>
              <FiShoppingBag />
              Marketplace
            </li>
            <li>
              <p />
            </li>
            <li>
              <AiOutlineAppstore />
              Galery
            </li>
          </ul>
        </Col>
      </Card>
    </Container>
  );
};

export default NewsFeed;
