import React from "react";
import { Button, Form } from "react-bootstrap";

const Send = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control type="email" placeholder="Yorum Yaz" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Send
      </Button>
    </Form>
  );
};

export default Send;
