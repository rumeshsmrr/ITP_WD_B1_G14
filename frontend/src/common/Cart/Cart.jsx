import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Search from "../header/Search";
import Navbar from "../header/Navbar";
import Footer from "../footer/Footer";
import axios from "axios";
import { useSelector } from "react-redux";
import { publicRequest } from "../../requestMethods";
import NavbarLoged from "../header/NavbarLoged";

const Cart = () => {
  // Stpe: 7   calucate total of items

  // prodcut qty total

  const [cartItems, setCartItems] = useState([]);

  const customer = useSelector((state) => state.customer.currentCustomer);
  const cuId = customer._id;

  //fetch cart items
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/cart/" + cuId);
        // console.log(res.data.cartItems);
        setCartItems(res.data.cartItems);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [cuId]);

  //remove cart item

  const handelRemove = async (productId) => {
    const id = productId;
    try {
      await axios.delete("http://localhost:8070/api/cart/delete/" + id);
      const response = await publicRequest.get("/cart/" + cuId);
      // alert("removed item");
      // console.log(response.data.cartItems);
      setCartItems(response.data.cartItems);
    } catch (err) {
      console.error(err);
    }
  };

  //increase quantity

  const increaseQty = async (cusId, proId) => {
    try {
      await axios.post("http://localhost:8070/api/cart/increaseQty", {
        customerId: cusId,
        productId: proId,
      });
      const response = await publicRequest.get("/cart/" + cuId);
      // alert("removed item");
      // console.log(response.data.cartItems);
      setCartItems(response.data.cartItems);

      // alert("Product quantity increased successfully!");
    } catch (err) {
      console.error(err);
      alert("Error increasing product quantity. Please try again.");
    }
  };

  //decrease quantity
  const decreaseQty = async (cusId, proId, qty) => {
    if (qty === 1) {
      // const id = proId;
      alert(
        "Item Should not be minus, If you doesn't need item you can Remove"
      );
    } else {
      try {
        await axios.post("http://localhost:8070/api/cart/decreaseQty", {
          customerId: cusId,
          productId: proId,
        });
        const response = await publicRequest.get("/cart/" + cuId);
        setCartItems(response.data.cartItems);

        // alert("Product quantity decreased successfully!");
      } catch (err) {
        console.error(err);
        alert("Error decreasing product quantity. Please try again.");
      }
    }
  };

  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <>
      <Search />
      {/* <Navbar /> */}
      {customer ? <NavbarLoged /> : <Navbar />}

      <section className="cart-items">
        <div className="container d_flex">
          <div className="cart-details">
            {cartItems.length === 0 && (
              <h1 className="no-items product">No Items are add in Cart</h1>
            )}

            {cartItems.map((item) => {
              const productQty = item.price * item.quantity;

              return (
                <div className="cart-list product d_flex" key={item.productId}>
                  <div className="img">
                    <img src={item.productCover} alt="" />
                  </div>
                  <div className="cart-details">
                    <h3>{item.productName}</h3>
                    <h4>
                      ${item.price}.00 * {item.quantity}
                      <span>Rs: {productQty}.00</span>
                    </h4>
                  </div>
                  <div className="cart-items-function">
                    <div className="removeCart">
                      <button
                        className="removeCart"
                        // onClick={() => removeCart(item)}
                        onClick={() => handelRemove(item._id, cuId)}
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                    {/* stpe: 5 
                    product ko qty lai inc ra des garne
                    */}
                    <div className="cartControl d_flex">
                      <button
                        className="incCart"
                        onClick={() => increaseQty(cuId, item.productId)}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                      <button
                        className="desCart"
                        // onClick={() => decreaseQty(cuId, item.productId)}
                        onClick={() =>
                          decreaseQty(cuId, item.productId, item.quantity)
                        }
                      >
                        <i className="fa-solid fa-minus"></i>
                      </button>
                    </div>
                  </div>

                  <div className="cart-item-price"></div>
                </div>
              );
            })}
          </div>

          <div className="cart-total product">
            <h2>Cart Summary</h2>
            <div className=" d_flex">
              <h4>Total Price :</h4>
              <h3>Rs: {totalPrice}.00</h3>
            </div>
            <Link to="/customerSignIn">
              <div className="pay btn">
                <div>Processed Payment</div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cart;
