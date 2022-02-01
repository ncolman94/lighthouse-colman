import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

import Item from "../item/Item";
import { productsAPI } from "../../helpers/promises";

const ItemListContainer = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [favoriteItem, setFavoriteItem] = useState();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const result = await productsAPI;
      setProducts(result);
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
      console.log("Finalización del consumo de la API productsAPI");
    }
  };

  if (loading) {
    return <h1>Cargando...</h1>;
  }
  return (
    <Container>
      <Row>
        <Col>
          <h3>Producto seleccionado </h3>
          <p>{selectedItem && selectedItem.name}</p>
          <p>{selectedItem && selectedItem.description}</p>
          <p>ID: {selectedItem && selectedItem.id}</p>
          <p>STOCK seleccionado: {selectedItem && selectedItem.stock}</p>
        </Col>
        <Col>
          <h3>Producto favorito </h3>
          <p>{favoriteItem && favoriteItem.name}</p>
        </Col>
      </Row>
      <Row>
        {products.map((product) => (
          <Item
            key={product.id}
            {...product}
            setSelectedItem={setSelectedItem}
            setFavoriteItem={setFavoriteItem}
          />
        ))}
      </Row>
    </Container>
  );
};

export default ItemListContainer;
