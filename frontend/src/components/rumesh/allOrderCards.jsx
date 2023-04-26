import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import { publicRequest } from "../../requestMethods";
import AllOrderCard from "./allOrderCard";

const AllOrderCards = ({ filters, sort }) => {
  const [allOrder, setAllOrder] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // console.log(sort);

  useEffect(() => {
    const getAllOrders = async () => {
      try {
        const res = await publicRequest.get("/order/");
        console.log(res.data);
        setAllOrder(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllOrders();
  }, []);

  useEffect(() => {
    setFilteredProducts(
      filters.status === "All" || filters.status === null
        ? allOrder
        : allOrder.filter((item) =>
            Object.entries(filters).every(([key, value]) =>
              item[key].includes(value)
            )
          )
    );
  }, [allOrder, filters]);

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
        <AllOrderCard order={order} key={order._id} />
      ))}
    </>
  );
};

export default AllOrderCards;
