import { Button, Card, Col } from "react-bootstrap";

import { HeartFill } from "react-bootstrap-icons";
import ItemCount from "../itemCount/ItemCount";
import React from "react";
import { useState } from "react";

const Item = ({
  id,
  name,
  description,
  stock,
  setSelectedItem,
  setFavoriteItem,
}) => {
  const [sotckSelected, setSotckSelected] = useState(0);
  const selectItem = () =>
    setSelectedItem({ id, name, description, stock: sotckSelected });
  const favoriteItem = () => setFavoriteItem({ id, name });
  return (
    <Col className="mt-4">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <ItemCount stock={stock} setSotckSelected={setSotckSelected} />
          <Button onClick={selectItem}>Seleccionar producto</Button>
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
