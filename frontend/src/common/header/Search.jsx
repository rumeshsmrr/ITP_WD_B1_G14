import React from "react";
import logo from "../../components/assets/images/logoAndBrand.png";
import { Link } from "react-router-dom";

const Search = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width ">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>

          <div>
            {/* <i className="fa fa-search"></i>
            <input type="text" placeholder="Search and hit enter..." />
            <span>All Category</span> */}
            <h1
              style={{
                fontSize: "18px",
                color: "#67bae4",
                letterSpacing: "5px",
                fontWeight: "800",
              }}
            >
              {" "}
              WELCOME TO GUIDENT COMPUTERS
            </h1>
          </div>

          <div className="icon f_flex width">
            <i className="fa fa-user icon-circle"></i>
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
