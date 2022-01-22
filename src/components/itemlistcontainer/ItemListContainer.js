import { Col, Container, Row } from "react-bootstrap";

import Item from "../item/Item";
import { useState } from "react";

const items = [
  { id: "1", name: "Ventisquero Negro", price: "2500" },
  { id: "2", name: "Valle de uco", price: "1300" },
  { id: "3", name: "Atacama", price: "1100" },
  { id: "4", name: "Mendoza", price: "600" },
];

const ItemListContainer = () => {
  const [selectedItem, setSelectedItem] = useState();
  const [favoriteItem, setFavoriteItem] = useState("");
  return (
    <Container>
      <Row>
        <Col>
          <h3>Producto seleccionado </h3>
          <p>{selectedItem ? selectedItem.name : "Ninguno"}</p>
        </Col>
        <Col>
          <h3>Producto favorito </h3>
          <p>{favoriteItem ? favoriteItem.name : "Ninguno"}</p>
        </Col>
      </Row>
      <Row>
        {items.map(({ id, name, price }) => (
          <Item
            key={id}
            id={id}
            name={name}
            price={price}
            setSelectedItem={setSelectedItem}
            setFavoriteItem={setFavoriteItem}
          />
        ))}
      </Row>
    </Container>
  );
};

export default ItemListContainer;
