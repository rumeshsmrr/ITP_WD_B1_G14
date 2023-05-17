import { useState,useEffect } from "react"
import { useParams , useNavigate } from "react-router-dom"
import axios from "axios"

const ProductEdit = () =>  {

    const params = useParams()
    
    
    const [name , setName] = useState('')
    const [description , setDescription] = useState('')
    const [price , setPrice] = useState('')
    const [category , setCategory] = useState('')
    const [discount , setDiscount] = useState('')
    const [message , setMessage] = useState('')
    const navigate = useNavigate()

    
    
    const getProductDetails = async () => {

      
        // console.log(params)
        let result = await fetch(`http://localhost:8070/api/products/${params.id}`)
        result = await result.json()
        console.log(result)
        setName(result.name)
        setPrice(result.price)  
        setCategory(result.category)
        setDescription(result.description)
        setDiscount(result.discount)

    }

    useEffect(() => {

      getProductDetails()

    } , [])

    

    const updateProduct = async () => {

        
        console.log(name , price , category)
        let result = fetch(`http://localhost:8070/api/products/${params.id}` , {
            method:"PATCH",
            body:JSON.stringify({name , category , description ,  price ,  discount }),
            headers:{
                'Content-type' : 'Application/json'
            }
        })
        result = await result.json()
        console.log(result)

        
    }

    



  return (
    <div>
      

        <div className="container" style={{height:"1300px"}}>
          <div className="addUser1-card">
            <div className="card-title">
              <center>
                <text>Update Product</text>
              </center>
            </div>
            <form onSubmit={updateProduct}>
              <div className="mb-3">
                <label className="form-label">Product Name </label>
                <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                
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
                
              </div>

              <center>
                <button className="btn btn-primary "
                onClick={() => {

                  updateProduct().onEdit()

                }}  
                >
                  Update Product
                </button>
              </center>
            </form>
          </div>
        </div>
      
    </div>
  )
}

export default ProductEdit