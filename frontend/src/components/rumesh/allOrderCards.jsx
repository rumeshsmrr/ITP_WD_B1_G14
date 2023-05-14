import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { publicRequest } from "../../requestMethods";
import AllOrderCard from "./allOrderCard";

const AllOrderCards = ({ filters, sort }) => {
  const [allOrder, setAllOrder] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getAllOrders = async () => {
      try {
        const res = await publicRequest.get("/order/");
        setAllOrder(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllOrders();
  }, []);

  useEffect(() => {
    let filteredOrders = allOrder;
    if (filters.status !== "All" && filters.status !== null) {
      filteredOrders = filteredOrders.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      );
    }
    if (searchTerm) {
      filteredOrders = filteredOrders.filter((item) =>
        item.products.some(
          (product) =>
            product.productName
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            item.customerEmail.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    setFilteredProducts(filteredOrders);
  }, [allOrder, filters, searchTerm]);

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

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search by product name or customer email"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {filteredProducts.map((order) => (
        <AllOrderCard order={order} key={order._id} />
      ))}
    </>
  );
};

export default AllOrderCards;
