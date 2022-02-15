import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";

import Cart from "../components/cart/Cart";
import ItemDetailContainer from "../components/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../components/itemListContainer/ItemListContainer";
import NavBar from "../components/navbar/NavBar";
import NotFound from "../components/notFound/NotFound";
import React from "react";

const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
