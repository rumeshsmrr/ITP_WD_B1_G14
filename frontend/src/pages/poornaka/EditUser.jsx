import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../../common/footer/Footer";
import "./styles/styles.css";

export default function EditUser() {
  //get state values
  const { state } = useLocation();

  const [salary, setSalary] = useState(state.salary);
  const [role, setRole] = useState(state.role);

  const { _id } = state;

  const navigate = useNavigate();

  const registerHandle = async (e) => {
    e.preventDefault();

    await axios
      .put(`/api/user/updateUser/${_id}`, {
        salary,
        role,
      })
      .then((response) => {
        console.log("res.data", response);
        navigate("/adminDashboard");
      })
      .catch((err) => {
        console.log("err> ", err.response.data.msg);
      });
  };

  return (
    <div style={{backgroundImage:"url(https://res.cloudinary.com/dwcxwpn7q/image/upload/v1682448274/Untitled-2_kws0wf.png)",
    backgroundSize:"Cover", backgroundRepeat: "no-repeat", position:"absolute", width: "1400px", height:"800px"}}>
      <Navbar/>
      <div className="container">
        <div className="addUser-card">
          <div className="card-title">
            <center>
              <text>Edit User</text>
            </center>
          </div>
          <form onSubmit={registerHandle}>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
              style={{width:"100%"}}
                type="text"
                className="form-control"
                value={state.userName}
                disabled
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Salary</label>
              <input
              style={{width:"100%"}}
                type="currency"
                className="form-control"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Role</label>
              <select
                name="bank"
                className="select"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="">Select a User Role</option>
                <option value="Stock Keeper">Stock Keeper</option>
                <option value="Cashier">Cashier</option>
                <option value="Technician">Technician </option>
                <option value="Delivery Manager">Delivery Manager </option>
                <option value="Supplier Manager">Supplier Manager </option>
                <option value="Product Manager">Product Manager </option>
                <option value="Order Manager">Order Manager </option>
                <option value="Service Manager">Service Manager </option>
                
              </select>
            </div>

            <center>
              <button type="submit" className="btn btn-primary ">
                Edit user
              </button>
            </center>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
