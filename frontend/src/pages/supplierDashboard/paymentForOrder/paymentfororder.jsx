import React, { useState } from "react";

import Footer from "../../../common/footer/Footer";
import "./paymeentfororder.css";
import Navbar from "../../poornaka/Navbar";

function PaymentForOrder({ CartItem }) {
  const [inputList, setInputList] = useState([
    { field1: "", field2: "", field3: "", field4: "" },
  ]);

  const handleinputchange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;

    // Calculate the full amount based on the entered values
    const itemPrice = parseFloat(list[index].field2) || 0;
    const quantity = parseFloat(list[index].field3) || 0;
    const fullAmount = itemPrice * quantity;
    list[index].field4 = fullAmount.toFixed(2);

    setInputList(list);

    // Calculate the final amount based on the updated full amounts
    const finalAmount = list.reduce(
      (total, item) => total + parseFloat(item.field4),
      0
    );
    setFinalAmount(finalAmount.toFixed(2));
  };

  const handleremove = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);

    // Calculate the final amount based on the updated item list
    const finalAmount = list.reduce(
      (total, item) => total + parseFloat(item.field4),
      0
    );
    setFinalAmount(finalAmount.toFixed(2));
  };

  const handleaddclick = () => {
    setInputList([
      ...inputList,
      { field1: "", field2: "", field3: "", field4: "" },
    ]);
  };

  const [finalAmount, setFinalAmount] = useState(0);
  const [reduction, setReduction] = useState(0);

  const handleDelayChange = (e) => {
    const delayDays = parseFloat(e.target.value);
    const reductionPercentage = delayDays * 2.5;
    const newFinalAmount =
      finalAmount - finalAmount * (reductionPercentage / 100);
    setReduction(reductionPercentage.toFixed(2));
    setFinalAmount(newFinalAmount.toFixed(2));
  };

  return (
    <>
      <Navbar />

      <div className="H_P_O_Topic" style={{ marginTop: "100px" }}>
        PAYMENT FOR ORDER
      </div>

      {/* shadow Boxes */}
      <div className="H_P_O_body">
        <div className="H_P_O_container">
          <div className="H_P_O_box1">
            <span></span>
            <div className="H_P_O_content">
              <div className="H_P_O_form">
                <div className="H_P_O_title">Welcome</div>
                <div className="H_P_O_subtitle">
                  Let's can you create payment for order
                </div>

                <form className="H_Pay_css">
                  {/* <div className="H_P_O_content"> */}
                  <div className="H_P_O_row">
                    <div className="H_P_O_col-sm-12">
                      <div class="H_P_O_input-container ic1">
                        <div class="H_P_O_form-group col-md-4">
                          <label>Supplier Registration Number</label>
                          <input
                            type="text"
                            name="regNumber"
                            class="H_P_O_form-control"
                            placeholder="Enter Supplier Registration Number"
                          />
                        </div>
                      </div>

                      <div class="H_P_O_input-container ic1">
                        <div class="H_P_O_form-group col-md-4">
                          <label>Supplier Name</label>
                          <input
                            type="text"
                            name="supName"
                            class="H_P_O_form-control"
                            placeholder="Enter Supplier Name"
                          />
                        </div>
                      </div>

                      <div class="H_P_O_input-container ic1">
                        <div class="H_P_O_form-group col-md-4">
                          <label>Date of Order</label>
                          <input
                            type="date"
                            name="orderDate"
                            class="H_P_O_form-control"
                          />
                        </div>
                      </div>

                      <div class="H_P_O_input-container ic1">
                        <div class="H_P_O_form-group col-md-4">
                          <label>Order Recived Date</label>
                          <input
                            type="date"
                            name="recivedDate"
                            class="H_P_O_form-control"
                          />
                        </div>
                      </div>

                      {/* <div class="H_A_input-container ic1">
                                  <div class="H_P_O_form-group col-md-4">
                                    <label >Number Of Delay</label>
                                      <input type="Number"  name="delayDate" class="form-control" />
                                  </div>
                          </div> */}

                      <br />
                      <br />
                      <br />

                      {inputList.map((x, i) => (
                        <div className="H_P_O_row mb-3" key={i}>
                          <div
                            className="H_P_O_form-group col-md-4"
                            style={{ maxWidth: "320px" }}
                          >
                            <label>Item Name</label>
                            <input
                              type="text"
                              name="field1"
                              className="H_P_O_form-control"
                              placeholder="Enter Item Name"
                              onChange={(e) => handleinputchange(e, i)}
                            />
                          </div>
                          <div
                            className="H_P_O_form-group col-md-4"
                            style={{ maxWidth: "320px" }}
                          >
                            <label>Unit Price</label>
                            <input
                              type="text"
                              name="field2"
                              className="H_P_O_form-control"
                              placeholder="Enter Unit Price"
                              onChange={(e) => handleinputchange(e, i)}
                            />
                          </div>
                          <div
                            className="H_P_O_form-group col-md-4"
                            style={{ maxWidth: "320px" }}
                          >
                            <label>Quantity</label>
                            <input
                              type="text"
                              name="field3"
                              className="H_P_O_form-control"
                              placeholder="Enter Quantity"
                              onChange={(e) => handleinputchange(e, i)}
                            />
                          </div>
                          <div
                            className="H_P_O_form-group col-md-4"
                            style={{ maxWidth: "320px" }}
                          >
                            <label>Amount</label>
                            <input
                              type="text"
                              name="field4"
                              className="H_P_O_form-control"
                              placeholder="Enter Full amount"
                              value={x.field4}
                              onChange={(e) => handleinputchange(e, i)}
                            />
                          </div>
                          <div
                            className="H_P_O_form-group col-md-2 mt-4"
                            style={{ maxWidth: "320px" }}
                          >
                            {inputList.length !== 1 && (
                              <button
                                className="H_P_O_btn btn-danger mx-1"
                                onClick={() => handleremove(i)}
                              >
                                Remove
                              </button>
                            )}
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            {inputList.length - 1 === i && (
                              <button
                                className="H_P_O_btn btn-success"
                                onClick={handleaddclick}
                              >
                                Add More
                              </button>
                            )}
                          </div>
                        </div>
                      ))}

                      <br />
                      <br />
                      <div class="H_P_O_input-container ic1">
                        <div class="H_P_O_form-group col-md-4">
                          <label>All Amount</label>
                          <input
                            type="text"
                            name="number"
                            class="H_P_O_form-control"
                            placeholder="Enter Final Amount"
                            value={inputList
                              .reduce(
                                (total, item) =>
                                  total + parseFloat(item.field4 || 0),
                                0
                              )
                              .toFixed(2)}
                            required
                          />
                        </div>
                      </div>

                      <div class="H_P_O_input-container ic1">
                        <div class="H_P_O_form-group col-md-4">
                          <label>Number Of Delay</label>
                          <input
                            type="Number"
                            name="delayDate"
                            class="H_P_O_form-control"
                            onChange={handleDelayChange}
                          />
                        </div>
                      </div>

                      <div class="H_P_O_input-container ic1">
                        <div class="H_P_O_form-group col-md-4">
                          <label>Reduction Percentage</label>
                          <input
                            type="text"
                            name="reduction"
                            class="H_P_O_form-control"
                            value={reduction + "%"}
                            disabled
                          />
                        </div>
                      </div>

                      <div class="H_P_O_input-container ic1">
                        <div class="H_P_O_form-group col-md-4">
                          <label>Final Amount</label>
                          <input
                            type="text"
                            name="finalAmount"
                            class="H_P_O_form-control"
                            value={"RS :" + finalAmount}
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <br />
                  <br />
                  {/* </div> */}

                  <div className="H_P_O_form-group">
                    <button
                      type="button"
                      className="H_P_O_btn_btn-primary_btn-lg"
                    >
                      SUMBIT
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PaymentForOrder;
