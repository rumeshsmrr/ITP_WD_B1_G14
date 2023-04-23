import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import MyOrderCard from "./myOrderCard";

import { publicRequest } from "../../requestMethods";

const MyOrderCards = ({ filters, sort }) => {
  const customer = useSelector((state) => state.customer.currentCustomer);
  const [orderData, setOrderData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // const status = filters.status;

  // console.log(status);
  console.log(sort);

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

  useEffect(() => {
    setFilteredProducts(
      filters.status === "All" || filters.status === null
        ? orderData
        : orderData.filter((item) =>
            Object.entries(filters).every(([key, value]) =>
              item[key].includes(value)
            )
          )
    );
  }, [orderData, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    } else if (sort === "oldest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      );
    } else if (sort === "lPrice") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.total - b.total)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.total - a.total)
      );
    }
  }, [sort]);

  // console.log(sortedOrders);

  return (
    <>
      {filteredProducts.map((order) => (
        <MyOrderCard order={order} key={order._id} />
      ))}
    </>
  );
};

export default MyOrderCards;
