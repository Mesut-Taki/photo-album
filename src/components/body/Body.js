import { Card, Col, Container, Row, Image } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { getAlbum } from "../../api/UserService";
import Albums from "./Albums";
import Comment from "./Comment";
import logo7 from "../../assets/img/logo7.svg";
import NewsFeed from "./NewsFeed";

const Body = () => {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    getAlbum()
      .then((resp) => {
        setAlbums(resp.data);
      })
      .catch((err) => {
        console.log("hata olustu");
      });
  }, []);
  return (
    <Container>
      <Row>
        <Col lg={3}>
          <NewsFeed />
          <Comment />
        </Col>
        <Col lg={6}>
          <Albums albums={albums} />
        </Col>
        <Col lg={3}>
          {" "}
          <Card>
            <h4>On Trending</h4> <Image src={logo7} />
            <h5 className="h5-6">Nothing to See Here!</h5>
            <h6 className="h5-6">Start with your priorities first.</h6>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Body;
