import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import "react-datepicker/dist/react-datepicker.css";
import Footer from "../../common/footer/Footer";
import Navbar from "../poornaka/Navbar"



export default function ProductManager2() {

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
    const params = useParams()

    const getProducts = async() => {
    const {data} = await Axios.get("/api/products/")
    setProducts(data)
  }

  console.log(products);

    useEffect(() => {
        getProducts()
    } , [])

    // const [request, setRequest] = useState([]);
    // const [startDate, setStartDate] = useState();
    // const user = JSON.parse(localStorage.getItem("user"));
  
    // const navigate = useNavigate();
  
    // useEffect(() => {
    //   if (!user.systemAdmin) {
    //     navigate("/");
    //   }
    //   axios
    //     .get("api/user/allusers")
    //     .then((res) => {
    //       setRequest(res.data.existingUser);
    //     })
    //     .catch((err) => {
    //       alert(err.message);
    //     });
    // }, []);
  
    // //Add new user
    // const addUser = () => {
    //   navigate("/addUser");
    // };
  
    // const onDelete = (_id) => {
    //   //confirm dialog box to delete
    //   if (window.confirm("Are you sure you want to delete this account?")) {
    //     axios.delete(`api/user/${_id}`).then(() => {
    //       window.location.href = "/adminDashboard";
    //     });
    //   }
    // };
  
    // //Edit user
    // const onEdit = (data) => {
    //   navigate("/editUser", { state: data });
    // };
  
    // const onAttendance = (data) => {
    //   navigate("/viewAttendance", { state: data });
    // };
  
    // const onDownload = (yearDate) => {
    //   if (!yearDate) {
    //     alert("Please select a year and month");
    //     return;
    //   }
    //   let mm = String(yearDate.getMonth() + 1).padStart(2, "0");
    //   let yyyy = yearDate.getFullYear();
    //   yearDate = yyyy + "-" + mm;
    //   console.log(yearDate);
    //   try {
    //     axios.get(`api/user/monthlyReport/${yearDate}`).then((res) => {
    //       console.log(res.data.userRecord);
    //       generatePDF(res.data.userRecord);
    //     });
    //   } catch (err) {
    //     alert(err.message);
    //   }
    // };
  
    // //search bar functions
    // const filterData = (users, searchkey) => {
    //   const result = users.filter(
    //     (Users) =>
    //       Users.userName.toLowerCase().includes(searchkey) ||
    //       Users.userName.includes(searchkey) ||
    //       Users.userName.toUpperCase().includes(searchkey) ||
    //       Users.role.toLowerCase().includes(searchkey) ||
    //       Users.role.toUpperCase().includes(searchkey) ||
    //       Users.role.includes(searchkey)
    //   );
  
    //   setRequest(result);
    // };
  
    // function handleSearch(e) {
    //   const searchkey = e.currentTarget.value;
  
    //   axios.get("api/user/allusers").then((res) => {
    //     if (res.data.success) {
    //       filterData(res.data.existingUser, searchkey);
    //     }
    //   });
    // }
    return (
        <>
      <div style={{backgroundImage:"url(https://res.cloudinary.com/dwcxwpn7q/image/upload/v1682448274/Untitled-2_kws0wf.png)",
      backgroundSize:"Cover", backgroundRepeat: "no-repeat", position:"absolute", width: "100%", height:"100%"}}>
        <div>
          <div>
            <div></div>
  
            <Navbar />
            <br/>
            <h2 className="profhead3">Manage Products</h2>
            
            
              
            <div style={{ display: "flex" }}>
              <div className="admin">
                <div className="adminT">
                  <br></br>
                       
                        <div className="addBtnContainer">
                          <button className="adduserbtn" >
                            Add Product 
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <br />
                  <br />
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
                            Product Price
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
                          {/* <td>
                            <b> {product.description} </b><hr/>
                          </td> */}
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
                              <Link to={`/editProduct/${product._id}`}>
                              <button
                                className="editbtn"
                                
                              >
                                Edit
                              </button>
                              </Link>
                            </td>
    
                          </tr>
                        ))}

                        <br/>
                      </tbody>
                    </table>
                    <br/><br/>
                  </div>
                </div>
                <br></br>
              </div>
            </div>
          
      </>
    );
  }
  