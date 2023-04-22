import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataComponent = ({ id }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`http://localhost:8000/api/selling/642c4b710b3ee6ec3f4b6e35`);
            setData(result.data);
        };
        fetchData();
    }, [id]);

    if (!data) {

        return <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            Loading data...</div>;
    }
    console.log(data.product.product_name);

    return (
        // <div>
        //     <h1>{data.product.product_name}</h1>
        //     <p>{data.product_condition}</p>
        // </div>



        <div>
            <div className="main_container">
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
                            <h1><b>Product Details</b></h1>
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

                                            <div>
                                                <img src={data.product.product_img} />
                                                <h4><b>Product Name:</b> {data.product.product_name}</h4>
                                                <h5><b>Product Type:</b> {data.product.product_type}</h5>
                                                <h5><b>Product Name:</b> {data.product.brand}</h5>
                                                <br />
                                                <h5><b>Product Condition:</b> {data.product.product_condition}</h5><br></br>
                                                <h4><b>Price:</b> {data.product.price}</h4>
                                                <ul>
                                                    <li></li>
                                                </ul>
                                                
                                               
                                            </div>


                                        </div>

                                        <div className="col">

                                            <div>
                                             
                                                
                                               
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

export default DataComponent;
