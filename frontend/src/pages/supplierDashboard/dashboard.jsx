import React from 'react'
import "./dashboard.css";
import { Link } from "react-router-dom";
import Footer from "../../common/footer/Footer"
import Nav from "../../common/header/Navbar"
import Search from "../../common/header/Search"

const dashboard = ({CartItem}) => {
    
  return (
    
    <div>
        <Search CartItem={CartItem}/>
        <Nav/>
       
        <div className='H_Topic'>SUPPLIER MANAGEMENT DASHBOARD</div>

        {/* shadow Boxex 2 */}

        <div className='H_body'>
            <div className='H_container'>

                <div className='H_box1'>
                    <span></span>
                    <div className='H_content'>
                        <h1><Link to="/AddSupplier">Add Supplier</Link></h1>
                        <h1><Link to="/AddSupplieritem">Add Supplier Items</Link></h1>
                        <h1><Link to="/Purchasingitems">Purchasing Items</Link></h1>
                        <h1><Link to="/Paymentfororder">Payment For Order</Link></h1>
                        {/* <h1><Link to="/Previousorderreport">Previous Order Report</Link></h1> */}
                    </div>
                </div>

                <div className='H_box2'>
                    <span></span>
                    <div className='H_content'>
                    <img src='https://res.cloudinary.com/dkf222zei/image/upload/v1681121571/supplier_oj6nac.png'></img>
                    
                    </div>
                </div>

            </div>
        </div>
        <Footer/>
    </div>
    
  )
}
export default dashboard