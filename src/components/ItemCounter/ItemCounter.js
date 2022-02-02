import { Button, FormControl, InputGroup } from "react-bootstrap";
import React, { useEffect, useState } from "react";

const ItemCounter = ({ stock, setStockSelected }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setStockSelected(counter);
  }, [counter]);

  const minusCounter = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
  };

  const plusCounter = () => {
    if (counter >= stock) return;
    setCounter(counter + 1);
  };

  return (
    <>
      <div>
        <InputGroup className="mb-3">
          <Button variant="outline-secondary" onClick={minusCounter}>
            -
          </Button>
          <FormControl placeholder={counter} />
          <Button variant="outline-secondary" onClick={plusCounter}>
            +
          </Button>
        </InputGroup>
      </div>
    </>
  );
};

export default ItemCounter;
