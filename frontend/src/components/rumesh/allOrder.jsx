import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";
import Footer from "../../common/footer/Footer";
import AllOrderCards from "./allOrderCards";
import Navbar from "../../pages/poornaka/Navbar";
import { publicRequest } from "../../requestMethods";
import { Link } from "react-router-dom";

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

const AllOrder = () => {
  const customer = useSelector((state) => state.customer.currentCustomer);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState({});
  const [income, setIncome] = useState({});

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

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await publicRequest.get("/order/incomes");
        // console.log(res.data);
        setIncome(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getIncome();
  }, []);
  console.log("test");
  return (
    <>
      <Navbar />
      <section className="myOrder background" style={{ marginTop: "110px" }}>
        <div className="container d_flex">
          <div className="contentWidth">
            <div className="heading d_flex">
              <div className="heading-left row  f_flex">
                <h2>Order Management</h2>
              </div>
            </div>
            <div>Last Month Income : Rs: {income.lastMonth}</div>
            <div>Last Year Income : Rs: {income.lastYear} </div>
            <Link to={"/orderReport"}>
              <div>
                <button>Reports</button>{" "}
              </div>
            </Link>

            <div style={{ marginTop: "50px" }}>
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                {" "}
                Order Details
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
            </div>

            <AllOrderCards filters={filters} sort={sort} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AllOrder;
