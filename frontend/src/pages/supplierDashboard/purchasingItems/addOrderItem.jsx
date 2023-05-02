import React, {useState, useEffect} from 'react'
// import axios from "axios";
// import { Link } from 'react-router-dom';

import "./addOrderItem.css"
import Footer from "../../../common/footer/Footer"
// import Nav from "../../../common/header/Navbar"
import Navbar from "../../poornaka/Navbar";

const PurchasingItems = ({CartItem}) => {
    // const [supitem, setSupitem] = useState([]);
    // const [render, setRender] = useState(false)
    // const [input,setInput] = useState({
    //     supRegNum: "",
    //     supName: "",
    //     itemName: "",
    //     itemPrice: "",
    //     itemdescription: "",
    // });
   
    // useEffect(()=>{
    //     const getAllData = async () => {
    //         const res = await axios.get("http://localhost:8070/api/v1/supitem");
    //         setSupitem(res.data);
    //     };
    //     getAllData();
    // },[render]);

    // const handelSubmit = async (e) => {
    //     e.preventDefault();
    //     await axios.post("http://localhost:7000/api/v1/supitem", input);
    //     setRender(true);
    //     setInput({
    //         supRegNum: "",
    //         supName: "",
    //         itemName: "",
    //         itemPrice: "",
    //         itemdescription: "",
    //     });
    // };

    // const handelDelete = async (id) => {
    //     await axios.delete(`http://localhost:7000/api/v1/supitem/${id}`);
    //     const newsupitem = supitem.filter((item) => {
    //         return item._id !== id;
    //     });
    //     setSupitem(newsupitem);
    // };

    return (
        <>

        <Navbar/>

        <div className='H_A_I_Topic' style={{marginTop:"100px"}}>CREATE ORDER REPORT</div>
        
        {/* <div className='H_A_I_body'>

        <div className='H_A_I_container'>

            <div className='H_A_I_box1'>
                <span></span>
                <div className='H_A_I_content'> */}

                {/* <div class="H_A_I_form">
                    <div class="H_A_I_title">Welcome</div>
                    <div class="H_A_I_subtitle">Let's can you add suppliers supply items in to the system!</div>

                    <form onSubmit={handelSubmit}>
                        <div class="H_A_I_input-container ic1">

                            <input id="regNumber" class="H_A_I_input" type="text" placeholder=" " 
                                name="supRegNum"
                                value = {input.supRegNum}
                                onChange={(e) =>
                                    setInput({...input, [e.target.name] : e.target.value})
                                }/>
                            <div class="H_A_I_cut"></div>
                            <label for="regNumber" class="H_A_I_placeholder">Supplie Rgistration Number</label>
                            
                        </div>

                        <div class="H_A_I_input-container ic2">
                            <input id="supname" class="H_A_I_input" type="text" placeholder=" " 
                                name="supName"
                                value = {input.supName}
                                onChange={(e) =>
                                    setInput({...input, [e.target.name] : e.target.value})
                                }/>
                            <div class="H_A_I_cut"></div>
                            <label for="supname" class="H_A_I_placeholder">Supplier Name</label>
                        </div>

                        <div class="H_A_I_input-container ic3">
                            <input id="itemName" class="H_A_I_input" type="text" placeholder=" " 
                                name="itemName"
                                value = {input.itemName}
                                onChange={(e) =>
                                     setInput({...input, [e.target.name] : e.target.value})
                                }/>
                            <div class="H_A_I_cut"></div>
                            <label for="itemName" class="H_A_I_placeholder">Item Name</label>
                        </div>

                        <div class="H_A_I_input-container ic4">
                            <input id="price" class="H_A_I_input" type="text" placeholder=" " 
                                name="itemPrice"
                                value = {input.itemPrice}
                                onChange={(e) =>
                                     setInput({...input, [e.target.name] : e.target.value})
                                }/>
                            <div class="H_A_I_cut"></div>
                            <label for="price" class="H_A_I_placeholder">Item Price</label>
                        </div>

                        <div class="H_A_I_input-container ic5">
                            <input id="descrip" class="H_A_I_input" type="text" placeholder=" " 
                                name="itemdescription"
                                value = {input.itemdescription}
                                onChange={(e) =>
                                     setInput({...input, [e.target.name] : e.target.value})
                                }/>
                            <div class="H_A_I_cut"></div>
                            <label for="descrip" class="H_A_I_placeholder">Item Description</label>
                        </div>


                        <button type="submit" class="H_A_I_submit">SUBMIT</button>

                    </form>
                </div> */}
            {/* </div>
            </div> */}

            {/* <div className='H_A_I_box2'>
                <span></span>
                <div className='H_A_I_content'></div>

                
                <div className="col-md-6">
                    <table class="table">
                    <thead>
                        <tr>
                            {/* <th scope="col">ID</th> */}
                            {/* <th scope="col">Supplie Rgistration Number</th>
                            <th scope="col">Supplier Name</th>
                            <th scope="col">Supplier Supply Item Name</th>
                            <th scope="col">Item Price</th>
                            <th scope="col">Item Description</th> */}
                            {/* <th scope="col"></th>
                            <th scope="col">Delete</th> */}
                        {/* </tr>
                    </thead>
                    <tbody> */}
                        {/* {supitem && supitem.map((supplier) => {
                            return(
                        <tr key={supplier._id}>
                            <td>{supplier.supRegNum}</td>
                            <td>{supplier.supName}</td>
                            <td>{supplier.itemName}</td>
                            <td>{supplier.itemPrice}</td>
                            <td>{supplier.itemdescription}</td>
                            
                        </tr> */}
                            {/* );
                        })}
                    </tbody>
                    </table>
                </div>
            </div> */}
        {/* </div> */}
    {/* // </div> */} */

    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <Footer/>
    </>
    )
}
    
export default PurchasingItems