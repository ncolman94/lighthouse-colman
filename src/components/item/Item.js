import { Button, Card, Col } from "react-bootstrap";

import { HeartFill } from "react-bootstrap-icons";
import ItemCounter from "../itemCounter/ItemCounter";
import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";

const Item = ({ id, name, description, image, stock, setFavoriteItem }) => {
  const [stockSelected, setStockSelected] = useState(0);
  const favoriteItem = () => setFavoriteItem({ id, name });
  return (
    <Col className="mt-4 col-3">
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <ItemCounter stock={stock} setStockSelected={setStockSelected} />

          <Link to={`/item/${id}`}>
            {" "}
            <Button>Seleccionar producto</Button>
          </Link>

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
