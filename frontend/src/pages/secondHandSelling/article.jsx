import React, { useEffect, useState } from "react";
import "../client/client.css";
import axios from "axios";
import ClientValidation from "../../../validation/ClientValidation";
import VueSweetalert2 from "sweetalert2";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { Link } from 'react-router-dom';

const Service = () => {

    const [product_img, setProduct_img] = useState('');
    const [product_name, setProduct_name] = useState('');
    const [product_type, setProduct_type] = useState('');
    const [product_condition, setProduct_condition] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [data, setData] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newUser = { product_name, product_type, product_condition, brand, price, product_img};
        axios.post('http://localhost:8000/api/selling/', newUser)
            .then(response => console.log(response))
            .catch(error => console.log(error));
            setProduct_img('');
            setProduct_name('');
            setProduct_type('');
            setProduct_condition('');
            setBrand('');
            setPrice('');

    };

  

    const handleClear = () => {
        //  clear input value
            setProduct_img('');
            setProduct_name('');
            setProduct_type('');
            setProduct_condition('');
            setBrand('');
            setPrice('');
      };

    useEffect(() => {
        axios.get('http://localhost:8000/api/selling/all')
          .then(response => setData(response.data))
          .catch(error => console.log(error))
      }, []);


     




    return (
        <div>
            <div className="main_container">
                <br />
                <br />
                <div className="item fw-bold">Craete Article</div>

                
                <div className="item">
                    <div className="row mt-5 ps-3">
                        <div className="row">
                            <div className=" col-lg-6 col-md-12 col-sm-12">
                                <div className="row">

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-6">
                        <div className="col">
                        <h1>Add new Product </h1>
                            <div className="row mt-5 px-3">

                                
                                
                                <form id="clientForm" onSubmit={handleSubmit}>
                                    
                                    <div className="row">
                                        <div className="col d-flex justify-content-end align-items-center">
                                            <div className="col d-flex justify-content-end">
                                                
                                                <div>
                                                    
                                                    <button
                                                        hidden
                                                        className="btn btnEditImg"
                                                        id="btnEditImg"
                                                        type="button"
                                                    >
                                                        <i className="fa-solid fa-pen text-white" />
                                                    </button>
                                                    <button
                                                        hidden
                                                        className="btn btnImgDelete"
                                                        id="btnImgDelete"
                                                        type="button"
                                                    >
                                                        <i className="fa-solid fa-trash-can d-inline text-white" />
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                    
                                    <div className="row mt-4">
                                        <div className="col">
                                            
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Product Image"
                                                value={product_img}
                                                onChange={(event) => setProduct_img(event.target.value)}

                                            />
                                        </div>
                                       
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col">
                                            
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Product Name"
                                                value={product_name}
                                                onChange={(event) => setProduct_name(event.target.value)}

                                            />
                                        </div>
                                        <div className="col">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Product Type"
                                                value={product_type}
                                                onChange={(event) => setProduct_type(event.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="row mt-4">
                                        <div className="col-12">
                                            <textarea
                                                className="form-control"
                                                placeholder="Product Condition"
                                                value={product_condition}
                                                onChange={(event) => setProduct_condition(event.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="row mt-4">
                                        <div className="col">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="brand"
                                                value={brand}
                                                onChange={(event) => setBrand(event.target.value)}
                                            />
                                        </div>
                                        <div className="col">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Price"
                                                value={price}
                                                onChange={(event) => setPrice(event.target.value)}
                                            />
                                        </div>
                                    </div>


                                    <div className="row mt-5">
                                        <div className="d-flex justify-content-around align-items-center">
                                            <button
                                                type="submit"
                                                className="btn btn-success"

                                            >
                                                Add to Service
                                            </button>
                                            <Link to="/admin/articlemgmt">
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                                
                                                onClick={() => { }}
                                            >
                                                View
                                            </button>
                                            </Link>
                                            <button
                                                
                                                type="button"
                                                className="btn btn-danger"

                                                onClick={handleClear}
                                            >
                                                Clear
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                       
                    </div>





                </div>
            </div>
        </div>
    );
};

export default Service;
