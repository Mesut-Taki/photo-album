import { Container, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getComment } from "../../api/UserService";
import Send from "./Send";

const Comment = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getComment()
      .then((resp) => {
        setComments(resp.data);
      })
      .catch((err) => {
        console.log("hata olustu");
      });
  }, []);
  return (
    <Container>
      {comments.length > 0 &&
        comments.slice(0, 10).map(({ name, body, id }) => (
          <Card key={id} className="comment">
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{body}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      <Send />
    </Container>
  );
};

export default Comment;
