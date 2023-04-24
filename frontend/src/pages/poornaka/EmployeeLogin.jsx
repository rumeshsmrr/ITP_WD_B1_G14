import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/styles.css";

export default function EmployeeLogin() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const loginHandle = async (e) => {
    e.preventDefault();

    await axios

      .post("/api/user/login", {
        username,
        password,
      })
      .then((response) => {
        console.log("res.data", response);
        localStorage.setItem("user", JSON.stringify(response.data.data));
        navigate("/employeeDashboard");
      })
      .catch((err) => {
        console.log("err> ", err);
        alert(err.response.data.msg);
      });
  };
  return (
    <div>
      <div className="container">
        <div className="admin-card">
          <div className="card-title">
            <center>
              <text>Employee Login</text>
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
