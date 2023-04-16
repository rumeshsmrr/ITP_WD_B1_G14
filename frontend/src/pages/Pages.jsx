import React from "react";
import Home from "../components/MainPage/Home";
// import FlashDeals from "../components/flashDeals/FlashDeals";
// import NewArrivals from "../components/newarrivals/NewArrivals";
// import Discount from "../components/discount/Discount";
import Shop from "../components/shops/Shop";
// import Annocument from "../components/annocument/Annocument";
import Wrapper from "../components/wrapper/Wrapper";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import Search from "../common/header/Search";
import Navbar from "../common/header/Navbar";

import { useSelector } from "react-redux";
import NavbarLoged from "../common/header/NavbarLoged";

const Pages = ({
  productItems,
  addToCart,
  CartItem,
  shopItems,
  setCartItem,
}) => {
  const customer = useSelector((state) => state.customer.currentCustomer);
  return (
    <>
      {/* <Header CartItem={CartItem} /> */}
      <Search />
      {customer ? <NavbarLoged /> : <Navbar />}

      <Home />
      <Shop />
      <Wrapper />
      <Footer />
    </>
  );
};

export default Pages;
