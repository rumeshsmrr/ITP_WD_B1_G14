import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../common/footer/Footer";
import Navbar from "./Navbar";
import "./styles/profile.css";

const initialState = {
  err: "",
  success: "",
};

export default function EmployeeDashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div style={{ height: "100vh" }}></div>
      <div className="container">
        <div className="all_cards">
          <div className="list">
            <div class="gallery">
              <Link to="/allOrder">
                <img src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1680902333/icons8-purchase-order-100_xer83z.png" />
                Order Management
              </Link>
            </div>

            <div class="gallery">
              <a href="">
                <img src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1680858625/icons8-request-service-100_u7mfge.png" />
                Service Management
              </a>
            </div>

            <div class="gallery">
              <a href="">
                <img src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1680858091/icons8-new-product-100_b22fsc.png" />
                Product Management
              </a>
            </div>

            <div class="gallery">
              <a href="">
                <img src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1680858831/icons8-delivery-100_kin9la.png" />
                Deliver Management
              </a>
            </div>

            <div class="gallery">
              <Link to="/supplier">
                <img src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1680859084/icons8-supplier-100_pnhc4w.png" />
                Supplier Management
              </Link>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
