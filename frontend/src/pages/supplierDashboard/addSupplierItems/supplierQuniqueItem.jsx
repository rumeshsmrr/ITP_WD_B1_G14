// import axios from "axios";
// import moment from "moment";
// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import "./supplierQuniueItem.css";

// export default function viewUniqueItems() {
//     //get state values
//     const { state } = useLocation();
//     const [supitem, setUniueItem] = useState();
//     const [loading, setLoading] = useState(false);
//     const supRegNum = state;
  
//     useEffect(() => {
//       try {
//         fetchUniueItem();
//       } catch (err) {
//         console.log(err);
//       }
//     }, []);
  
//     const fetchUniueItem = async () => {
//       try {
//         await axios.get(`api/v1/supitem/${supRegNum}`).then((res) => {
//             setUniueItem(res.data);
//           setLoading(true);
//         });
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     return (

//         <div>
//           {loading && (
//             <div className="container">
//               <div className="addUser-card">
//                 {console.log("att>>>>", supitem)}
//                 {supitem?.length === 0 ? (
//                   <h1>No attendance records found</h1>
//                 ) : (
//                   <table className="table">
//                     <thead>
//                       <tr>   
//                         <th scope="col">Supplie Rgistration Number:</th>
//                         <th scope="col">Supplier Name:</th>
//                         <th scope="col">Supplier Supply Item Name:</th>
//                         <th scope="col">Item Description:</th>
//                       </tr>
//                     </thead>

//                     <tbody>
//                         {supitem?.map((supplier) => {
//                             return(
//                         <tr key={supplier._id}>
//                             <td>{supplier.supRegNum}</td>
//                             <td>{supplier.supName}</td>
//                             <td>{supplier.itemName}</td>
//                             <td>{supplier.itemdescription}</td>

//                         </tr>
//                             );
//                         })}
//                     </tbody>

//                   </table>
//                 )}
//               </div>
//             </div>
//           )}
//         </div>
//       );
//     }
    

import axios from "axios";
// import moment from "moment";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./supplierQuniueItem.css";

import Footer from "../../../common/footer/Footer"

export default function SupplierUniqueItem() {
  const { state } = useLocation();
  const [uniqueItems, setUniqueItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const userID = state;

  useEffect(() => {
    try {
        fetchUniqueItems();
    } catch (err) {
      console.log(err);
    }
  }, []);


  const fetchUniqueItems = async () => {
    try {
    //   const res = await axios.get(`/api/v1/supitem/${supRegNum}`);
    await axios.get(`http://localhost:8070/api/v1/supitem/${userID}`).then((res) => {
      setUniqueItems(res.data);
      console.log(res.data)
      setLoading(true);
    });
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <>
    <div className='H_A_I_Topic'>UNIUE SUPPLIER SUPPLY ITEMS</div><br/><br/><br/><br/>
    

    <div >
     
      {loading && (
        <div className="container">
          <div className="uniqueItems-card">
          {console.log("att>>>>", uniqueItems)}
            {uniqueItems?.length === 0 ? (
              <h1>No uniqueItems records found</h1>
            ) : (
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Number</th>
                  <th scope="col">Supplier Registration Number:</th>
                  <th scope="col">Supplier Name:</th>
                  <th scope="col">Supplier Supply Item Name:</th>
                  <th scope="col">Item Description:</th>
                </tr>
              </thead>

              <tbody>
                  {uniqueItems?.map((data,index) => (
                    // <tr key={uniqueItem._id}>
                    <tr>
                    <th scope="row">{index + 1}</th>
                      <td>{data.supRegNum}</td>
                      <td>{data.supName}</td>
                      <td>{data.itemName}</td>
                      <td>{data.itemdescription}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
            )}
          </div>
        </div>
      )}
    </div><br/><br/><br/><br/><br/><br/>

    <Footer/>
    </>
  );
}
