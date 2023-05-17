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
    const [errors , setErrors] = useState(false)

    


    const onChangeFile = e => {
      setFileName(e.target.files[0])
  }

  const [error , setError] = useState(null)

  const handleSubmit = async (e) => {
      e.preventDefault()

    if(!name || !price || !description || !discount || !fileName || !category){

      setErrors(true) 
      return false 

    }

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
          .post('http://localhost:8070/api/products' , formData) 
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
              {/* {errors && !name &&
              <label className="error-label">This field can't be empty!!</label> } */}
              </div>
              <div className="mb-3">
                <label className="form-label">Product Price</label>
                <input 
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                />
                {/* {errors && !price &&
              <label className="error-label">This field can't be empty!!</label> } */}
              </div>
              <div className="mb-3">
                <label className="form-label">Product Discount</label>
                <input 
                type="number"
                onChange={(e) => setDiscount(e.target.value)}
                value={discount}
                />
                {/* {errors && !discount &&
                  <label className="error-label">This field can't be empty!!</label> } */}
              </div>
              <div className="mb-3">
                <label className="form-label">Product Category</label>
                <input 
                type="text"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                /> 
                {/* {errors && !category &&
              <label className="error-label">This field can't be empty!!</label> } */}
              </div>
              <div className="mb-3">
                <label className="form-label">Product Description</label>
                <input 
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                />
                {/* {errors && !description &&
              <label className="error-label">This field can't be empty!!</label> } */}
                <br></br>
                <label htmlFor="file">Choosse Image</label>
                <input 
                    type="file"
                    filename="cover"
                    onChange={onChangeFile}
                    
                /> 
                
              {/* <label className="error-label">This field can't be empty!!</label>  */}
                
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