import React, { useEffect } from "react";
import { useState } from "react";
import "./Product.css";

import Search from "../../common/header/Search";
import Navbar from "../../common/header/Navbar";
import Footer from "../../common/footer/Footer";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { publicRequest } from "../../requestMethods";
import { useSelector } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SingleProduct() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});

  const cartAddSuccess = () =>
    toast.success("🛒 Product Added to cart", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const cartAddError = () =>
    toast.error("🚨 Error adding product to cart", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/producth/find/" + id);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  const customer = useSelector((state) => state.customer.currentCustomer);

  const handleAddToCart = async () => {
    try {
      await axios.post("http://localhost:8070/api/cart/addToCart", {
        customerId: customer._id,
        productId: product._id,
        productName: product.name,
        productCover: product.cover,
        price: product.price,
      });
      // alert("Product added to cart");
      cartAddSuccess();
    } catch (err) {
      console.error(err);
      // alert("Error adding product to cart");
      cartAddError();
    }
  };

  return (
    <>
      <Search />
      <Navbar />

      {/* {product.map((item) => ( */}
      <div className="card-wrapper">
        <div className="card-product">
          <div className="product-imgs">
            <div className="img-display">
              <div className="img-showcase">
                <img src={`${product.cover}`} alt="" />
              </div>
            </div>
          </div>

          <div className="product-content">
            <h2 className="product-title">{product.name}</h2>
            <div className="product-rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
              <span className="rating-num">4.7(21)</span>
            </div>

            <div className="product-price">
              <b>
                <p className="new-price">
                  Price : <span>Rs.{product.price}.00</span>
                </p>
              </b>
            </div>

            <div className="product-detail">
              <h2>about this item: </h2>
              <p>{product.description}</p>

              <ul>
                <li>
                  <b>Availablity:</b>{" "}
                  <span className="stock-level">
                    <b>IN STOCK</b>
                  </span>
                </li>
                <li>
                  <b>Category:</b> <span></span>
                </li>
              </ul>
            </div>

            <div className="purchase-info">
              <button type="button" className="btn" onClick={handleAddToCart}>
                Add to Cart <i className="fas fa-shopping-cart"></i>
              </button>
              <button type="button" className="btn">
                Buy Item
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      {/* ))} */}
      <Footer />
    </>
  );
}

export default SingleProduct;
