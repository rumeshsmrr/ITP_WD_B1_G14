import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const ShopCart = () => {
  // const [count, setCount] = useState(0);
  // const increment = () => {
  //   setCount(count + 1);
  // };
  const customer = useSelector((state) => state.customer.currentCustomer);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8070/api/producth")
      .then((response) => {
        console.log(response.data.name);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     try {
  //       const res = axios.get("api/producth");
  //       console.log(res);
  //       setProducts(res.data);
  //     } catch (err) {}
  //   };
  //   getProducts();
  // });
  // console.log(products);

  //  const handleAddToCart = async (productId) => {
  //    try {
  //      await axios.post("/api/cart", { productId, quantity: 1 });
  //      alert("Product added to cart");
  //    } catch (err) {
  //      console.error(err);
  //      alert("Error adding product to cart");
  //    }
  // };

  const handelAddToCart = async (cusId, proId, proName, proCover, proPrice) => {
    try {
      await axios.post("http://localhost:8070/api/cart/addToCart", {
        customerId: cusId,
        productId: proId,
        productName: proName,
        productCover: proCover,
        price: proPrice,
      });
      // alert("Product added to cart");
    } catch (err) {
      console.error(err);
      alert("Error adding product to cart");
    }
  };

  return (
    <>
      {products.map((shopItems) => {
        return (
          <div className="box  ">
            <div className="product  shopItem mtop">
              <div className="img shopImg">
                <span className="discount">{shopItems.discount}% Off</span>
                <Link to={`/singleProduct/${shopItems._id}`}>
                  <img src={`${shopItems.cover}`} alt="" />
                  {/* <div className="product-like"> */}
                  {/* <label>{count}</label> <br /> */}
                  {/* <i className="fa-regular fa-heart" onClick={increment}></i> */}
                  {/* </div> */}
                </Link>
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
                  <h4>Rs : {shopItems.price} </h4>
                  <button>
                    <i
                      className="fa fa-plus"
                      onClick={() =>
                        handelAddToCart(
                          customer._id,
                          shopItems._id,
                          shopItems.name,
                          shopItems.cover,
                          shopItems.price
                        )
                      }
                    ></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ShopCart;
