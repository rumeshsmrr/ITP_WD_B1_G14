import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import { publicRequest } from "../../requestMethods";
import Navbar from "../../pages/poornaka/Navbar";
import Footer from "../../common/footer/Footer";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
// const StyledDatePicker = styled(DatePicker)`
//   width: 300px;
// `;

// const Title = styled.h1`
//   font-size: 24px;
//   font-weight: bold;
//   margin-bottom: 16px;
// `;

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

const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  width: 100%;
`;

const StyledDatePicker = styled(DatePicker)`
  width: 300px;
  margin-right: 16px;
`;

const StyledButton = styled.button`
  background-color: #67bae4;
  color: white;
  padding: 10px;
  text-align: center;
  align-content: center;
  border-radius: 5px;
  width: 200px;
`;

const MessageContainer = styled.div`
  background-color: #fcffb2;
  width: 100%;
  text-align: center;
  align-content: center;
  color: #c07f00;
  padding: 10px;
`;
const OrderReport = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [orders, setOrders] = useState([]);
  const [monthSelected, setMonthSelected] = useState(false);

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
    setMonthSelected(true);
  };

  const generatePDF = () => {
    const unit = "pt";
    const size = "A4";
    const orientation = "portrait";

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    const logoUrl =
      "https://res.cloudinary.com/daee4aeur/image/upload/v1684050441/Untitled-1_i5zhda.png";
    doc.addImage(logoUrl, "PNG", marginLeft, 10, 500, 60, null, null, 0, 10); // add image

    // doc.setFontSize(15);
    // const empty = "";
    const selMonth = selectedDate.getMonth() + 1;
    const selYear = selectedDate.getFullYear();
    const title = `Order Report of ${selMonth}/${selYear}`;
    const date = `Generated Date : ${new Date().toLocaleDateString()}`;
    const headers = [
      ["Customer Email", "Order Date", "Address", "Order Total", "Status"],
    ];

    const data = orders.map((order) => [
      order.customerEmail,
      order.createdAt.substring(0, 10),
      order.address,
      `Rs:${order.total.toFixed(2)}`,
      order.status,
    ]);

    let content = {
      startY: 130, // move down to avoid overlapping with the image
      head: headers,
      body: data,
    };

    // doc.text(empty, marginLeft, 70);
    doc.setFontSize(16);
    const titleWidth = doc.getTextWidth(title);
    const x = (doc.internal.pageSize.width - titleWidth) / 2;
    doc.text(title, x, 100); // Update the coordinates and add the 'align' property
    doc.setFontSize(11);
    doc.text(date, marginLeft, 120);
    doc.autoTable(content);
    doc.save(`orderReport-${selMonth}/${selYear}.pdf`);
  };

  return (
    <>
      <Navbar />
      <section className="myOrder background" style={{ marginTop: "110px" }}>
        <div className="container d_flex">
          <div className="contentWidth">
            <div className="heading d_flex">
              <div className="heading-left row  f_flex">
                <h2>Monthly Order Reports Generator</h2>
              </div>
            </div>

            <Container>
              <FiltersContainer>
                <div>
                  <StyledDatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="MMMM yyyy"
                    showMonthYearPicker
                  />
                </div>
                <div>
                  <StyledButton onClick={generatePDF}>
                    Download PDF
                  </StyledButton>
                </div>
              </FiltersContainer>
              {!monthSelected && (
                <MessageContainer>Please select a month.</MessageContainer>
              )}
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableHeaderCell>Customer Name</TableHeaderCell>
                      <TableHeaderCell>Customer Email</TableHeaderCell>
                      <TableHeaderCell>Order Date</TableHeaderCell>
                      <TableHeaderCell>Address</TableHeaderCell>
                      <TableHeaderCell>Order Total</TableHeaderCell>
                      <TableHeaderCell>Status</TableHeaderCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order._id}>
                        <TableCell>{order.customerName}</TableCell>
                        <TableCell>{order.customerEmail}</TableCell>
                        <TableCell>
                          {order.createdAt.substring(0, 10)}
                        </TableCell>
                        <TableCell>{order.address}</TableCell>
                        <TableCell>Rs:{order.total.toFixed(2)}</TableCell>
                        <TableCell>{order.status.toUpperCase()}</TableCell>
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
