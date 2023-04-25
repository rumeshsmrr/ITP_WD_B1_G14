// import React, { useState } from "react";
// import axios from "axios";

// import Footer from "../../../common/footer/Footer"
// import Nav from "../../../common/header/Navbar"
// import Search from "../../../common/header/Search"
// import './paymeentfororder.css'

// function PaymentForOrder({CartItem}) {

//   const [input, setInput] = useState({
//     supRegNum: "",
//     supName: "",
//     orderDate: "",
//     orderReceiveDate: "",
//     purchaseItem: {
//       itemName: "",
//       unitPrice: "",
//       quantity: "",
//       amount: "",
//     },
//     allAmount: "",
//     delayDate: "",
//     delayPercentage: "",
//     finalAmount: "",
//   });

//   const [render, setRender] = useState(false);

//   const handelSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post("http://localhost:8070/api/v1/purchase/purchaseOrderPost", input);
//     setRender(true);
//     setInput({
//       supRegNum: "",
//       supName: "",
//       orderDate: "",
//       orderReceiveDate: "",
//       purchaseItem: {
//         itemName: "",
//         unitPrice: "",
//         quantity: "",
//         amount: "",
//       },
//       allAmount: "",
//       delayDate: "",
//       delayPercentage: "",
//       finalAmount: "",
//     });
//   };

//   const [inputList, setInputList] = useState([{ name:'', uprice:'', qty:'', amount:'' }]);

//   const handleinputchange = (e, index) => {
//     const { name, value } = e.target;
//     const list = [...inputList];
//     list[index][name] = value;

//     // Calculate the full amount based on the entered values
//     const itemPrice = parseFloat(list[index].uprice) || 0;
//     const quantity = parseFloat(list[index].qty) || 0;
//     const fullAmount = itemPrice * quantity;
//     list[index].amount = fullAmount.toFixed(2);

//     setInputList(list);

//     // Calculate the final amount based on the updated full amounts
//     const finalAmount = list.reduce((total, item) => total + parseFloat(item.amount), 0);
//     setFinalAmount(finalAmount.toFixed(2));
//   };

//   const handleremove = (index) => {
//     const list = [...inputList];
//     list.splice(index, 1);
//     setInputList(list);

//     // Calculate the final amount based on the updated item list
//     const finalAmount = list.reduce((total, item) => total + parseFloat(item.amount), 0);
//     setFinalAmount(finalAmount.toFixed(2));
//   }

//   const handleaddclick = () => { 
//     setInputList([...inputList, { name:'', uprice:'', qty:'', amount:'' }]);
//   }

//   const [finalAmount, setFinalAmount] = useState(0);
//   const [reduction, setReduction] = useState(0);

//   const handleDelayChange = (e) => {
//     const delayDays = parseFloat(e.target.value);
//     const reductionPercentage = delayDays * 2.5;
//     const newFinalAmount = finalAmount - finalAmount * (reductionPercentage / 100);
//     setReduction(reductionPercentage.toFixed(2));
//     setFinalAmount(newFinalAmount.toFixed(2));
//   };




//   return (
//     <>
//       <Search CartItem={CartItem}/>
//       <Nav/>

//       <div className='H_A_Topic'>PAYMENT FOR ORDER</div>

//       {/* shadow Boxes */}
//       <div className='H_P_O_body'>
//         <div className='H_P_O_container'>
//           <div className='H_P_O_box1'>
//             <span></span>
//             <div className='H_P_O_content'>
//               <div className="H_P_O_form">
//                 <div className="H_P_O_title">Welcome</div>
//                 <div className="H_P_O_subtitle">Let's can you create payment for order</div>


//                     <form onSubmit={handelSubmit}> 
//                       {/* <div className="H_P_O_content"> */}
//                         <div className="H_P_O_row">
//                           <div className="H_P_O_col-sm-12">

//                           <div class="H_A_input-container ic1">
//                                   <div class="H_P_O_form-group col-md-4">
//                                     <label >Supplier Registration Number</label>
//                                       <input type="text"  name="regNumber" class="form-control"  placeholder="Enter Supplier Registration Number" />
//                                   </div>
//                           </div>

//                           <div class="H_A_input-container ic1">
//                                   <div class="H_P_O_form-group col-md-4">
//                                     <label >Supplier Name</label>
//                                       <input type="text"  name="supName" class="form-control"  placeholder="Enter Supplier Name" />
//                                   </div>
//                           </div>

//                           <div class="H_A_input-container ic1">
//                                   <div class="H_P_O_form-group col-md-4">
//                                     <label >Date of Order</label>
//                                       <input type="date"  name="orderDate" class="form-control" />
//                                   </div>
//                           </div>

//                           <div class="H_A_input-container ic1">
//                                   <div class="H_P_O_form-group col-md-4">
//                                     <label >Order Recived Date</label>
//                                       <input type="date"  name="recivedDate" class="form-control" />
//                                   </div>
//                           </div>

//                           {/* <div class="H_A_input-container ic1">
//                                   <div class="H_P_O_form-group col-md-4">
//                                     <label >Number Of Delay</label>
//                                       <input type="Number"  name="delayDate" class="form-control" />
//                                   </div>
//                           </div> */}

//                           <br/><br/><br/><br/><br/>

//                           <table>
//   <thead>
//     <tr>
//       <th>Item Name</th>
//       <th>Unit Price</th>
//       <th>Quantity</th>
//       <th>Amount</th>
//       <th>Action</th>
//     </tr>
//   </thead><br/><br/>
//   <tbody>
//     {inputList.map((x, i) => (
//       <tr key={i}>
//         <td>
//           <input
//             type="text"
//             name="name"
//             className="form-control"
//             placeholder="Enter Item Name"
//             onChange={(e) => handleinputchange(e, i)}
//           />
//         </td>
//         <td>
//           <input
//             type="text"
//             name="uprice"
//             className="form-control"
//             placeholder="Enter Unit Price"
//             onChange={(e) => handleinputchange(e, i)}
//           />
//         </td>
//         <td>
//           <input
//             type="text"
//             name="qty"
//             className="form-control"
//             placeholder="Enter Quantity"
//             onChange={(e) => handleinputchange(e, i)}
//           />
//         </td>
//         <td>
//           <input
//             type="text"
//             name="amount"
//             className="form-control"
//             placeholder="Enter Full amount"
//             value={x.amount}
//             onChange={(e) => handleinputchange(e, i)}
//           />
//         </td>
//         <td>
//           {inputList.length !== 1 && (
//             <button
//               className="H_P_O_btn btn-danger mx-1"
//               onClick={() => handleremove(i)}
//             >
//               Remove
//             </button>
//           )}
//           {inputList.length - 1 === i && (
//             <button
//               className="H_P_O_btn btn-success"
//               onClick={handleaddclick}
//             >
//               Add More
//             </button>
//           )}
//         </td>
//       </tr>
//     ))}
//   </tbody>
// </table>





//                                 <br/><br/>
//                                   <div class="H_A_input-container ic1">
//                                     <div class="H_P_O_form-group col-md-4">
//                                     <label >All Amount</label>
//                                       <input type="text"  
//                                       name="number" class="form-control"  
//                                       placeholder="Enter Final Amount" 
//                                       value={inputList.reduce((total, item) => total + parseFloat(item.field4 || 0), 0).toFixed(2)} 
//                                       required/>
//                                     </div>
//                                   </div>


//                                   <div class="H_A_input-container ic1">
//                                       <div class="H_P_O_form-group col-md-4">
//                                         <label>Number Of Delay</label>
//                                         <input type="Number" name="delayDate" class="form-control" onChange={handleDelayChange} />
//                                       </div>
//                                     </div>

//                                     <div class="H_A_input-container ic1">
//                                       <div class="H_P_O_form-group col-md-4">
//                                         <label>Reduction Percentage</label>
//                                         <input type="text" name="reduction" class="form-control" value={reduction + '%'} disabled />
//                                       </div>
//                                     </div>

//                                     <div class="H_A_input-container ic1">
//                                       <div class="H_P_O_form-group col-md-4">
//                                         <label>Final Amount</label>
//                                         <input type="text" name="finalAmount" class="form-control" value={'RS :' + finalAmount} disabled />
//                                       </div>
//                                     </div>


//                     </div>
//                         </div><br/><br/><br/>
//                       {/* </div> */}

//                         <button type="button"  className="btn btn-primary btn-lg">Submit</button>


//                     </form>
//                 </div>

//                 </div>
//             </div>

//         </div>


//     </div>
//         <Footer/>
//     </>
    
//   );
// }
// export default PaymentForOrder;


//                                 {/* { 
//                                 inputList.map( (x,i)=>{
//                                   return(

//                                   <div className="H_P_O_row mb-3">

                                 
//                                     <div class="H_P_O_form-group col-md-4">
//                                     <label >Item Name</label>
//                                       <input type="text"  name="field1" class="form-control"  placeholder="Enter Item Name" onChange={ e=>handleinputchange(e,i)} />
//                                   </div>
                                  

                                  
//                                   <div class="H_P_O_form-group col-md-4">
//                                   <label >Unit Price</label>
//                                       <input type="text"  name="field2" class="form-control"   placeholder="Enter Unit Price" onChange={ e=>handleinputchange(e,i) }/>
//                                   </div>
                               

                                  
                                  
//                                   <div class="H_P_O_form-group col-md-4">
//                                   <label >Quantity</label>
//                                       <input type="text"  name="field3" class="form-control"   placeholder="Enter Quantity" onChange={ e=>handleinputchange(e,i) }/>
//                                   </div>
                              


                                  
//                                   {/* <div class="H_P_O_form-group col-md-4">
//                                   <label >Full amount</label>
//                                       <input type="text"  name="field4" class="form-control"   placeholder="Enter Full amount" onChange={ e=>handleinputchange(e,i) }/>
//                                   </div> */}
                          

                                  
//                                   {/* <div class="H_P_O_form-group col-md-2 mt-4">
//                                   {
//                                       inputList.length!==1 &&
//                                       <button  className="H_P_O_btn btn-danger mx-1" onClick={()=> handleremove(i)}>Remove</button>
//                                   }
//                                   <br/><br/><br/><br/><br/>
//                                   { inputList.length-1===i &&
//                                   <button  className="H_P_O_btn btn-success" onClick={ handleaddclick}>Add More</button>
//                                   }
//                                   </div>
//                                 </div>
                            
//                                   );
//                                 } )}   */}


// ===============


import React, { useState} from "react";

import Footer from "../../../common/footer/Footer"
import './paymeentfororder.css'
import Navbar from '../../poornaka/Navbar'

function PaymentForOrder({CartItem}) {
  const [inputList, setInputList] = useState([{ field1:'', field2:'', field3:'', field4:'' }]);

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
    const finalAmount = list.reduce((total, item) => total + parseFloat(item.field4), 0);
    setFinalAmount(finalAmount.toFixed(2));
  };

  const handleremove = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);

    // Calculate the final amount based on the updated item list
    const finalAmount = list.reduce((total, item) => total + parseFloat(item.field4), 0);
    setFinalAmount(finalAmount.toFixed(2));
  }

  const handleaddclick = () => { 
    setInputList([...inputList, { field1:'', field2:'', field3:'', field4:'' }]);
  }

  const [finalAmount, setFinalAmount] = useState(0);
  const [reduction, setReduction] = useState(0);

  const handleDelayChange = (e) => {
    const delayDays = parseFloat(e.target.value);
    const reductionPercentage = delayDays * 2.5;
    const newFinalAmount = finalAmount - finalAmount * (reductionPercentage / 100);
    setReduction(reductionPercentage.toFixed(2));
    setFinalAmount(newFinalAmount.toFixed(2));
  };


  return (
    <>
      <Navbar/>

      <div className='H_A_Topic' style={{marginTop:"100px"}}>PAYMENT FOR ORDER</div>

      {/* shadow Boxes */}
      <div className='H_P_O_body'>
        <div className='H_P_O_container'>
          <div className='H_P_O_box1'>
            <span></span>
            <div className='H_P_O_content'>
              <div className="H_P_O_form">
                <div className="H_P_O_title">Welcome</div>
                <div className="H_P_O_subtitle">Let's can you create payment for order</div>


                    <form> 
                      {/* <div className="H_P_O_content"> */}
                        <div className="H_P_O_row">
                          <div className="H_P_O_col-sm-12">

                          <div class="H_A_input-container ic1">
                                  <div class="H_P_O_form-group col-md-4">
                                    <label >Supplier Registration Number</label>
                                      <input type="text"  name="regNumber" class="form-control"  placeholder="Enter Supplier Registration Number" />
                                  </div>
                          </div>

                          <div class="H_A_input-container ic1">
                                  <div class="H_P_O_form-group col-md-4">
                                    <label >Supplier Name</label>
                                      <input type="text"  name="supName" class="form-control"  placeholder="Enter Supplier Name" />
                                  </div>
                          </div>

                          <div class="H_A_input-container ic1">
                                  <div class="H_P_O_form-group col-md-4">
                                    <label >Date of Order</label>
                                      <input type="date"  name="orderDate" class="form-control" />
                                  </div>
                          </div>

                          <div class="H_A_input-container ic1">
                                  <div class="H_P_O_form-group col-md-4">
                                    <label >Order Recived Date</label>
                                      <input type="date"  name="recivedDate" class="form-control" />
                                  </div>
                          </div>

                          {/* <div class="H_A_input-container ic1">
                                  <div class="H_P_O_form-group col-md-4">
                                    <label >Number Of Delay</label>
                                      <input type="Number"  name="delayDate" class="form-control" />
                                  </div>
                          </div> */}

                          <br/><br/><br/>

                          {
                            inputList.map((x, i) => (
                              <div className="H_P_O_row mb-3" key={i}>
                                <div className="H_P_O_form-group col-md-4">
                                  <label>Item Name</label>
                                  <input
                                    type="text"
                                    name="field1"
                                    className="form-control"
                                    placeholder="Enter Item Name"
                                    onChange={(e) => handleinputchange(e, i)}
                                  />
                                </div>
                                <div className="H_P_O_form-group col-md-4">
                                  <label>Unit Price</label>
                                  <input
                                    type="text"
                                    name="field2"
                                    className="form-control"
                                    placeholder="Enter Unit Price"
                                    onChange={(e) => handleinputchange(e, i)}
                                  />
                                </div>
                                <div className="H_P_O_form-group col-md-4">
                                  <label>Quantity</label>
                                  <input
                                    type="text"
                                    name="field3"
                                    className="form-control"
                                    placeholder="Enter Quantity"
                                    onChange={(e) => handleinputchange(e, i)}
                                  />
                                </div>
                                <div className="H_P_O_form-group col-md-4">
                                  <label>Amount</label>
                                  <input
                                    type="text"
                                    name="field4"
                                    className="form-control"
                                    placeholder="Enter Full amount"
                                    value={x.field4}
                                    onChange={(e) => handleinputchange(e, i)}
                                  />
                                </div>
                                <div className="H_P_O_form-group col-md-2 mt-4">
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
                            ))
                          }



                                <br/><br/>
                                  <div class="H_A_input-container ic1">
                                    <div class="H_P_O_form-group col-md-4">
                                    <label >All Amount</label>
                                      <input type="text"  
                                      name="number" class="form-control"  
                                      placeholder="Enter Final Amount" 
                                      value={inputList.reduce((total, item) => total + parseFloat(item.field4 || 0), 0).toFixed(2)} 
                                      required/>
                                    </div>
                                  </div>


                                  <div class="H_A_input-container ic1">
                                      <div class="H_P_O_form-group col-md-4">
                                        <label>Number Of Delay</label>
                                        <input type="Number" name="delayDate" class="form-control" onChange={handleDelayChange} />
                                      </div>
                                    </div>

                                    <div class="H_A_input-container ic1">
                                      <div class="H_P_O_form-group col-md-4">
                                        <label>Reduction Percentage</label>
                                        <input type="text" name="reduction" class="form-control" value={reduction + '%'} disabled />
                                      </div>
                                    </div>

                                    <div class="H_A_input-container ic1">
                                      <div class="H_P_O_form-group col-md-4">
                                        <label>Final Amount</label>
                                        <input type="text" name="finalAmount" class="form-control" value={'RS :' + finalAmount} disabled />
                                      </div>
                                    </div>


                    </div>
                        </div><br/><br/><br/>
                      {/* </div> */}

                      <div className="form-group">
                        <button type="button"   className="btn btn-primary btn-lg">SUMBIT</button>
                      </div>

                  

                    </form>
                </div>

                </div>
            </div>

        </div>


    </div>
        <Footer/>
    </>
    
  ); 
}

export default PaymentForOrder;



