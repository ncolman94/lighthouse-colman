import { Button, FormControl, InputGroup } from "react-bootstrap";
import React, { useContext, useEffect, useState } from "react";

import { CartContext } from "../../context/CartContext";
import ItemCounter from "../itemCounter/ItemCounter";
import { useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";

const ItemDetailContainer = () => {
  const { products } = useProducts();
  const { id } = useParams();
  const { addItem } = useContext(CartContext);

  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (products.length > 0) {
      const selectedProduct = products.find((product) => product.id === id);
      setSelectedItem(selectedProduct);
    }
  }, [products]);

  const handleAddToCart = () => {
    addItem({
      item: selectedItem,
      quantity,
    });
  };

  const handleUserName = (event) => {
    setUserName(event.target.value);
  };

  return (
    <div>
      <h3>Producto seleccionado</h3>
      {selectedItem && selectedItem.image && (
        <img src={selectedItem.image} alt="selectedItemImage" />
      )}
      <p>{selectedItem && selectedItem.name}</p>
      <p>{selectedItem && selectedItem.description}</p>
      <p>ID: {selectedItem && selectedItem.id}</p>
      <p>STOCK seleccionado: {selectedItem && selectedItem.stock}</p>
      <ItemCounter
        stock={selectedItem?.stock || 10}
        setStockSelected={setQuantity}
      />
      <InputGroup className="mb-3">
        <FormControl onChange={handleUserName} value={userName} />
        <Button variant="outline-success" onClick={handleAddToCart}>
          Agregar al carrito
        </Button>
      </InputGroup>
    </div>
  );
};

export default ItemDetailContainer;
