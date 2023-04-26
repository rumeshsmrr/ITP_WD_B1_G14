import axios from "axios";
import React, { useState } from "react";

import "./styles/styles.css";

const ProductForm = () =>  {

    const [name , setName] = useState('')
    const [description , setDescription] = useState('')
    const [price , setPrice] = useState('')
    const [category , setCategory] = useState('')
    const [discount , setDiscount] = useState('')
    const [message , setMessage] = useState('')
    const [fileName , setFileName] = useState('')

    


    const onChangeFile = e => {
      setFileName(e.target.files[0])
  }

  const [error , setError] = useState(null)

  const handleSubmit = async (e) => {
      e.preventDefault()

      const formData = new FormData()

      formData.append("name" , name)
      formData.append("description" , description)
      formData.append("price" , price)
      formData.append("category" , category)
      formData.append("discount" , discount)
      formData.append("cover" , fileName)
      

      setName("") 
      setDescription("")
      setPrice("")
      setCategory("")
      setDiscount("")
      

      axios
          .post('/api/products' , formData) 
          .then((res) => setMessage(res.data))
          .catch((err) => {
              console.log(err)
          })
  }

  return (
    <div>

        <div className="container" style={{height:"1300px"}}>
          <div className="addUser1-card">
            <div className="card-title">
              <center>
                <text>Add Product</text>
              </center>
            </div>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="mb-3">
                <label className="form-label">Product Name </label>
                <input 
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              </div>
              <div className="mb-3">
                <label className="form-label">Product Price</label>
                <input 
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Product Discount</label>
                <input 
                type="number"
                onChange={(e) => setDiscount(e.target.value)}
                value={discount}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Product Category</label>
                <input 
                type="text"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                /> 
              </div>
              <div className="mb-3">
                <label className="form-label">Product Description</label>
                <input 
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                />
                <label htmlFor="file">Choosse Image</label>
                <input 
                    type="file"
                    filename="cover"
                    onChange={onChangeFile}
                    
                /> 
              </div>

              <center>
                <button className="btn btn-primary ">
                  Add Product
                </button>
              </center>
            </form>
          </div>
        </div>
      
    </div>
  )
}

export default ProductForm