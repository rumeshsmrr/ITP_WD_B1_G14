import React from "react";
import { useState } from "react";
import "./Product.css";
import cover from "../assets/images/flash/flash-1.png";
import Search from "../../common/header/Search";
import Navbar from "../../common/header/Navbar";
import Footer from "../../common/footer/Footer";

function SingleProduct({ CartItem, addToCart }) {
  const [product] = useState([
    {
      id: 1,
      cover: "shops-2.png",
      name: "Test1",
      price: "180",
      description: "The descritpion will be available here ",
      currency: "Rs",

      category: "RAM",
    },
  ]);

  return (
    <>
      <Search CartItem={CartItem} />
      <Navbar />
      {product.map((item) => (
        <div className="card-wrapper">
          <div className="card-product">
            <div className="product-imgs">
              <div className="img-display">
                <div className="img-showcase">
                  <img
                    src="https://res.cloudinary.com/daee4aeur/image/upload/v1681292048/flash-1_awwknq.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="product-content">
              <h2 className="product-title">{item.name}</h2>
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
                    Price : <span>Rs.{item.price}.00</span>
                  </p>
                </b>
              </div>

              <div className="product-detail">
                <h2>about this item: </h2>
                <p>{item.description}</p>

                <ul>
                  <li>
                    <b>Availablity:</b>{" "}
                    <span className="stock-level">
                      <b>IN STOCK</b>
                    </span>
                  </li>
                  <li>
                    <b>Category:</b> <span>{item.category}</span>
                  </li>
                </ul>
              </div>

              <div className="purchase-info">
                <button type="button" className="btn">
                  Add to Cart <i className="fas fa-shopping-cart"></i>
                </button>
                <button type="button" className="btn">
                  Buy Item
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </>
  );
}

export default SingleProduct;
