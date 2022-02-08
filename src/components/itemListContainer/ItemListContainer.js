import { Container, Row } from "react-bootstrap";

import Item from "../item/Item";
import { useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";

const ItemListContainer = () => {
  const { id } = useParams();
  const { products } = useProducts();

  const filterProducts = products.filter(({ category }) => category === id);

  return (
    <Container>
      <Row>
        {!id &&
          products.map((product) => {
            <Item key={product.id} {...product} />;
          })}
        {id &&
          filterProducts.map((product) => {
            return <Item key={product.id} {...product} />;
          })}
      </Row>
    </Container>
  );
};

export default ItemListContainer;
