import React, { useState } from "react";
import "./App.css";

import Pages from "./pages/Pages";
// import Data from "./components/Data";
import Cart from "./common/Cart/Cart";

import Sdata from "./components/shops/Sdata";
import MyOrder from "./components/order.js/myOrder";
import CustomerSignIn from "./pages/CustomerSignIn/CustomerSignIn";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SingleProduct from "./components/singleProduct/SingleProduct";
import CusLogin from "./pages/CustomerSignIn/CusLogin";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";

function App() {
  //Step 1 :
  // const { productItems } = Data;
  // const { shopItems } = Sdata;

  // //Step 2 :
  // const [CartItem, setCartItem] = useState([]);

  // //Step 4 :
  // const addToCart = (product) => {
  //   const productExit = CartItem.find((item) => item.id === product.id);

  //   if (productExit) {
  //     setCartItem(
  //       CartItem.map((item) =>
  //         item.id === product.id
  //           ? { ...productExit, qty: productExit.qty + 1 }
  //           : item
  //       )
  //     );
  //   } else {
  //     setCartItem([...CartItem, { ...product, qty: 1 }]);
  //   }
  // };

  // // Stpe: 6
  // const decreaseQty = (product) => {
  //   const productExit = CartItem.find((item) => item.id === product.id);

  //   if (productExit.qty === 1) {
  //     setCartItem(CartItem.filter((item) => item.id !== product.id));
  //   } else {
  //     setCartItem(
  //       CartItem.map((item) =>
  //         item.id === product.id
  //           ? { ...productExit, qty: productExit.qty - 1 }
  //           : item
  //       )
  //     );
  //   }
  // };

  // //remove cart item
  // const removeCart = (product) => {
  //   setCartItem(CartItem.filter((item) => item.id !== product.id));
  // };

  const customer = useSelector((state) => state.customer.currentCustomer);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/myorder"
            exact
            element={
              <MyOrder
              // CartItem={CartItem}
              />
            }
          ></Route>
          <Route
            path="/"
            exact
            element={
              <Pages
              // shopItems={shopItems}
              // CartItem={CartItem}
              // addToCart={addToCart}
              />
            }
          ></Route>
          <Route
            path="/cart"
            exact
            element={
              <Cart
              // shopItems={shopItems}
              // CartItem={CartItem}
              // decreaseQty={decreaseQty}
              // removeCart={removeCart}
              // addToCart={addToCart}
              // setCartItem={setCartItem}
              />
            }
          ></Route>
          <Route
            path="/singleProduct/:id"
            exact
            element={<SingleProduct />}
          ></Route>
          <Route
            path="/customerSignIn"
            exact
            element={<CustomerSignIn />}
          ></Route>
          {/* <Provider> */}

          <Route
            path="/cusLogin"
            exact
            element={
              // <Provider store={store}>
              customer ? <Navigate replace to="/" /> : <CusLogin />
            }
          ></Route>
          {/* </Provider> */}
          <Route path="/adminAndEmployee" exact element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
