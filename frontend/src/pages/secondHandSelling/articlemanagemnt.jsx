import React, { useEffect, useState } from "react";
import "../client/client.css";
import axios from "axios";
import ClientValidation from "../../../validation/ClientValidation";
import VueSweetalert2 from "sweetalert2";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { Link } from 'react-router-dom';
import { useParams} from "react-router-dom";

const Service = () => {

    const [product_name, setProduct_name] = useState('');
    const [product_type, setProduct_type] = useState('');
    const [product_condition, setProduct_condition] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [product_img, setProduct_img] = useState('');
    const [data, setData] = useState([]);
    const { id } = useParams();
    const [isEditing, setIsEditing] = useState(false);
    const [itemId, setItemId] = useState();
    const [formData, setFormData] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        const newUser = { product_name, product_type, product_condition, brand, price, product_img};
        axios.post('http://localhost:8000/api/selling/', newUser)
            .then(response => console.log(response))
            .catch(error => console.log(error));
            setProduct_name('');
            setProduct_type('');
            setProduct_condition('');
            setBrand('');
            setPrice('');
            setProduct_img('');

    };

    useEffect(() => {
        axios.get('http://localhost:8000/api/selling/all')
            .then(response => setData(response.data))
            .catch(error => console.log(error))
    }, []);

    const handleDelete = (item) => {
        console.log(item._id);
        axios.delete(`http://localhost:8000/api/selling/${item._id}`)
        .then(() => {
          setData(data.filter((d) => d.id !== item._id));
          
        });
        
      };

      const handleEdit = (item) => {
        setIsEditing(true);
        setItemId(item._id);
        setProduct_name(item.product_name);
        setProduct_type(item.product_type);
        setProduct_condition(item.product_condition);
        setBrand(item.brand);
        setPrice(item.price);
        setProduct_img(item.product_img);
      };

      const handleUpdate = (event) => {
        event.preventDefault();
        console.log(id)
        
        axios.put(`http://localhost:8000/api/selling/${itemId}`, { product_name, product_type, product_condition, brand, price, product_img}).then(() => {
          setData(data.map((item) => (item.id === itemId ? { id: itemId, product_name, product_type, product_condition, brand, price, product_img } : item)));
          setIsEditing(false);
          setProduct_name('');
            setProduct_type('');
            setProduct_condition('');
            setBrand('');
            setPrice('');
            setProduct_img('');
        });
      
      };

      const handleCreate = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/api/selling/', { product_name, product_type, product_condition, brand, price, product_img }).then((response) => {
          setData([...data, { id: response.data.id, product_name, product_type, product_condition, brand, price, product_img }]);
          setProduct_name('');
            setProduct_type('');
            setProduct_condition('');
            setBrand('');
            setPrice('');
            setProduct_img('');
        });
      };


    const displayAllClients = () => {
        return data.map(user => (
            <tr key={user.id}>

                <td>{user.product_name}</td>
                <td>{user.product_type}</td>
                <td>{user.product_condition}</td>
                <td>{user.brand}</td>
                <td>{user.price}</td>
                <td>{user.product_img}</td>
                <td>
                <button  className="btn btn-success" onClick={() => handleEdit(user)}>Edit</button>
                {/* <button onClick={() => handleUpdate(item)}>Edit</button> */}
                <button className="btn btn-danger" onClick={() => handleDelete(user)}>Delete</button>
              </td>




            </tr>
        ));
    };


    const generatePDF = () => {
        const specialElementHandlers = {
            '.no-export': function (element, renderer) {
                return true;
            }
        };
        const doc = new jsPDF('p', 'pt', 'a4');

        doc.text(305, 20, 'Client Details', 'center');

        const head = [['ID', 'Product Name', 'Product Type',
            'Product Condition', 'Brand', 'Price']];
        const elements = data.map(client => [client._id, client.product_name, client.product_type,
            client.product_condition, client.brand, client.price]);

        autoTable(doc, {
            head: head,
            body: elements,
        })
        doc.save("clientDetails.pdf");
    }



    return (
        <div>
            <div className="main_container">
                <div className="item fw-bold">Article Management</div>


                <div className="item">
                    <div className="row mt-5 ps-3">
                        <div className="row">
                            <div className=" col-lg-6 col-md-12 col-sm-12">
                                <div className="row">
                                <div className="d-flex justify-content-start align-items-center">
                                        <button onClick={() => {
                                            generatePDF()
                                        }} id="btn-generate-report" className="btn me-3">Generate Report
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-6">


                        <div className="table-responsive">
                            <table className="table table-striped custom-table" id="assignLabsTable">
                                <thead>
                                    <tr>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Product Type</th>
                                        <th scope="col">Product Condition</th>
                                        <th scope="col">Brand</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Product Img</th>
                                        <th scope="col">Action</th>
                                        <th scope="col" />
                                    </tr>
                                </thead>
                                <tbody>
                                    {displayAllClients()}
                                </tbody>
                            </table>
                        </div>


                        <div className="col">
                            <br />  <br />  <br />
                            <h1><b>Edit Article Details</b></h1>
                            <div className="row mt-5 px-3">



                                <form id="clientForm" onSubmit={isEditing ? handleUpdate : handleCreate}>

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
                                                placeholder="Brand"
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
                                    <div className="row mt-4">
                                        <div className="col">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Product Images"
                                                value={product_img}
                                                onChange={(event) => setProduct_img(event.target.value)}
                                            />
                                        </div>
                                        
                                    </div>


                                    <div className="row mt-5">
                                        <div className="d-flex justify-content-around align-items-center">
                                            <button
                                                type="submit"
                                                className="btn btnRegister"

                                            >
                                                {isEditing ? 'Update' : 'Create'}
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
