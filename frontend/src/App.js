import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Pages from "./pages/Pages";
// import Data from "./components/Data";
import Cart from "./common/Cart/Cart";
import Sdata from "./components/shops/Sdata";
import MyOrder from "./components/order.js/myOrder";
import CustomerSignIn from "./pages/CustomerSignIn/CustomerSignIn";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";
import CartError from "./common/Cart/CartError";
import CusLogin from "./pages/CustomerSignIn/CusLogin";
import SingleProduct from "./components/singleProduct/SingleProduct";

import Home from "./pages/poornaka/Home";
import AdminDashboard from "./pages/poornaka/AdminDashboard";
import AdminLogin from "./pages/poornaka/AdminLogin";
import EmployeeLogin from "./pages/poornaka/EmployeeLogin";
import EmployeeDashboard from "./pages/poornaka/EmployeeDashboard";
import AddUser from "./pages/poornaka/AddUser";
import EditUser from "./pages/poornaka/EditUser";
import Profile from "./pages/poornaka/Profile";
import ViewAttendance from "./pages/poornaka/ViewAttendance";
import ProductForm from "./pages/romold/ProductForm";

import Dashboard from "./pages/supplierDashboard/dashboard";
import AddSupplier from "./pages/supplierDashboard/addSupplier/addsupplier";
import EditSupplier from "./pages/supplierDashboard/editSupplier/editsupplier";
import AddSupplierItems from "./pages/supplierDashboard/addSupplierItems/addsupplieritems";
import EditSupplierItem from "./pages/supplierDashboard/editSupplierItems/editsupplieritems";
import PurchasingItems from "./pages/supplierDashboard/purchasingItems/addOrderItem";
import PaymentForOrder from "./pages/supplierDashboard/paymentForOrder/paymentfororder";
import SupplierUniqueItem from "./pages/supplierDashboard/addSupplierItems/supplierQuniqueItem";
import AllOrder from "./components/rumesh/allOrder";
import ProductEditDelete from "./pages/romold/ProductEditDelete";
import PurchaseSheet from "./pages/supplierDashboard/purchesOrderList/purchasOrdelist";

function App() {
  const customer = useSelector((state) => state.customer.currentCustomer);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/myorder" exact element={<MyOrder />}></Route>
          <Route path="/" exact element={<Pages />}></Route>

          <Route
            path="/cart"
            exact
            element={customer ? <Cart /> : <CartError />}
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

          <Route
            path="/cusLogin"
            exact
            element={customer ? <Navigate replace to="/" /> : <CusLogin />}
          ></Route>
          <Route path="/allOrder" exact element={<AllOrder />}></Route>

          {/* poornaka */}
          <Route path="/adminAndEmployee" exact element={<Home />} />
          <Route path="/admin" exact element={<AdminLogin />} />
          <Route path="/adminDashboard" exact element={<AdminDashboard />} />
          <Route path="/employee" exact element={<EmployeeLogin />} />
          <Route
            path="/employeeDashboard"
            exact
            element={<EmployeeDashboard />}
          />
          <Route path="addUser" exact element={<AddUser />} />
          <Route path="editUser" exact element={<EditUser />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/viewAttendance" exact element={<ViewAttendance />} />

          {/* romold */}
          <Route path="/createProduct" exact element={<ProductForm />} />

          <Route path="/supplier" exact element={<Dashboard />} />

          <Route path="/AddSupplier" exact element={<AddSupplier />} />

          <Route path="/edit/:id" exact element={<EditSupplier />} />

          <Route path="/AddSupplieritem" exact element={<AddSupplierItems />} />

          <Route path="/edits/:id" exact element={<EditSupplierItem />} />
          <Route path="/productEdit" exact element={<ProductEditDelete />} />

          <Route
            path="/viewUniqueItem"
            exact
            element={<SupplierUniqueItem />}
          />

          <Route path="/Purchasingitems" exact element={<PurchasingItems />} />

          <Route path="/Paymentfororder" exact element={<PaymentForOrder />} />
          <Route path="/purchaseSheet" exact element={<PurchaseSheet />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
