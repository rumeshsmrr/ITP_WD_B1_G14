import React, { useEffect, useState } from "react";
import MyOrderCard from "./myOrderCard";
import MyOrderData from "./MyOrderdata";
import "./myOrder.css";
import Search from "../../common/header/Search";
import Navbar from "../../common/header/Navbar";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../../requestMethods";
import { useSelector } from "react-redux";

const MyOrder = () => {
  const customer = useSelector((state) => state.customer.currentCustomer);
  const [orderData, setOrderData] = useState([]);

  // setOrderData(MyOrderData.orderItem);
  // console.log(orderData);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/order/find/" + customer._id);
        console.log(res.data);
        setOrderData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [customer._id]);
  console.log(orderData);
  return (
    <>
      <Search />
      <Navbar />
      <section className="myOrder background">
        <div className="container d_flex">
          <div className="contentWidth">
            <div className="heading d_flex">
              <div className="heading-left row  f_flex">
                <h2>My Orders</h2>
              </div>
            </div>
            {/* <div className="order-content">{cards}</div> */}
            {orderData.map((order) => {
              console.log("products", order.products[0].product);
              console.log("length", order.products.length);
              return (
                <>
                  <div className="box mtop">
                    <div className="order main-info d_flex">
                      <div className="orderNo">Order No: {order._id}</div>
                      <div className="placeData">
                        Placed data: {order.createdAt.substring(0, 10)}
                      </div>
                      <div className="address c_flex">
                        <div className="placeData">Address : </div>
                        <div className="product-address">{order.address}</div>
                      </div>
                      <div>{order.status.toUpperCase()}</div>
                    </div>
                    <div className="order secondary-info">
                      <table style={{ width: "100%" }}>
                        <thead
                          style={{
                            width: "100%",

                            alignItems: "center",
                            marginTop: "0px",
                            marginBottom: "20px",
                          }}
                        >
                          <tr>
                            <th style={{ width: "10%" }}></th>
                            <th style={{ width: "80%", textAlign: "left" }}>
                              Product
                            </th>
                            <th style={{ width: "10%", margin: "10px" }}>
                              Price{" "}
                            </th>
                            <th style={{ width: "10%" }}>Quantity</th>
                          </tr>
                        </thead>
                        <tbody>
                          {order.products.map((order) => (
                            <tr key={order._id}>
                              <th style={{ width: "10%" }}>
                                <img
                                  className="smallImg"
                                  src={order.product.cover}
                                  alt=""
                                />
                              </th>
                              <td style={{ width: "70%" }}>
                                {order.product.name}
                              </td>
                              <td
                                style={{
                                  width: "10%",
                                  margin: "10px",
                                  textAlign: "center",
                                }}
                              >
                                {order.product.price}
                              </td>
                              <td style={{ width: "10%", textAlign: "center" }}>
                                {order.quantity}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default MyOrder;
