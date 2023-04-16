import React from "react";
import "./styles/home.css";


export default function Home() {
  return (
    <div>
      
      <div className="container-fluid banner">
        <div className="row">
          <div className="col-md-8 offset-md-2 info">
          <img className="home_logo" src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1679505472/logoBrandLarge_ke1csc.png"/>

          <br></br>
          <br></br>
            <h1 className="text-center">Guident Computers</h1>
            <p className="text-center">
              Welcome to Guident Computers. Please select your login type.
            </p>
            <div>  
              <a href="/employee" className="btn btn-md text-center">
                Employee
              </a>
              <a href="/admin" className="btn btn-md text-center">
                Admin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
