import React, {useState, useEffect} from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
// import  Form  from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import 'bootstrap/dist/css/bootstrap.min.css';

import jsPDF from 'jspdf';

import 'jspdf-autotable';


// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import "./addsupplier.css"
import Footer from "../../../common/footer/Footer"
import Nav from "../../../common/header/Navbar"
import Search from "../../../common/header/Search"




const AddSupplier = ({CartItem}) => {

    const [search, setSearch] = useState('')

    const [sup, setSup] = useState([]);
    const [render, setRender] = useState(false)
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
            const res = await axios.get("http://localhost:8070/api/v1/sup");
            setSup(res.data);
        };
        getAllData();
    },[render]);

    const handelSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8070/api/v1/sup", input);
        setRender(true);
        setInput({
            supRegNum: "",
            supName: "",
            supContNum: "",
            supAddr: "",
            supMail: "",
            description: "",
        });
    };

    const handelDelete = async (id) => {
        await axios.delete(`http://localhost:8070/api/v1/sup/${id}`);
        const newSup = sup.filter((item) => {
            return item._id !== id;
        });
        setSup(newSup);
        
    };

    // const componentRef = useRef(null);

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
    const header = [["Supplie Rgistration Number", "Supplier Name", "Supplier Contact Number", "Supplier Address", "Supplier E-mail Address", "Discription"]];

    // Add data rows
    const data = sup.map(sup => [sup.supRegNum, sup.supName, sup.supContNum, sup.supAddr, sup.supMail, sup.description]);

    // Add table to document
    doc.autoTable({ head: header, body: data });

    // Download the PDF document
    doc.save('offers.pdf');
  };


//   const inputHandler=(e)=>{
//     setInput(e.target.value.toLowerCase());
//   };

  console.log(search)



  return (
    <>
    <Search CartItem={CartItem}/>
    <Nav/>

    <div className='H_A_Topic'>ADD SUPPLIERS</div>

    {/* <input className='H_A_search' onChange={(e) => setSearch(e.target.value)} placeholder='Search...'></input> */}
    <div class="H_A_search-container">
    <input className='H_A_search' onChange={(e) => setSearch(e.target.value)} placeholder='Search...'></input>
    </div>

    {/* <Form>
        <InputGroup className='H_A_search'>
            <Form.Control 
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search...'/>
        </InputGroup>
    </Form> */}

    {/* shadow Boxes */}

    <div className='H_A_body'>

        <div className='H_A_container'>

            <div className='H_A_box1'>
                <span></span>
                <div className='H_A_content'>

                <div class="H_A_form">
                    <div class="H_A_title">Welcome</div>
                    <div class="H_A_subtitle">Let's can you add new suppliers to the system!</div>

                    <form onSubmit={handelSubmit}>
                        <div class="H_A_input-container ic1">

                            <input id="regNumber" class="H_A_input" type="text" placeholder=" " 
                                name="supRegNum"
                                required
                                value = {input.supRegNum}
                                onChange={(e) =>
                                    setInput({...input, [e.target.name] : e.target.value})
                                }/>
                            <div class="H_A_cut"></div>
                            <label for="regNumber" class="H_A_placeholder">Supplie Rgistration Number</label>
                            
                        </div>

                        <div class="H_A_input-container ic2">
                            <input id="supname" class="H_A_input" type="text" placeholder=" " 
                                name="supName"
                                required
                                value = {input.supName}
                                onChange={(e) =>
                                    setInput({...input, [e.target.name] : e.target.value})
                                }/>
                            <div class="H_A_cut"></div>
                            <label for="supname" class="H_A_placeholder">Supplier Name</label>
                        </div>

                        <div class="H_A_input-container ic3">
                            <input id="contnnum" class="H_A_input" type="Number" placeholder=" " 
                                name="supContNum"
                                required
                                value = {input.supContNum}
                                onChange={(e) =>
                                     setInput({...input, [e.target.name] : e.target.value})
                                }/>
                            <div class="H_A_cut"></div>
                            <label for="contnnum" class="H_A_placeholder">Supplier Contact Number</label>
                        </div>

                        <div class="H_A_input-container ic4">
                            <input id="address" class="H_A_input" type="text" placeholder=" " 
                                name="supAddr"
                                required
                                value = {input.supAddr}
                                onChange={(e) =>
                                     setInput({...input, [e.target.name] : e.target.value})
                                }/>
                            <div class="H_A_cut"></div>
                            <label for="address" class="H_A_placeholder">Supplier Address</label>
                        </div>

                        <div class="H_A_input-container ic5">
                            <input id="mail" class="H_A_input" type="email" placeholder=" " 
                                name="supMail"
                                required
                                value = {input.supMail}
                                onChange={(e) =>
                                     setInput({...input, [e.target.name] : e.target.value})
                                }/>
                            <div class="H_A_cut"></div>
                            <label for="mail" class="H_A_placeholder">Supplier E-mail Address</label>
                        </div>

                        <div class="H_A_input-container ic6">
                            <input id="description" class="H_A_input" type="text" placeholder=" " 
                               name="description"
                               required
                               value = {input.description}
                               onChange={(e) =>
                                    setInput({...input, [e.target.name] : e.target.value})
                                }/>
                            <div class="H_A_cut"></div>
                            <label for="description" class="H_A_placeholder">Discription</label>
                        </div>
                        
                        <button type="submit" class="H_A_submit">SUBMIT</button>
                        
                    </form>
                </div>


                


                        {/* <div className="col-md-6">
                            <form onSubmit={handelSubmit}>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">
                                        Supplie Rgistration Number
                                        </label>
                                    <input 
                                    name="supRegNum"
                                    value = {input.supRegNum}
                                    onChange={(e) =>
                                        setInput({...input, [e.target.name] : e.target.value})
                                        }
                                    type="supRegNum"
                                    class="form-control" />
                                </div>

                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">
                                        Supplier Name
                                        </label>
                                    <input 
                                    name="supName"
                                    value = {input.supName}
                                    onChange={(e) =>
                                        setInput({...input, [e.target.name] : e.target.value})
                                    }
                                    type="name" 
                                    class="form-control" />
                                </div>

                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">
                                        Supplier Contact Number
                                        </label>
                                    <input 
                                    name="supContNum"
                                    value = {input.supContNum}
                                    onChange={(e) =>
                                        setInput({...input, [e.target.name] : e.target.value})
                                        }
                                    type="number" 
                                    class="form-control" />
                                </div>

                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">
                                        Supplier Address
                                        </label>
                                    <input
                                    name="supAddr"
                                    value = {input.supAddr}
                                    onChange={(e) =>
                                        setInput({...input, [e.target.name] : e.target.value})
                                        }
                                    type="address" 
                                    class="form-control"/>
                                </div>

                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">
                                        Supplier E-mail Address 
                                        </label>
                                    <input
                                    name="supMail"
                                    value = {input.supMail}
                                    onChange={(e) =>
                                        setInput({...input, [e.target.name] : e.target.value})
                                        }
                                    type="mail" 
                                    class="form-control" />
                                </div>

                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">
                                    Discription
                                        </label>
                                    <input
                                    name="description"
                                    value = {input.description}
                                    onChange={(e) =>
                                        setInput({...input, [e.target.name] : e.target.value})
                                        }
                                    type="description" 
                                    class="form-control" />
                                </div>

                                <button type="submit" class="btn btn-primary">Submit</button>

                            </form>
                        </div> */}

                </div>
            </div>
            
            <div className='H_A_box2'>
                <span></span>
                <div className='H_A_content'>


                <div className="col-md-6">
            <table class="table">
            <thead>
                <tr>
                    {/* <th scope="col">ID</th> */}
                    <th scope="col">Supplie Rgistration Number</th>
                    <th scope="col">Supplier Name</th>
                    <th scope="col">Supplier Contact Number</th>
                    <th scope="col">Supplier Address</th>
                    <th scope="col">Supplier E-mail Address</th>
                    <th scope="col">Discription</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            
            {/* {sup.filter((el) => {
                if (el === "") {
                return el;
            } else {
                return el.supRegNum.toLowerCase().includes(input) ||
                el.supName.toLowerCase().includes(input);
            }
            })} */}

            


            {/* <tbody>
                {sup && sup.map((supplier) => {
                    return(
                <tr key={supplier._id}>
                    <td>{supplier.supRegNum}</td>
                    <td>{supplier.supName}</td>
                    <td>{supplier.supContNum}</td>
                    <td>{supplier.supAddr}</td>
                    <td>{supplier.supMail}</td>
                    <td>{supplier.description}</td>
                    <td>
                        <Link to = {`/edit/${supplier._id}`}>
                        <button className="btn btn-primary">Edit</button>
                        </Link>
                        </td>
                    <td><button onClick={() => handelDelete(supplier._id) }
                     className="btn btn-danger">Delete</button></td>
                     
                </tr>
                    );
                })}
            
            </tbody> */}

{/* 
            {sup.filter((el) => {
                if (el === "") {
                return el;
            } else {
                return el.supRegNum.toLowerCase().includes(input) ||
                el.supName.toLowerCase().includes(input);
            }
            })
                .map((supplier) => {
                    return(
                        <tbody>
                <tr key={supplier._id}>
                    <td>{supplier.supRegNum}</td>
                    <td>{supplier.supName}</td>
                    <td>{supplier.supContNum}</td>
                    <td>{supplier.supAddr}</td>
                    <td>{supplier.supMail}</td>
                    <td>{supplier.description}</td>
                    <td>
                        <Link to = {`/edit/${supplier._id}`}>
                        <button className="btn btn-primary">Edit</button>
                        </Link>
                        </td>
                    <td><button onClick={() => handelDelete(supplier._id) }
                     className="btn btn-danger">Delete</button></td>
                     
                </tr>
                </tbody>
                    );
                })}
             */}

            <tbody>
                {sup.filter((supplier) => {
                    return search.toLowerCase() === ''
                    ? supplier
                    : supplier.supRegNum.toLowerCase().includes(search) || 
                    supplier.supName.toLowerCase().includes(search);
                })
                    .map((supplier) => (
                        <tr key={supplier._id}>
                            <td>{supplier.supRegNum}</td>
                                <td>{supplier.supName}</td>
                                <td>{supplier.supContNum}</td>
                                <td>{supplier.supAddr}</td>
                                <td>{supplier.supMail}</td>
                                <td>{supplier.description}</td>
                            <td>
                                    <Link to = {`/edit/${supplier._id}`}>
                                    <button className="btn btn-primary">Edit</button>
                                    </Link>
                                    </td>
                                <td><button onClick={() => handelDelete(supplier._id) }
                                className="btn btn-danger">Delete</button></td>
                     
                        </tr>
                    ))
                }
            </tbody>
            

            </table>
            </div>
                
                </div>
            </div>

            <button type="submit" class="H_A_Genarate" onClick={handlePdfGeneration}>
                Generate PDF
            </button>

            

        </div>     
    </div>

            



    {/* <div className="container">
        <div className="row">

            <div className="col-md-13 mt-2">
            <div style={{backgroundColor: "purple"}}>
                <h1 className="text-white text-center">ADD SUPPLIERS</h1>
            </div>
            </div>
            <div className="col-md-6">
            <form onSubmit={handelSubmit}>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                    Supplie Rgistration Number
                    </label>
                <input 
                name="supRegNum"
                value = {input.supRegNum}
                onChange={(e) =>
                     setInput({...input, [e.target.name] : e.target.value})
                    }
                type="supRegNum"
                class="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp"/>
            </div>

            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                    Supplier Name
                    </label>
                <input 
                name="supName"
               value = {input.supName}
               onChange={(e) =>
                    setInput({...input, [e.target.name] : e.target.value})
                   }
                type="name" 
                class="form-control" 
                id="exampleInputPassword1"/>
            </div>

            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                    Supplier Contact Number
                    </label>
                <input 
                name="supContNum"
                value = {input.supContNum}
                onChange={(e) =>
                     setInput({...input, [e.target.name] : e.target.value})
                    }
                type="number" 
                class="form-control" 
                id="exampleInputPassword1"/>
            </div>

            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                    Supplier Address
                    </label>
                <input
                name="supAddr"
                value = {input.supAddr}
                onChange={(e) =>
                     setInput({...input, [e.target.name] : e.target.value})
                    }
                type="address" 
                class="form-control" 
                id="exampleInputPassword1"/>
            </div>

            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                    Supplier E-mail Address 
                    </label>
                <input
                name="supMail"
                value = {input.supMail}
                onChange={(e) =>
                     setInput({...input, [e.target.name] : e.target.value})
                    }
                type="mail" 
                class="form-control" 
                id="exampleInputPassword1"/>
            </div>

            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                Discription
                    </label>
                <input
                name="description"
                value = {input.description}
                onChange={(e) =>
                     setInput({...input, [e.target.name] : e.target.value})
                    }
                type="description" 
                class="form-control" 
                id="exampleInputPassword1"/>
            </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

            </div>
            <div className="col-md-6">
            <table class="table">
            <thead> */}
                {/* <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Supplie Rgistration Number:</th>
                    <th scope="col">Supplier Name:</th>
                    <th scope="col">Supplier Contact Number:</th>
                    <th scope="col">Supplier Address:</th>
                    <th scope="col">Supplier E-mail Address:</th>
                    <th scope="col">Discription:</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {sup && sup.map((supplier) => {
                    return(
                <tr key={supplier._id}>
                    <td>{supplier.supRegNum}</td>
                    <td>{supplier.supName}</td>
                    <td>{supplier.supContNum}</td>
                    <td>{supplier.supAddr}</td>
                    <td>{supplier.supMail}</td>
                    <td>{supplier.description}</td>
                    <td>
                        <Link to = {`/edit/${supplier._id}`}>
                        <button className="btn btn-primary">Edit</button>
                        </Link>
                        </td>
                    <td><button onClick={() => handelDelete(supplier._id)}
                     className="btn btn-danger">Delete</button></td>
                     
                </tr>
                    );
                })}
            </tbody>
            </table>
            </div>
         </div>
        </div> */}
            <br/> <br/>   <br/>
            
        <Footer/>
    </>
  )
}

export default AddSupplier