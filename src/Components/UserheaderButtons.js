import React from 'react'
import { Link } from "react-router-dom";

function UserheaderButtons() {
    return (
        <div>
            <Link to="/mywishlist" id="wishlist-btn" className="btn">My Wishlist</Link>
             <Link to="/myorders" id="order-btn" className="btn">My Orders</Link>
        </div>
    )
}

export default UserheaderButtons;
