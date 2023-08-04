import React, { useEffect, useState } from "react";

import "../secondHandSelling/client.css";
import axios from "axios";
import ClientValidation from "../../../validation/ClientValidation";
import VueSweetalert2 from "sweetalert2";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { Link } from 'react-router-dom';

const Service = () => {

    const [products, setProducts] = useState([]);
    const df = "";

    useEffect(() => {
        axios.get("http://localhost:8000/api/selling/all").then((response) => {
            setProducts(response.data);
        });
    }, []);





    return (
        <div>
            <div className="main_container">
                <br/>
                <div className="item fw-bold">Secondhand Items</div>


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
                            <h1>Product List </h1>
                            <div className="row mt-5 px-3">



                                <form id="clientForm" >

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

                                            <div className="product-grid">
                                                {products.map((product) => (
                                                    <div className="product-item" key={product._id}>
                                                        {/* <h2>{product.product_img}</h2> */}
                                                        <img src={product.product_img} />
                                                        <p>{product.product_type}</p>
                                                        <p>Price: ${product.price}</p>
                                                        {/* <Link to={`/articlemore/${product._id}`} > */}
                                                        {/* <Link to={`/admin/articlemore/${product._id}`} > */}
                                                        <Link to={`/admin/articlemore/${df}`} >
                                                        <button class="btn btn-info">Show More</button>
                                                        </Link>
                                                    </div>
                                                ))}
                                            </div>


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
