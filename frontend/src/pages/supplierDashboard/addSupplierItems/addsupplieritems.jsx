import React, {useState, useEffect} from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import jsPDF from 'jspdf';

import 'jspdf-autotable';

import "./addsupplieritems.css"
import Footer from "../../../common/footer/Footer"
import Nav from "../../../common/header/Navbar"
import Search from "../../../common/header/Search"

const AddSupplierItems = ({CartItem}) => {
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

    const handelSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8070/api/v1/supitem", input);
        setRender(true);
        setInput({
            supRegNum: "",
            supName: "",
            itemName: "",
            itemdescription: "",
        });
    };

    const handelDelete = async (id) => {
        await axios.delete(`http://localhost:8070/api/v1/supitem/${id}`);
        const newsupitem = supitem.filter((item) => {
            return item._id !== id;
        });
        setSupitem(newsupitem);
    };

    const navigate = useNavigate();
    
    // const UniqueSupplierItem = (data) => {
    //     navigate("/viewUniqueItem", { state : data})
    // };

    const UniqueSupplierItem = (supplier) => {
        navigate("/viewUniqueItem", { state : supplier})
    };

    function handlePdfGeneration() {
        const doc = new jsPDF();
        doc.autoTable({ html: '#my-table' });
        doc.save('example.pdf');
    }

    function handlePdfGeneration() {
    const doc = new jsPDF();

    // // Add PDF logo to document
    // doc.addImage('https://res.cloudinary.com/dkf222zei/image/upload/v1682132775/logoBrandLarge_qpfl2q.png', 'PNG', 50, 50, 50, 50);

    // Set table header
    const header = [["Supplie Rgistration Number", "Supplier Name", "Item Name", "Item Description"]];

    // Add data rows
    const data = supitem.map(supitem => [supitem.supRegNum, supitem.supName, supitem.itemName, supitem.itemdescription]);

    // Add table to document
    doc.autoTable({ head: header, body: data });

    // Download the PDF document
    doc.save('offers.pdf');
  }



    return (
        <>
        <Search CartItem={CartItem}/>
        <Nav/>

        <div className='H_A_I_Topic'>ADD SUPPLIERS SUPPLY ITEMS</div>

        <div class="H_A_I_search-container">
            <input className='H_A_I_search' onChange={(e) => setSearch(e.target.value)} placeholder='Search...'></input>
        </div>

        <div className='H_A_I_body'>

        <div className='H_A_I_container'>


            <div className='H_A_I_box1'>
                <span></span>
                <div className='H_A_I_content'>

                <div class="H_A_I_form">
                    <div class="H_A_I_title">Welcome</div>
                    <div class="H_A_I_subtitle">Let's can you add suppliers supply items in to the system!</div>

                    <form onSubmit={handelSubmit}>

                        {/* <div class="H_A_I_input-container ic1">

                            <input id="userID" class="H_A_I_input" type="text" placeholder=" " 
                                name="userID"
                                value = {input.userID}
                                onChange={(e) =>
                                    setInput({...input, [e.target.name] : e.target.value})
                                }/>
                            <div class="H_A_I_cut"></div>
                            <label for="useridd" class="H_A_I_placeholder">User Id</label>

                        </div> */}

                        <div class="H_A_I_input-container ic1">

                            <input id="regNumber" class="H_A_I_input" type="text" placeholder=" " 
                                name="supRegNum"
                                required
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
                                required
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
                                required
                                value = {input.itemName}
                                onChange={(e) =>
                                     setInput({...input, [e.target.name] : e.target.value})
                                }/>
                            <div class="H_A_I_cut"></div>
                            <label for="itemName" class="H_A_I_placeholder">Item Name</label>
                        </div>

                        {/* <div class="H_A_I_input-container ic4">
                            <input id="price" class="H_A_I_input" type="text" placeholder=" " 
                                name="itemPrice"
                                value = {input.itemPrice}
                                onChange={(e) =>
                                     setInput({...input, [e.target.name] : e.target.value})
                                }/>
                            <div class="H_A_I_cut"></div>
                            <label for="price" class="H_A_I_placeholder">Item Price</label>
                        </div> */}

                        <div class="H_A_I_input-container ic5">
                            <input id="descrip" class="H_A_I_input" type="text" placeholder=" " 
                                name="itemdescription"
                                required
                                value = {input.itemdescription}
                                onChange={(e) =>
                                     setInput({...input, [e.target.name] : e.target.value})
                                }/>
                            <div class="H_A_I_cut"></div>
                            <label for="descrip" class="H_A_I_placeholder">Item Description</label>
                        </div>


                        <button type="submit" class="H_A_I_submit">SUBMIT</button>

                    </form>
                </div>
            </div>
            </div>

            <div className='H_A_I_box2'>
                <span></span>
                <div className='H_A_I_content'></div>

                
                <div className="col-md-6">
                    <table class="table">
                    <thead>
                        <tr>
                            {/* <th scope="col">ID</th> */}
                            <th scope="col">Supplie Rgistration Number:</th>
                            <th scope="col">Supplier Name:</th>
                            <th scope="col">Supplier Supply Item Name:</th>
                            {/* <th scope="col">Item Price:</th> */}
                            <th scope="col">Item Description:</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
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
                                        <Link to = {`/edits/${supplier._id}`}>
                                        <button className="btn btn-primary">Edit</button>
                                        </Link>
                                    </td>
                                
                                    <td><button onClick={() => handelDelete(supplier._id)}
                                        className="btn btn-danger">Delete</button></td>
                                
                                    <td><button className='quniuebtn' onClick={() => UniqueSupplierItem(supplier._id)}> UniqueItem </button></td>

                                </tr>
                            ))
                        }
                    </tbody>
                    
                    </table>
                </div>
            </div>

            <button type="submit" class="H_A_Genarate" onClick={handlePdfGeneration}>
                Generate PDF
            </button>
        </div>
    </div>
        <Footer/>
        </>
      )
    }
    
    export default AddSupplierItems