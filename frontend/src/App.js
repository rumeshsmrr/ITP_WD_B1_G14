import React, { useState } from "react";
import "./App.css";

import Pages from "./pages/Pages";
// import Data from "./components/Data";
import Cart from "./common/Cart/Cart";

import Sdata from "./components/shops/Sdata";
import MyOrder from "./components/order.js/myOrder";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleProduct from "./components/singleProduct/SingleProduct";

function App() {
  //Step 1 :
  // const { productItems } = Data;
  const { shopItems } = Sdata;

  //Step 2 :
  const [CartItem, setCartItem] = useState([]);

  //Step 4 :
  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);

    if (productExit) {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
  };

  // Stpe: 6
  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);

    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  //remove cart item
  const removeCart = (product) => {
    setCartItem(CartItem.filter((item) => item.id !== product.id));
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/myorder"
            exact
            element={<MyOrder CartItem={CartItem} />}
          ></Route>
          <Route
            path="/"
            exact
            element={
              <Pages
                shopItems={shopItems}
                CartItem={CartItem}
                addToCart={addToCart}
              />
            }
          ></Route>
          <Route
            path="/cart"
            exact
            element={
              <Cart
                shopItems={shopItems}
                CartItem={CartItem}
                decreaseQty={decreaseQty}
                removeCart={removeCart}
                addToCart={addToCart}
                setCartItem={setCartItem}
              />
            }
          ></Route>
          <Route
            path="/singleProduct"
            exact
            element={
              <SingleProduct CartItem={CartItem} addToCart={addToCart} />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
