import { Button, Card, Col } from "react-bootstrap";

import { HeartFill } from "react-bootstrap-icons";
import ItemCounter from "../ItemCounter/ItemCounter";
import React from "react";
import { useState } from "react";

const Item = ({
  id,
  name,
  description,
  image,
  stock,
  setSelectedItem,
  setFavoriteItem,
}) => {
  const [stockSelected, setStockSelected] = useState(0);
  const selectItem = () =>
    setSelectedItem({ id, name, description, image, stock: stockSelected });
  const favoriteItem = () => setFavoriteItem({ id, name });
  return (
    <Col className="mt-4">
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <ItemCounter stock={stock} setStockSelected={setStockSelected} />
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
