import React from "react";

const myOrderCard = (props) => {
  return (
    <>
      <div className="box mtop">
        <div className="order main-info">
          <div className="orderNo">Order No: {props.id}</div>
          <div className="placeData">Placed data: {props.data}</div>
        </div>
        <div className="order secondary-info c_flex">
          <div className="img c_flex">
            <img className="smallImg" src={props.cover} alt=""></img>
            <div className="productName">{props.productName}</div>
          </div>
          <div className="address c_flex">
            <div className="order-subtitles">Address : </div>
            <div className="product-address">{props.address}</div>
          </div>

          <div className="qty c_flex">
            <div className="order-subtitles">quantity : </div>
            <div>{props.quantity}</div>
          </div>

          <div>{props.status}</div>
        </div>
      </div>
    </>
  );
};

export default myOrderCard;
