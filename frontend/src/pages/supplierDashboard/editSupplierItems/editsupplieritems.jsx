import React, {useEffect, useState} from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';

import "./editsupplieritems.css"
import Footer from "../../../common/footer/Footer"
import Nav from "../../../common/header/Navbar"
import Search from "../../../common/header/Search"

const EditSupplierItem = ({CartItem}) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [input,setInput] = useState({
        supRegNum: "",
        supName: "",
        itemName: "",
        itemdescription: "",
    });

    useEffect(()=>{
        const getAllData = async () => {
            const res = await axios.get(`http://localhost:8070/api/v1/supitem/single/${id}`);
            setInput(res.data);
        };
        getAllData();
    },[id]);

    const handelEditData = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8070/api/v1/supitem/${id}`, input);
        navigate("/");
    }
  return (
    <>
    <Search CartItem={CartItem}/>
    <Nav/>


    <div className='H_A_I_E_Topic'>ADD SUPPLIERS SUPPLY ITEMS</div>
        
        <div className='H_A_I_E_body'>

        <div className='H_A_I_E_container'>

            <div className='H_A_I_E_box1'>
                <span></span>
                <div className='H_A_I_E_content'>

                <div class="H_A_I_E_form">
                    <div class="H_A_I_E_title">Welcome</div>
                    <div class="H_A_I_E_subtitle">Let's can you add suppliers supply items in to the system!</div>

                    <form onSubmit={handelEditData}>
                        <div class="H_A_I_E_input-container ic1">

                            <input id="regNumber" class="H_A_I_E_input" type="text" placeholder=" " 
                                name="supRegNum"
                                value = {input.supRegNum}
                                onChange={(e) =>
                                    setInput({...input, [e.target.name] : e.target.value})
                                }/>
                            <div class="H_A_I_E_cut"></div>
                            <label for="regNumber" class="H_A_I_E_placeholder">Supplie Rgistration Number</label>
                            
                        </div>

                        <div class="H_A_I_E_input-container ic2">
                            <input id="supname" class="H_A_I_E_input" type="text" placeholder=" " 
                                name="supName"
                                value = {input.supName}
                                onChange={(e) =>
                                    setInput({...input, [e.target.name] : e.target.value})
                                }/>
                            <div class="H_A_I_E_cut"></div>
                            <label for="supname" class="H_A_I_E_placeholder">Supplier Name</label>
                        </div>

                        <div class="H_A_I_E_input-container ic3">
                            <input id="itemName" class="H_A_I_E_input" type="text" placeholder=" " 
                                name="itemName"
                                value = {input.itemName}
                                onChange={(e) =>
                                     setInput({...input, [e.target.name] : e.target.value})
                                }/>
                            <div class="H_A_I_E_cut"></div>
                            <label for="itemName" class="H_A_I_E_placeholder">Item Name</label>
                        </div>

                        {/* <div class="H_A_I_E_input-container ic4">
                            <input id="price" class="H_A_I_E_input" type="text" placeholder=" " 
                                name="itemPrice"
                                value = {input.itemPrice}
                                onChange={(e) =>
                                     setInput({...input, [e.target.name] : e.target.value})
                                }/>
                            <div class="H_A_I_E_cut"></div>
                            <label for="price" class="H_A_I_E_placeholder">Item Price</label>
                        </div> */}

                        <div class="H_A_I_E_input-container ic5">
                            <input id="descrip" class="H_A_I_E_input" type="text" placeholder=" " 
                                name="itemdescription"
                                value = {input.itemdescription}
                                onChange={(e) =>
                                     setInput({...input, [e.target.name] : e.target.value})
                                }/>
                            <div class="H_A_I_E_cut"></div>
                            <label for="descrip" class="H_A_I_E_placeholder">Item Description</label>
                        </div>


                        <button type="submit" class="H_A_I_E_submit">SUBMIT</button>

                        <button onClick={()=>navigate("/")} className="H_A_I_E_submit">Go To Supplier Dashboard</button>

                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default EditSupplierItem