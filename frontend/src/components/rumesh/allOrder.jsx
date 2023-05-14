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

const StyledButton = styled.button`
  background-color: #67bae4;
  color: white;
  padding: 10px;
  text-align: center;
  align-content: center;
  border-radius: 5px;
  width: 200px;
`;
const CardContainer = styled.div`
  display: flex;
  // justify-content: space-between;
`;

const IncomeBox = styled.div`
  width: 200px;
  height: 80px;
  border-radius: 5px;
  background-color: #c9edff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #0f3460;
`;

const LastMonthIncome = styled(IncomeBox)`
  margin-right: 10px;
`;

const LastYearIncome = styled(IncomeBox)`
  margin-left: 10px;
`;

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
            <br></br>

            <CardContainer>
              <LastMonthIncome>
                <div style={{ fontWeight: "600" }}>Last Month Income</div>
                <div>Rs: {income.lastMonth}</div>
              </LastMonthIncome>
              <LastYearIncome>
                <div style={{ fontWeight: "600" }}>Last Year Income</div>
                <div>Rs: {income.lastYear}</div>
              </LastYearIncome>
              <div style={{ marginLeft: "20px" }}>
                <Link to={"/orderReport"}>
                  <StyledButton>GET REPORT</StyledButton>
                </Link>
              </div>
            </CardContainer>

            <div style={{ marginTop: "50px" }}>
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
