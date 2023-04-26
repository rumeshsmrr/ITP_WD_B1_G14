import axios from "axios";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../common/footer/Footer";
import Navbar from "./Navbar";
import "./styles/profile.css";
import generatePDF from "./utils/UserReport";

export default function AdminDashboard() {
    const [request, setRequest] = useState([]);
    const [startDate, setStartDate] = useState();
    const user = JSON.parse(localStorage.getItem("user"));
  
    const navigate = useNavigate();
  
    useEffect(() => {
      if (!user.systemAdmin) {
        navigate("/");
      }
      axios
        .get("api/user/allusers")
        .then((res) => {
          setRequest(res.data.existingUser);
        })
        .catch((err) => {
          alert(err.message);
        });
    }, []);
  
    //Add new user
    const addUser = () => {
      navigate("/addUser");
    };
  
    const onDelete = (_id) => {
      //confirm dialog box to delete
      if (window.confirm("Are you sure you want to delete this account?")) {
        axios.delete(`api/user/${_id}`).then(() => {
          window.location.href = "/adminDashboard";
        });
      }
    };
  
    //Edit user
    const onEdit = (data) => {
      navigate("/editUser", { state: data });
    };
  
    const onAttendance = (data) => {
      navigate("/viewAttendance", { state: data });
    };
  
    const onDownload = (yearDate) => {
      if (!yearDate) {
        alert("Please select a year and month");
        return;
      }
      let mm = String(yearDate.getMonth() + 1).padStart(2, "0");
      let yyyy = yearDate.getFullYear();
      yearDate = yyyy + "-" + mm;
      console.log(yearDate);
      try {
        axios.get(`api/user/monthlyReport/${yearDate}`).then((res) => {
          console.log(res.data.userRecord);
          generatePDF(res.data.userRecord);
        });
      } catch (err) {
        alert(err.message);
      }
    };
  
    //search bar functions
    const filterData = (users, searchkey) => {
      const result = users.filter(
        (Users) =>
          Users.userName.toLowerCase().includes(searchkey) ||
          Users.userName.includes(searchkey) ||
          Users.userName.toUpperCase().includes(searchkey) ||
          Users.role.toLowerCase().includes(searchkey) ||
          Users.role.toUpperCase().includes(searchkey) ||
          Users.role.includes(searchkey)
      );
  
      setRequest(result);
    };
  
    function handleSearch(e) {
      const searchkey = e.currentTarget.value;
  
      axios.get("api/user/allusers").then((res) => {
        if (res.data.success) {
          filterData(res.data.existingUser, searchkey);
        }
      });
    }
    return (
      <div style={{backgroundImage:"url(https://res.cloudinary.com/dwcxwpn7q/image/upload/v1682448274/Untitled-2_kws0wf.png)",
      backgroundSize:"Cover", backgroundRepeat: "no-repeat", position:"absolute", width: "100%", height:"100%"}}>
        <div>
          <div>
            <div></div>
  
            <Navbar />
            <br/>
            <h2 className="profhead3">Manage Employee Accounts</h2>
            <div className="dateinput">
              <div className="dateselector" style={{ display: "flex" }}>
                <p>Select Year and Month :</p>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  dateFormat="yyyy/MM"
                  showMonthYearPicker
                />
              </div>
            </div>
            <button
              className="downloadbtn"
              onClick={() => {
                onDownload(startDate);
              }}
            >
              Genarate Document
            </button>
            <div style={{ display: "flex" }}>
              <div className="admin">
                <div className="adminT">
                  <br></br>
  
                  {/* search bar */}
                  <div className="">
                    <div className="row">
                      <div style={{ display: "flex" }}>
                        <div className="searchicon">
                        <img src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1682276075/icons8-search-50_ac6wpy.png"/>
                        </div>
                        <div >
                         
                          <input
                            className="form-control"
                            type="search"
                            placeholder="Search by username"
                            name="searchQuery"
                            onChange={handleSearch}
                          ></input>
                        </div>
                        <div className="addBtnContainer">
                          <button className="adduserbtn" onClick={addUser}>
                            Add User
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
                            Username
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
                            Role
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
                        {request.map((data, index) => (
                          <tr key={index} style={{lineHeight:"50px"}}>
                            <td >
                              <b> {data.userName} </b> <hr/>
                            </td>
                            <td>
                              <b> {data.role} </b><hr/>
                            </td>
                            <td>
                              <b> {data.salary} </b><hr/>
                            </td>
                            <td>
                              <b>{data?.savedDate}</b><hr/>
                            </td>
  
                            <td>
                              <button
                                className="removebtn"
                                onClick={() => onDelete(data._id)}
                              >
                                Remove
                              </button>
                            </td>
                            <td>
                              <button
                                className="editbtn"
                                onClick={() => onEdit(data)}
                              >
                                Edit
                              </button>
                            </td>
                            <td>
                              <button
                                className="attendbtn"
                                onClick={() => onAttendance(data._id)}
                              >
                                Attendance
                              </button>
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
          </div>
          <Footer />
        </div>
      </div>
    );
  }
  