import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/styles.css";

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  

  const markAttendance = () => {
    const confirm = window.confirm("Are you sure you want to mark attendance?");
    if (confirm) {
      axios
        .post("/api/attendance", {
          userID: user._id,
        })
        .then((res) => {
          console.log("res>>> ", res);
        })
        .catch((err) => {
          console.log("err>>> ", err);
        });
    }
  };

  return (
    <header id="main-header">
      <div className="header-container">
        <div className="logo">
          <a href="/adminAndEmployee">
            <img src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1679505472/logoLarge_n8s9ct.png" />
          </a>
          <h1 className="admin-text">Guident Computers</h1>
        </div>

        <nav id="navbar">
          <ul>
            
        
          </ul>
        </nav>
      </div>
    </header>
  );
}