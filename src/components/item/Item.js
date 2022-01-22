import { Button, Card, Col } from "react-bootstrap";

import { HeartFill } from "react-bootstrap-icons";
import React from "react";

const Item = ({ id, name, price, setSelectedItem, setFavoriteItem }) => {
  const selectItem = () => setSelectedItem({ id, name, price });
  const favoriteItem = () => setFavoriteItem({ id, name, price });
  return (
    <Col className="mt-4">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>$ {price}</Card.Text>
          <Button variant="outline-dark" onClick={selectItem}>
            Ver más
          </Button>
          <Button
            className="ms-1"
            variant="outline-danger"
            onClick={favoriteItem}
          >
            <HeartFill />
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Item;
