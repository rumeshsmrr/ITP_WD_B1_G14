import { useEffect , useState } from "react"
import {jsPDF} from "jspdf";

import { Link, useParams } from "react-router-dom"
import Axios from "axios"
import Navbar from "./Navbar";
import 'jspdf-autotable'
import "./styles/prof.css";



const ProductEditDelete  = () => {

    const deleteProduct = async  (id) => {
        console.log(id)
        let result = await fetch(`http://localhost:8070/api/products/${id}` , {
            method: "DELETE" ,
        })

        result = await result.json()
        if(result){
            getProducts()
        }
    }

    const [products , setProducts] = useState([])
    const params = useParams()

    const getProducts = async() => {
    const {data} = await Axios.get("http://localhost:8070/api/products/")
    setProducts(data)


    }

    const exportPDF = async () => {

      const doc = new jsPDF({orientation : 'landscape'})
      doc.autoTable({

        html : '#edit-table'

      })
      
      doc.save("data.pdf")
    }

  console.log(products);

    useEffect(() => {
        getProducts()
    } , [])

    return(

      <div>
        
        <Navbar />
          <button className="exp-btn" onClick={exportPDF}>Export</button>
          <Link to={`/createProduct`}>
          <button className="add-btn">Add
          </button>
          </Link>
          <table border ="1" className="r-table" id="edit-table">
            <thead>
              <tr>
                <th width="10%" style={{textAlign : "center"}}>Product Name</th>
                <th width="10%"  style={{textAlign : "center"}}>Product Category</th>
                <th width="10%"  style={{textAlign : "center"}}>Product Price</th>
                <th width="10%"  style={{textAlign : "center"}}>Product Actions</th>
              </tr>
            </thead>
            <tbody>

              {products.map((product) => (

                  <tr>
                    <td style={{textAlign: "center"}}>{product.name}</td>
                    <td style={{textAlign: "center"}}>{product.category}</td>
                    <td style={{textAlign: "center"}}>{product.price}</td>
                    <td >
                      <button className="removebtn" style={{alignContent : "center",
                      marginLeft : "100px"}}
                      onClick={() => deleteProduct(product._id)}

                      >
                        Remove
                      </button>
                      <Link to={`/editProduct/${product._id}`}>
                      <button className="editbtn" style={{alignContent : "center"}}
                      
                      >
                        Edit
                      </button>
                      </Link>
                    </td>
                    
                  </tr>

              ))}

            </tbody>
            
            

          </table>

      </div>
      // <div>
      
      //             <div className="">
                    
      //               <table
      //                 className="table"
      //                 style={{ backgroundColor: "rgb(247, 247, 247)", borderRadius: "10px",
      //                 border:"10px black"
      //               }}
      //                 // style={{ backgroundColor: "rgb(247, 247, 247)" }}
      //               >
      //                 <thead>
      //                   <tr>
      //                     <th
      //                       className="tColumn"
      //                       style={{
      //                         color:"#0c2a4d",
      //                         fontWeight: "bold",
      //                         fontSize: "22px",
      //                         width: "150px",
      //                       }}
      //                       scope="col"
      //                     >
      //                       Product Name
      //                     </th>
      //                     <th
      //                       className="tColumn"
      //                       style={{
      //                         color:"#0c2a4d",
      //                         fontWeight: "bold",
      //                         fontSize: "22px",
      //                         width: "450px",
      //                       }}
      //                       scope="col"
      //                     >
      //                       Product Category
      //                     </th>
      //                     <th
      //                       className="tColumn"
      //                       style={{
      //                         color:"#0c2a4d",
      //                         fontWeight: "bold",
      //                         fontSize: "22px",
      //                         width: "150px",
      //                       }}
      //                       scope="col"
      //                     >
      //                        Price 
      //                     </th>
      //                     <th
      //                       className="tColumn"
      //                       style={{
      //                         color:"#0c2a4d",
      //                         fontWeight: "bold",
      //                         fontSize: "22px",
      //                         width: "500px",
      //                       }}
      //                       scope="col"
      //                     >
      //                       Actions
      //                     </th>
      //                   </tr>
      //                 </thead>
      //                 <tbody className="table-row" >
      //                   {products.map((product) => (
      //                     <tr key={product._id} style={{lineHeight:"50px"}}>
      //                       <td >
      //                         <b> {product.name}  </b> <hr/>
      //                       </td>
      //                       <td>
      //                         <b> {product.category} </b><hr/>
      //                       </td>
      //                       {/* <td>
      //                         <b> {product.description} </b><hr/>
      //                       </td> */}
      //                       <td>
      //                         <b>{product.price}</b><hr/>
      //                       </td>
  
      //                       <td>
      //                         <button
      //                           className="removebtn"
      //                           onClick={() => deleteProduct(product._id)}
      //                         >
      //                           Remove
      //                         </button>
      //                       </td>
      //                       <td>
      //                         <Link to={`/editProduct/${product._id}`}>
      //                         <button
      //                           className="editbtn"
                                
      //                         >
      //                           Edit
      //                         </button>
      //                         </Link>
      //                       </td>
                            
      //                     </tr>
      //                   ))}

                        
      //                 </tbody>
      //               </table>
                    
      //             </div>
      //             </div>
                
                           
    )

}

export default ProductEditDelete