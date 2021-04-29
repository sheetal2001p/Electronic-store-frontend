import React from 'react'
import { Link } from "react-scroll"
import Header from "./Header"
import UserheaderButtons from "./UserheaderButtons"
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
                    <UserheaderButtons/>
                </div>
            </nav>
        </div>
    )
}
