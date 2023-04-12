import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ShopCart = ({ shopItems, addToCart }) => {
  // const [count, setCount] = useState(0);
  // const increment = () => {
  //   setCount(count + 1);
  // };

  const [producths, setProducths] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = axios.get("http://localhost:8070/api/producth");
        setProducths(res.data);
      } catch (err) {}
    };
    getProducts();
  });

  return (
    <>
      {shopItems.map((shopItems, index) => {
        return (
          <Link to="/singleProduct">
            <div key={shopItems.id} className="box  ">
              <div className="product  shopItem mtop">
                <div className="img shopImg">
                  <span className="discount">{shopItems.discount}% Off</span>
                  <img src={shopItems.cover} alt="" />
                  <div className="product-like">
                    {/* <label>{count}</label> <br /> */}
                    {/* <i className="fa-regular fa-heart" onClick={increment}></i> */}
                  </div>
                </div>
                <div className="product-details">
                  <h3>{shopItems.name}</h3>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="price">
                    <h4>Rs : {shopItems.price}.00 </h4>
                    <button onClick={() => addToCart(shopItems)}>
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default ShopCart;
