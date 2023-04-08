import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
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
      <div style={{ height: "100vh" }}>
        <div className="container">



          <div className="options">
            <ul className="emp-nav-select">
              <li><a href="#"><img src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1680858091/icons8-new-product-100_b22fsc.png"/> <br/>
              Product Management</a></li>
              <li><a href="#"><img src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1680858625/icons8-request-service-100_u7mfge.png"/><br/>
                Service Management</a></li>
              <li><a href="#"><img src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1680858831/icons8-delivery-100_kin9la.png"/><br/>
                Delivery Management</a></li>
              <li><a href="#"><img src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1680859084/icons8-supplier-100_pnhc4w.png"/><br/>
              Supplier Management</a></li>
              <li><a href="#"><img src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1680902333/icons8-purchase-order-100_xer83z.png"/><br/>
              Order Management</a></li>
            </ul>
          </div>
          <br/>
          <div class="slider"></div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
