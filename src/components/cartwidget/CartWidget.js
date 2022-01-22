import { Cart } from "react-bootstrap-icons";
import { Nav } from "react-bootstrap";
import React from "react";

export default function CartWidget() {
  return (
    <Nav.Link href="#">
      <Cart />
    </Nav.Link>
  );
}
