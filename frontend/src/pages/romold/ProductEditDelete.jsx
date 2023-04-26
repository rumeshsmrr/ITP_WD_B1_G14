import { useEffect , useState } from "react"
import { Link } from "react-router-dom"
import Axios from "axios"
import "./styles/prof.css";


const ProductEditDelete  = () => {

    const deleteProduct = async  (id) => {
        console.log(id)
        let result = await fetch(`/api/products/${id}` , {
            method: "DELETE" ,
        })

        result = await result.json()
        if(result){
            getProducts()
        }
    }

    const [products , setProducts] = useState([])

    const getProducts = async() => {
    const {data} = await Axios.get("/api/products/")
    setProducts(data)
  }

  console.log(products);

    useEffect(() => {
        getProducts()
    } , [])

    return(
      
                  <div className="">
                    <table
                      className="table"
                      style={{ backgroundColor: "rgb(247, 247, 247)", borderRadius: "10px",
                      border:"10px black"
                    }}
                      // style={{ backgroundColor: "rgb(247, 247, 247)" }}
                    >
                      <thead>
                        <tr>
                          <th
                            className="tColumn"
                            style={{
                              color:"#0c2a4d",
                              fontWeight: "bold",
                              fontSize: "22px",
                              width: "150px",
                            }}
                            scope="col"
                          >
                            Product Name
                          </th>
                          <th
                            className="tColumn"
                            style={{
                              color:"#0c2a4d",
                              fontWeight: "bold",
                              fontSize: "22px",
                              width: "450px",
                            }}
                            scope="col"
                          >
                            Product Category
                          </th>
                          <th
                            className="tColumn"
                            style={{
                              color:"#0c2a4d",
                              fontWeight: "bold",
                              fontSize: "22px",
                              width: "150px",
                            }}
                            scope="col"
                          >
                            Salary
                          </th>
                          <th
                            className="tColumn"
                            style={{
                              color:"#0c2a4d",
                              fontWeight: "bold",
                              fontSize: "22px",
                              width: "500px",
                            }}
                            scope="col"
                          >
                            Registered Date
                          </th>
                        </tr>
                      </thead>
                      <tbody className="table-row" >
                        {products.map((product) => (
                          <tr key={product._id} style={{lineHeight:"50px"}}>
                            <td >
                              <b> {product.name}  </b> <hr/>
                            </td>
                            <td>
                              <b> {product.category} </b><hr/>
                            </td>
                            <td>
                              <b> {product.description} </b><hr/>
                            </td>
                            <td>
                              <b>{product.price}</b><hr/>
                            </td>
  
                            <td>
                              <button
                                className="removebtn"
                                onClick={() => deleteProduct(product._id)}
                              >
                                Remove
                              </button>
                            </td>
                            <td>
                              <button
                                className="editbtn"
                                
                              >
                                Edit
                              </button>
                            </td>
                            
                          </tr>
                        ))}

                        
                      </tbody>
                    </table>
                    
                  </div>
                
             
          
                        

                    
    )

}

export default ProductEditDelete