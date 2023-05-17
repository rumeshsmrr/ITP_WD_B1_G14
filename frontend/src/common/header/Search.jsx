import React from "react";
import logo from "../../components/assets/images/logoAndBrand.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Search = () => {

  const [products, setProducts] = useState([]);

  const getProducts = async() => {
    const {data} = await axios.get("http://localhost:8070/api/products/")
    setProducts(data)
  }

  const searchHandle = async (event) => {

    let key = event.target.value
    if(key){
        let result = await fetch(`/api/products/search/${key}`)
        result = await result.json()
        if(result){
            setProducts(result)
        }

    }else{
        getProducts()
    }

    

}

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
