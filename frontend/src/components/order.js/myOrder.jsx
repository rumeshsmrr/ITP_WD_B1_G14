import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./myOrder.css";
import Search from "../../common/header/Search";
import Navbar from "../../common/header/Navbar";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../../requestMethods";
import { useSelector } from "react-redux";

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
  const [orderData, setOrderData] = useState([]);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  console.log(filters);
  console.log(sort);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/order/find/" + customer._id);

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
            <FilterContainer>
              <Filter>
                <FilterText>Filter Orders:</FilterText>
                <Select name="status" onChange={handleFilters}>
                  <Option disabled>All</Option>
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
                </Select>
              </Filter>
            </FilterContainer>

            {/* <div className="order-content">{cards}</div> */}
            {orderData.map((order) => {
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
