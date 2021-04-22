import React from 'react'
import { Link } from "react-router-dom";
// import { Link } from "react-scroll"
import Header from "./Header"

export default function Userheader() {
    const changeNavigation =()=>{
        var x = document.getElementById("sub-menu");
        if (x.className === "navbar") {
          x.className = "responsive";
          console.log(x.className)
        } else {
          x.className = "navbar";
        }
    }
    return (
        <div>
           <Header/>
            <nav id="sub-menu" className="navbar">
            <i class="fa fa-bars navbar-icon" onClick={changeNavigation}></i>

                <Link to="home" className="nav-links" >Home</Link>
                <Link to="LC" className="nav-links" >Laptops and Computers</Link>
                <Link to="HA" className="nav-links" >Home Appliances</Link>
                <Link to="MT" className="nav-links" >Mobiles and Tablets</Link>
                <div className="right">
                    <Link to="/mywishlist" id="wishlist-btn" className="btn">My Wishlist</Link>
                    <Link to="/myorders" id="order-btn" className="btn">My Orders</Link>
                </div>
            </nav>
        </div>
    )
}
