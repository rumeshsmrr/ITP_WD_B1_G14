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
import CartError from "./common/Cart/CartError";
import Dashboard from "./pages/supplierDashboard/dashboard";
import AddSupplier from "./pages/supplierDashboard/addSupplier/addsupplier";
import EditSupplier from "./pages/supplierDashboard/editSupplier/editsupplier";
import AddSupplierItems from "./pages/supplierDashboard/addSupplierItems/addsupplieritems";
import EditSupplierItem from "./pages/supplierDashboard/editSupplierItems/editsupplieritems";
import PurchasingItems from "./pages/supplierDashboard/purchasingItems/addOrderItem";
import PaymentForOrder from "./pages/supplierDashboard/paymentForOrder/paymentfororder";
import SupplierUniqueItem from "./pages/supplierDashboard/addSupplierItems/supplierQuniqueItem";


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
              // <Cart
              // // shopItems={shopItems}
              // // CartItem={CartItem}
              // // decreaseQty={decreaseQty}
              // // removeCart={removeCart}
              // // addToCart={addToCart}
              // // setCartItem={setCartItem}
              // />

              customer ? <Cart /> : <CartError />
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
          <Route path="/supplier"
            exact
            element={<Dashboard />}/>

            <Route path="/AddSupplier" 
            exact
            element={<AddSupplier />}/>

            <Route path="/edit/:id" 
            exact
            element={<EditSupplier />}/>

            <Route path="/AddSupplieritem" 
            exact
            element={<AddSupplierItems />}/>

            <Route path="/edits/:id" 
            exact
            element={<EditSupplierItem />}/>

            <Route path="/viewUniqueItem" 
            exact
            element={<SupplierUniqueItem />}/>

            <Route path="/Purchasingitems" 
            exact
            element={<PurchasingItems />}/>

            <Route path="/Paymentfororder" 
            exact
            element={<PaymentForOrder />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
