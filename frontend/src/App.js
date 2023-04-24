import React, { useState } from "react";
import "./App.css";

import Header from "./common/header/Header";
import Pages from "./pages/Pages";
// import Data from "./components/Data";
import Cart from "./common/Cart/Cart";
import Footer from "./common/footer/Footer";
import Sdata from "./components/shops/Sdata";
import MyOrder from "./components/order.js/myOrder";
// import CustomerSignIn from "./pages/CustomerSignIn/CustomerSignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
    // <>
    //   <Router>
    //     {/* <Header CartItem={CartItem} /> */}
    //     <Switch>
    //       <Route path="/" exact>
    //         <Pages
    //           // productItems={productItems}
    //           addToCart={addToCart}
    //           shopItems={shopItems}
    //         />
    //       </Route>
    //       <Route path="/cart" exact>
    //         <Cart
    //           CartItem={CartItem}
    //           addToCart={addToCart}
    //           decreaseQty={decreaseQty}
    //           removeCart={removeCart}
    //         />
    //       </Route>
    //       <Route path="/myorder" exact>
    //         <MyOrder />
    //       </Route>
    //       <Route path="/customerSignIn" exact>
    //         <CustomerSignIn />
    //       </Route>
    //     </Switch>
    //     <Footer />
    //   </Router>
    // </>
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

          
            <Route path="/supplier"
            exact
            element={<Dashboard CartItem={CartItem}/>}/>

            <Route path="/AddSupplier" 
            exact
            element={<AddSupplier CartItem={CartItem}/>}/>

            <Route path="/edit/:id" 
            exact
            element={<EditSupplier CartItem={CartItem}/>}/>

            <Route path="/AddSupplieritem" 
            exact
            element={<AddSupplierItems CartItem={CartItem}/>}/>

            <Route path="/edits/:id" 
            exact
            element={<EditSupplierItem CartItem={CartItem}/>}/>

            <Route path="/viewUniqueItem" 
            exact
            element={<SupplierUniqueItem CartItem={CartItem}/>}/>

            <Route path="/Purchasingitems" 
            exact
            element={<PurchasingItems CartItem={CartItem}/>}/>

            <Route path="/Paymentfororder" 
            exact
            element={<PaymentForOrder CartItem={CartItem}/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
