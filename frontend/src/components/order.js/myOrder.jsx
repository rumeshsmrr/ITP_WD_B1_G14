import React, { useState } from "react";
import styled from "styled-components";
import "./myOrder.css";
import Search from "../../common/header/Search";
import Navbar from "../../common/header/Navbar";
// import { useLocation } from "react-router-dom";
// import { publicRequest } from "../../requestMethods";
// import { useSelector } from "react-redux";
import MyOrderCards from "./myOrderCards";

import { useSelector } from "react-redux";
import Footer from "../../common/footer/Footer";

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const MyOrder = () => {
  const customer = useSelector((state) => state.customer.currentCustomer);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("oldest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  // console.log(filters);
  // console.log(sort);

  // console.log(orderData);
  return (
    <>
      <Search />
      <Navbar />
      {customer ? (
        <section className="myOrder background">
          <div className="container d_flex">
            <div className="contentWidth">
              <div className="heading d_flex">
                <div className="heading-left row  f_flex">
                  <h2>My Orders</h2>
                </div>
              </div>
              <FilterContainer>
                <Filter>
                  <FilterText>Filter Orders:</FilterText>
                  <Select name="status" onChange={handleFilters}>
                    <Option disabled>Status</Option>
                    <Option>All</Option>
                    <Option>placed</Option>
                    <Option>processed</Option>
                    <Option>delivering</Option>
                    <Option>delivered</Option>
                  </Select>
                </Filter>
                <Filter>
                  <FilterText>Sort Orders:</FilterText>
                  <Select onChange={(e) => setSort(e.target.value)}>
                    <Option value="oldest">Oldest</Option>
                    <Option value="newest">Newest</Option>
                    <Option value="lPrice">Low Total</Option>
                    <Option value="hPrice">Hight Total</Option>
                  </Select>
                </Filter>
              </FilterContainer>
              <MyOrderCards filters={filters} sort={sort} />
            </div>
          </div>
        </section>
      ) : (
        <section className="cart-items">
          <div className="container d_flex">
            <div className=" cartError">
              <h1>Please login to see your Orders</h1>
            </div>
          </div>
        </section>
      )}
      <Footer />
    </>
  );
};

export default MyOrder;
