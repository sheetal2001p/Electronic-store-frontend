import React from 'react'
import note from "../images/note.png"
import cart from "../images/6.png"
import { useState, useEffect } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import {useHistory} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Mywishlist() {
    const [mywishlist, setMywishlist] = useState([]);
    const history = useHistory();

    useEffect(() => {
        getWishlist();
        if(!JSON.parse(localStorage.getItem("isLoggedIn"))){
            history.push("/");

        }
        else if (localStorage.getItem("userType")==="admin"){
           history.push("/admin");
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getWishlist = async () => {

        const token = localStorage.getItem("token");

        try {
            const res = await axios.get("https://sheetal-electronic-store.herokuapp.com/mywishlist", { headers: { "Authorization": `Bearer ${token}` } });
            setMywishlist(res.data);
        }
        catch (e) {
            console.log("Error:", e);
        }
    }

    const deletefromWishlist = async (_id) => {
        console.log(_id);

        try {
            const res = await axios.delete(`https://sheetal-electronic-store.herokuapp.com/deletefromWishlist/${_id}`);
            getWishlist();
        }
        catch (e) {
            console.log("Error24:", e);
        }
    }

    
const placeOrder = async(item)=>{
    
    try {
        const productId = item.product._id;
        const token = localStorage.getItem("token");
        const res = await axios.post(`https://sheetal-electronic-store.herokuapp.com/placeorder?product=${productId}`,{},{headers:{"Authorization":`Bearer ${token}`}});
        // console.log(res);
        deletefromWishlist(item._id)
        if (res.error) {
            // setLoader(false)
            toast.error(' Error! try again');
        }
        else {
            // setLoader(false)
            toast.success('Ordered Successfully! See Myorders');
        }
    }
    catch (e) {
        console.log("Error:", e);
    }
} 


    return (
        <div className="wishlist">
            <div className="wishlist-heading">
                <img src={note} alt="img"></img>
                <h1>My Wishlist</h1>
                <img src={cart} alt="img"></img>
            </div>
            {

                mywishlist.map((item) => {
                    return (
                        <div className="items-container">
                            <div className="item-name">
                                <p>{item.product.name}</p>
                            </div>
                            <div className="item-btns">
                                <button className="order" onClick={() => placeOrder(item)}>Order</button>
                                <button id="remove" onClick={() => deletefromWishlist(item._id)}>X</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
