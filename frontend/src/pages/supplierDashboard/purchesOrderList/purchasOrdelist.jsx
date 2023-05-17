import React, { useEffect, useState } from "react";
import { publicRequest } from "../../../requestMethods";
import Navbar from "../../poornaka/Navbar";
import Footer from "../../../common/footer/Footer";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

import jsPDF from "jspdf";
import "jspdf-autotable";

const PurchasOrderList = () => {
  const [purchaseItem, setPurchaseItem] = useState([]);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const getpurchaseItem = async () => {
      try {
        const res = await publicRequest.get("/purchasing/");
        console.log(res.data);
        setPurchaseItem(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getpurchaseItem();

    // Set the current date when the component mounts
    const date = new Date();
    setCurrentDate(date.toDateString());
  }, []);

  //increase quantity

  const increaseQty = async (productId) => {
    try {
      await axios.post("http://localhost:8070/api/purchasing/increaseQty", {
        productId: productId,
      });
      const res = await publicRequest.get("/purchasing/");
      // alert("increaced item");
      // console.log(response.data.cartItems);
      setPurchaseItem(res.data);

      // alert("Product quantity increased successfully!");
    } catch (err) {
      console.error(err);
      alert("Error increasing product quantity. Please try again.");
    }
  };

  //decrease quantity
  const descriceQty = async (productId, qty) => {
    if (qty === 1) {
      // const id = proId;
      // alert(
      //   "Item Should not be minus, If you doesn't need item you can Remove"
      // );
      oneItemAlert();
    } else {
      try {
        await axios.post("http://localhost:8070/api/purchasing/descrice", {
          productId: productId,
        });
        const res = await publicRequest.get("/purchasing/");
        // alert("increaced item");
        // console.log(response.data.cartItems);
        setPurchaseItem(res.data);

        // alert("Product quantity decreased successfully!");
      } catch (err) {
        console.error(err);
        alert("Error decreasing product quantity. Please try again.");
      }
    }
  };

  //clear all purchase items
  const clearAll = async () => {
    try {
      await axios.delete("http://localhost:8070/api/purchasing/clear");
      const res = await publicRequest.get("/purchasing/");
      // alert("increaced item");
      // console.log(response.data.cartItems);
      setPurchaseItem(res.data);
    } catch (err) {
      console.error(err);
      alert("Error in clearing cart");
    }
  };

  let count = 1;

  const oneItemAlert = () =>
    toast.warn("Quantity should not be minus", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  // //PDF Generate
  // function handlePdfGeneration() {
  //   const doc = new jsPDF();
  //   doc.autoTable({ html: "#my-table" });
  //   doc.save("example.pdf");
  // }

  // function handlePdfGeneration() {
  //   const doc = new jsPDF();

  //   const header = [["Supplier Name", "Item Name", "Quantity"]];

  //   const tableRows = [];

  //   let no = 0;

  //   purchaseItem.forEach((sup) => {
  //     no++;

  //     const data = [sup.supName, sup.itemName, sup.quantity];

  //     // push each tickcet's info into a row
  //     console.log("reportData", data);

  //     tableRows.push(data);
  //   });

  //   var img = new Image();
  //   img.src =
  //     "https://res.cloudinary.com/dkf222zei/image/upload/v1682132775/logoBrandLarge_qpfl2q.png";
  //   doc.addImage(img, "jpg", 30, 3, 150, 30);

  //   //doc.autoTable(tableColumn, tableRows, { startY: 70 });

  //   doc.autoTable({
  //     head: header,
  //     body: tableRows,
  //     startY: 70,
  //   });

  //   doc.save("SupplierDetails.pdf");
  //   clearAll();
  // }

  function handlePdfGeneration() {
    const doc = new jsPDF();

    const currentDate = new Date().toLocaleDateString();

    const header = [["Supplier Name", "Item Name", "Quantity"]];

    const tableRows = [];

    let no = 0;

    purchaseItem.forEach((sup) => {
      no++;

      const data = [sup.supName, sup.itemName, sup.quantity];

      // push each ticket's info into a row
      console.log("reportData", data);

      tableRows.push(data);
    });

    var img = new Image();
    img.src =
      "https://res.cloudinary.com/dkf222zei/image/upload/v1682132775/logoBrandLarge_qpfl2q.png";
    doc.addImage(img, "jpg", 30, 3, 150, 30);

    doc.setFontSize(20);
    const title = "Purchase Order Report";
    const titleWidth = doc.getTextWidth(title);
    const x = (doc.internal.pageSize.width - titleWidth) / 2; // center the title
    doc.text(title, x, 50);

    doc.setFontSize(12);
    doc.text(`Date : ${currentDate}`, 14, 65);

    doc.autoTable({
      head: header,
      body: tableRows,
      startY: 80,
    });

    doc.save("PurchaseOrder.pdf");
    clearAll();
  }

  return (
    <>
      <Navbar />

      <div className="H_A_I_Topic" style={{ marginTop: "100px" }}>
        CREATE PURCHASING REPORT
      </div>

      <div class="H_A_I_search-container">
        {/* <input
          className="H_A_I_search"
          // set
          placeholder="Search..."
        ></input> */}
      </div>

      <div className="H_A_I_body">
        <div className="H_A_I_box2">
          <br />
          <span style={{ fontWeight: "600" }}>
            Created data : {currentDate}
          </span>
          <div className="H_A_I_content"></div>

          <div className="H_A_I_col-md-6">
            <>{/* <h1>{date}</h1> */}</>
            <table class="H_A_I_table">
              <thead>
                <tr>
                  {/* <th scope="col">ID</th> */}
                  <th scope="col">No</th>
                  <th scope="col">Supplier Name</th>
                  <th scope="col">Item Name</th>
                  <th scope="col">Quantity</th>
                  {/* <th scope="col">Item Description:</th> */}
                  <th scope="col"></th>
                  {/* <th scope="col">Delete</th> */}
                </tr>
              </thead>

              <tbody>
                {purchaseItem
                  // .filter((supplier) => {
                  //   return search.toLowerCase() === ""
                  //     ? supplier
                  //     : supplier.supRegNum.toLowerCase().includes(search) ||
                  //         supplier.supName.toLowerCase().includes(search) ||
                  //         supplier.itemName.toLowerCase().includes(search);
                  // })
                  .map((supplier) => (
                    <tr key={supplier._id}>
                      <td>PON0023{count++}</td>
                      <td>{supplier.supName}</td>
                      <td>{supplier.itemName}</td>
                      <td>{supplier.quantity}</td>
                      {/* <td>{supplier.itemPrice}</td> */}

                      <td>
                        <div
                          className="cartControl d_flex"
                          style={{ marginTop: "-5px" }}
                        >
                          <button
                            className="incCart"
                            onClick={() => increaseQty(supplier.productId)}
                          >
                            <i className="fa-solid fa-plus"></i>
                          </button>
                          <button
                            className="desCart"
                            onClick={() =>
                              descriceQty(supplier.productId, supplier.quantity)
                            }
                          >
                            <i className="fa-solid fa-minus"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <br />
        </div>
      </div>
      {/* <button
        className="H_A_I_btn_btn-primary"
        style={{ alignItems: "center", textAlign: "center" }}
        onClick={() => clearAll()}
      >
        Clear all
      </button> */}

      {/* <button
        className="H_A_I_btn_btn-primary"
        style={{ alignItems: "center", textAlign: "center" }}
      >
        Generate Report
      </button> */}

      <button type="submit" class="H_A_Genarate" onClick={handlePdfGeneration}>
        Generate PDF
      </button>

      <ToastContainer />

      <br />
      <br />
      <Footer />
    </>
  );
};

export default PurchasOrderList;
