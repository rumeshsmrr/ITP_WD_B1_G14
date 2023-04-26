import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid2">
          <div className="box">
            <a href="/" className="shop-name">Guident Computers</a>
            
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </p>
            <div className="icon d_flex">
              <div className="img d_flex">
                <i class="fa-brands fa-google-play"></i>
                <span>Google Play</span>
              </div>
              <div className="img d_flex">
                <i class="fa-brands fa-app-store-ios"></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className="box">
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="box">
            {/* <h2>Customer Care</h2> */}
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>
                <Link to="/adminAndEmployee"> Admin and employee login </Link>
              </li>
            </ul>
          </div>
          <div className="box">
            <h2>Contact Us</h2>
            <ul>
              <li>Pitipana Town, Homagama, Sri Lanka </li>
              <li>Email: gComputers.help@gmail.com</li>
              <li>Phone: +94 779011093</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
