import React from 'react'
import slogo from "../images/S-logo.png"
import { Link } from "react-router-dom";
// import { Link } from "react-scroll"
import Header from "./Header"

export default function Userheader() {
    
    return (
        <div>
           <Header/>
            <nav id="sub-menu">
                <Link  className="sub-menu-tabs" to="home">Home</Link>
                <Link  className="sub-menu-tabs" to="LC">Laptops and Computers</Link>
                <Link  className="sub-menu-tabs" to="HA">Home Appliances</Link>
                <Link  className="sub-menu-tabs" to="MT">Mobiles and Tablets</Link>
                <div className="right">
                    <Link to="/mywishlist" id="wishlist-btn" className="btn">My Wishlist</Link>
                    <Link to="/myorders" id="order-btn" className="btn">My Orders</Link>
                </div>
            </nav>
        </div>
    )
}
