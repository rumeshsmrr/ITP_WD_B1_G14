import React, {useState, useEffect} from 'react'
import axios from "axios";
// import { Link } from 'react-router-dom';

import "./addOrderItem.css"
import Footer from "../../../common/footer/Footer"
import Navbar from "../../poornaka/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PurchasingItems = ({CartItem}) => {
    
    const [search, setSearch] = useState('')
    const [supitem, setSupitem] = useState([]);
    const [render, setRender] = useState(false)
    const [input,setInput] = useState({
        supRegNum: "",
        supName: "",
        itemName: "",
        itemdescription: "",
    });
   
    useEffect(()=>{
        const getAllData = async () => {
            const res = await axios.get("http://localhost:8070/api/v1/supitem");
            setSupitem(res.data);
        };
        getAllData();
    },[render]);

    const cartAddSuccess = () =>
    toast.success("🛒 Product Added to Pushacing List", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const cartAddError = () =>
    toast.error("🚨 Error adding product to Pushacing List", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

   


    const AddToOPurchasing = async (supname,itemName,itemId) => {
        try {
          await axios.post("http://localhost:8070/api/purchasing/", {
            productId:itemId,
            itemName:itemName,
            supName:supname
            
          });
        //   alert("Product added to purchasing");
          cartAddSuccess();
        } catch (err) {
          console.error(err);
        //   alert("Error adding product to purchasing");
          cartAddError();
        }
      };
    


    return (
        <>

        <Navbar/>

        <div className='H_A_I_Topic' style={{marginTop:"100px"}}>CREATE ORDER REPORT</div>
        
        <div class="H_A_I_search-container">
            <input className='H_A_I_search' onChange={(e) => setSearch(e.target.value)} placeholder='Search...'></input>
        </div>

        <div className='H_A_I_body'>

            <div className='H_A_I_box2'>
                <span></span>
                <div className='H_A_I_content'></div>

                
                <div className="H_A_I_col-md-6">
                    <table class="H_A_I_table">
                    <thead>
                        <tr>
                            {/* <th scope="col">ID</th> */}
                            <th scope="col">Rgistration Number:</th>
                            <th scope="col">Supplier Name:</th>
                            <th scope="col">Item Name:</th>
                            {/* <th scope="col">Item Price:</th> */}
                            <th scope="col">Item Description:</th>
                            <th scope="col"></th>
                            {/* <th scope="col">Delete</th> */}
                        </tr>
                    </thead>

                    <tbody>
                        {supitem.filter((supplier) => {
                            return search.toLowerCase() === ''
                            ? supplier
                            : supplier.supRegNum.toLowerCase().includes(search) || 
                            supplier.supName.toLowerCase().includes(search) || 
                            supplier.itemName.toLowerCase().includes(search);
                        })
                            .map((supplier) => (
                               
                                <tr key={supplier._id}>
                                    <td>{supplier.supRegNum}</td>
                                    <td>{supplier.supName}</td>
                                    <td>{supplier.itemName}</td>
                                    {/* <td>{supplier.itemPrice}</td> */}
                                    <td>{supplier.itemdescription}</td>

                                    <td>
                                        {/* <Link to = {`/edits/${supplier._id}`}> */}
                                        <button className="H_A_I_btn_btn-primary" 
                                            onClick={ ()=> AddToOPurchasing(
                                                supplier.supName,
                                                supplier.itemName,
                                                supplier._id
                                            )} >Add to Purchase</button>
                                        {/* </Link> */}
                                    </td>
                                
                                    {/* <td><button onClick={() => handelDelete(supplier._id)}
                                        className="H_A_I_btn_btn-danger">Delete</button></td> */}
                                
                                    {/* <td><button className='quniuebtn' onClick={() => UniqueSupplierItem(supplier._id)}> UniqueItem </button></td> */}

                                </tr>
                            ))
                        }
                    </tbody>
                    
                    </table>
                </div>
            </div>

            <ToastContainer />
        </div>


    <br/><br/>
    <Footer/>
    </>
    )
}
    
export default PurchasingItems