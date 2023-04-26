import React from "react";
import "./styles/home.css";



export default function Home() {
  return (

    <div style={{backgroundColor:"#f5f5f5",backgroundSize:"Cover",
     backgroundRepeat: "no-repeat", position:"absolute", width: "100%", height:"100%"}}>
      
      <div className>

      <br/>    <br/>    <br/>
          <img style={{width:"500px", height: "170px"}} className="home_logo" src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1679505472/logoBrandLarge_ke1csc.png"/>
          

          <br></br>
          <br></br>
            <p className="text-center">
              Welcome to Guident Computers. Please select your login type.
            </p>

            <br/><br/>
            <div className="info">  
              <a href="/employee">
                Employee
              </a>
              <br/><br/>
              <a href="/admin" className="info-admin">
                Admin
              </a>
            </div>
        </div>
      </div>
  );
}
