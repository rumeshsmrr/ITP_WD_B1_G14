import React, {useEffect, useState} from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';

import "./editsupplier.css"
import Footer from "../../../common/footer/Footer"
import Navbar from '../../poornaka/Navbar'

const EditSupplier = ({CartItem}) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [input,setInput] = useState({
        supRegNum: "",
        supName: "",
        supContNum: "",
        supAddr: "",
        supMail: "",
        description: "",
    });

    useEffect(()=>{
        const getAllData = async () => {
            const res = await axios.get(`http://localhost:8070/api/v1/sup/single/${id}`);
            setInput(res.data);
        };
        getAllData();
    },[id]);

    const handelEditData = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8070/api/v1/sup/${id}`, input);
        navigate("/AddSupplier");
    };

    return (
        <>

        <Navbar/>

        <div className='H_E_Topic' style={{marginTop:"100px"}}>EDIT REGISTRATION DETAILS</div>

        <div className='H_E_body'>

            <div className='H_E_container'>

                <div className='H_E_box1'>
                    <span></span>
                    <div className='H_E_content'>

                    <div class="H_E_form">
                        <div class="H_E_title">Welcome</div>
                        <div class="H_E_subtitle">Let's can you edit suppliers registration details!</div>

                        <form onSubmit={handelEditData}>
                            <div class="H_E_input-container ic1">

                                <input id="regNumber" class="H_E_input" type="text" placeholder=" " 
                                    name="supRegNum"
                                    value = {input.supRegNum}
                                    onChange={(e) =>
                                        setInput({...input, [e.target.name] : e.target.value})
                                    }/>
                                <div class="H_E_cut"></div>
                                <label for="regNumber" class="H_E_placeholder">Rgistration Number</label>
                                
                            </div>

                            <div class="H_E_input-container ic2">
                                <input id="supname" class="H_E_input" type="text" placeholder=" " 
                                    name="supName"
                                    required
                                    value = {input.supName}
                                    onChange={(e) =>
                                        setInput({...input, [e.target.name] : e.target.value})
                                    }/>
                                <div class="H_E_cut"></div>
                                <label for="supname" class="H_E_placeholder">Supplier Name</label>
                            </div>

                            <div class="H_E_input-container ic3">
                                <input id="contnnum" class="H_E_input" type="text" placeholder=" " 
                                    name="supContNum"
                                    required
                                    value = {input.supContNum}
                                    onChange={(e) =>
                                        setInput({...input, [e.target.name] : e.target.value})
                                    }/>
                                <div class="H_E_cut"></div>
                                <label for="contnnum" class="H_E_placeholder">Contact Number</label>
                            </div>

                            <div class="H_E_input-container ic4">
                                <input id="address" class="H_E_input" type="text" placeholder=" " 
                                    name="supAddr"
                                    required
                                    value = {input.supAddr}
                                    onChange={(e) =>
                                        setInput({...input, [e.target.name] : e.target.value})
                                    }/>
                                <div class="H_E_cut"></div>
                                <label for="address" class="H_E_placeholder">Address</label>
                            </div>

                            <div class="H_E_input-container ic5">
                                <input id="mail" class="H_E_input" type="text" placeholder=" " 
                                    name="supMail"
                                    required
                                    value = {input.supMail}
                                    onChange={(e) =>
                                        setInput({...input, [e.target.name] : e.target.value})
                                    }/>
                                <div class="H_E_cut"></div>
                                <label for="mail" class="H_E_placeholder">E-mail Address</label>
                            </div>

                            <div class="H_E_input-container ic6">
                                <input id="description" class="H_E_input" type="text" placeholder=" " 
                                name="description"
                                required
                                value = {input.description}
                                onChange={(e) =>
                                        setInput({...input, [e.target.name] : e.target.value})
                                    }/>
                                <div class="H_E_cut"></div>
                                <label for="description" class="H_E_placeholder">Description</label>
                            </div>

                            <button type="submit" class="H_E_submit" >SUBMIT</button>

                            {/* <button onClick={()=>navigate("/AddSupplier")} className="H_E_submit">Go To Supplier Dashboard</button> */}

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

    
export default EditSupplier
