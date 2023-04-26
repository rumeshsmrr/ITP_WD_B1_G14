import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/styles.css";


export default function AdminLogin() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const loginHandle = async (e) => {
    e.preventDefault();
    console.log("username", username);
    console.log("password", password);

    await axios
      .post("/api/user/login", {
        username,
        password,
      })
      .then((response) => {
        console.log("res.data", response);

        localStorage.setItem("user", JSON.stringify(response.data.data));

        navigate("/adminDashboard");
      })
      .catch((err) => {
        console.log("err> ", err);
        alert(err.response.data.msg);
      });
  };


  return (
    <div style={{backgroundImage:"url(https://res.cloudinary.com/dwcxwpn7q/image/upload/v1682448274/Untitled-2_kws0wf.png)",
    backgroundSize:"Cover", backgroundRepeat: "no-repeat", position:"absolute", width: "100%", height:"100%"}}>

      <div className="container" >
        <div className="admin-card" >
          <div className="card-title">
            <center>
              <text>Admin Login</text>
            </center>
          </div>
          <form onSubmit={loginHandle}>
            <div className="mb-3">
              <label className="form-label">Username: </label>
              <input
                type="text"
                className="login-input"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password: </label>
              <input
                type="password"
                className="login-input"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <center>
              <button type="submit" className="btn btn-primary ">
                Login
              </button>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
}
