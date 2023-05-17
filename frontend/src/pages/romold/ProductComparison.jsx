import './Search.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProductComparison = () => {


    const [products, setProducts] = useState([]);
    const [selected , setSelected] = useState('')
    const [selected1 , setSelected1] = useState('')

    const getProducts = async() => {
        const {data} = await axios.get("http://localhost:8070/api/products/")
        setProducts(data)
    }

    useEffect(() => {
        getProducts()
    } , [])

    return(
    <div>    
    <h1 class="display-5 my-5 text-center">Product Comparison</h1>
    <div class="container">
        <div class="col-md-9 mx-auto">
            <table class="table">
                <tr class="bg-light">
                    <th>Select Product</th>
                    <th width="300px">
                        <select class="form-control" id="select2" onChange={(e) => {
                            const c = products?.find((x) => x._id === e.target.value)
                            setSelected(c) 
                        }}>
                        
                        {products.map((product) => {

                            
                           return <option key={product._id} value={product._id}>{product.name} </option>
                        })}
                        </select>
                    </th>
                    <th width="300px">
                        <select class="form-control" id="select2" onChange={(e) => {
                            const c = products?.find((x) => x._id === e.target.value)
                            setSelected1(c) 
                        }}>
                        
                        {products.map((product) => {

                            
                           return <option key={product._id} value={product._id}>{product.name} </option>
                        })}
                        </select>
                    </th>
                </tr>
                <tr>
                    <th>Product Image</th>
                    <td>
                        <img src={`/uploads/${selected.cover}`}
                            className="image11" alt=" "/>
                    </td>
                    <td>
                        <img src={`/uploads/${selected1.cover}`}
                            className="image22" alt=" "/>
                    </td>
                </tr>
                <tr>
                    <th>Product Price</th>
                    <td id="price1">{selected.price}</td>
                    <td id="price2">{selected1.price}</td>
                </tr>
                <tr>
                    <th>Product Description</th>
                    <td id="desc1">{selected.description}</td>
                    <td id="desc2">{selected1.description}</td>
                </tr>
                <tr>
                    <th>Product Category</th>
                    <td id="brand1">{selected.category}</td>
                    <td id="brand2">{selected1.category}</td>
                </tr>
            </table>

        </div>
    </div>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.2/umd/popper.min.js "></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.0/js/bootstrap.min.js "></script>

    </div>

    )
    
    
    }

    

    

 



export default ProductComparison