import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import { publicRequest } from "../../requestMethods";
import Navbar from "../../pages/poornaka/Navbar";
import Footer from "../../common/footer/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledDatePicker = styled(DatePicker)`
  width: 300px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const TableContainer = styled.div`
  margin-top: 32px;
  width: 100%;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
const TableHead = styled.thead`
  background-color: #d6f3ff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const TableHeaderCell = styled.th`
  padding: 20px;
  text-align: left;
  font-weight: bold;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableCell = styled.td`
  padding: 20px;
  border-bottom: 1px solid #ddd;
`;

const OrderReport = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [orders, setOrders] = useState([]);

  const fetchOrdersByMonth = async (year, month) => {
    const res = await publicRequest.get(`/order/orders/${year}/${month}`);
    console.log(res.data);
    setOrders(res.data);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    fetchOrdersByMonth(year, month);
  };

  //   return (
  //     <Container>
  //       <Title>Orders By Month</Title>
  //       <DatePicker
  //         selected={selectedDate}
  //         onChange={handleDateChange}
  //         dateFormat="MMMM yyyy"
  //         showMonthYearPicker
  //       />
  //       <TableContainer>
  //         <Table>
  //           <TableHead>
  //             <TableRow>
  //               <TableHeaderCell>Order ID</TableHeaderCell>
  //               <TableHeaderCell>Customer Name</TableHeaderCell>
  //               <TableHeaderCell>Order Date</TableHeaderCell>
  //               <TableHeaderCell>Order Total</TableHeaderCell>
  //             </TableRow>
  //           </TableHead>
  //           <TableBody>
  //             {orders.map((order) => (
  //               <TableRow key={order._id}>
  //                 <TableCell>{order.orderId}</TableCell>
  //                 <TableCell>{order.customerName}</TableCell>
  //                 <TableCell>{order.createdAt}</TableCell>
  //                 <TableCell>${order.total.toFixed(2)}</TableCell>
  //               </TableRow>
  //             ))}
  //           </TableBody>
  //         </Table>
  //       </TableContainer>
  //     </Container>
  //     );
  return (
    <>
      <Navbar />
      <section className="myOrder background" style={{ marginTop: "110px" }}>
        <div className="container d_flex">
          <div className="contentWidth">
            <div className="heading d_flex">
              <div className="heading-left row  f_flex">
                <h2>Order Reports</h2>
              </div>
            </div>
            <Container>
              <StyledDatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="MMMM yyyy"
                showMonthYearPicker
              />
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableHeaderCell>Order ID</TableHeaderCell>
                      <TableHeaderCell>Customer Name</TableHeaderCell>
                      <TableHeaderCell>Order Date</TableHeaderCell>
                      <TableHeaderCell>Order Total</TableHeaderCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order._id}>
                        <TableCell>{order.orderId}</TableCell>
                        <TableCell>{order.customerName}</TableCell>
                        <TableCell>{order.createdAt}</TableCell>
                        <TableCell>${order.total.toFixed(2)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Container>
          </div>
        </div>
      </section>
      <br></br>
      <Footer />
    </>
  );
};

export default OrderReport;
