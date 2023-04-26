import React from "react";

const MyOrderCard = ({ order }) => {
  return (
    <>
      <div className="box mtop">
        <div className="order main-info d_flex">
          <div className="orderNo">Order No: {order._id}</div>
          <div className="placeData">
            Placed At: {order.createdAt.substring(0, 10)}
          </div>
          <div className="address c_flex">
            <div className="placeData">Address : </div>
            <div className="product-address">{order.address}</div>
          </div>
          <div>Total : Rs: {order.total}/=</div>
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
                <th style={{ width: "80%", textAlign: "left" }}>Product</th>

                <th style={{ width: "20%" }}>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {order.products.map((order) => (
                <tr key={order._id}>
                  <th style={{ width: "10%" }}>
                    <img
                      className="smallImg"
                      src={`/uploads/${order.over}`}
                      alt=""
                    />
                  </th>
                  <td style={{ width: "70%" }}>{order.productName}</td>
                  <td
                    style={{
                      width: "10%",
                      margin: "10px",
                      textAlign: "center",
                    }}
                  ></td>
                  <td style={{ width: "20%", textAlign: "center" }}>
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
};

export default MyOrderCard;
