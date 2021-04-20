import React from 'react'
import tv from "../images/TV.jpg"
import { useState, useEffect } from "react"
import axios from "axios"
import {useHistory} from "react-router-dom"

function Myorders() {
    const [myorders, setMyorders] = useState([]);
    const history = useHistory();

    useEffect(() => {
        getmyOrders();
        if(!JSON.parse(localStorage.getItem("isLoggedIn"))){
            history.push("/");

        }
        else if (localStorage.getItem("userType")==="admin"){
           history.push("/admin");
        }
    }, []);

    const getmyOrders = async () => {
        const token = localStorage.getItem("token");

        try {
            const res = await axios.get("http://localhost:4000/myOrders", { headers: { "Authorization": `Bearer ${token}` } });
            setMyorders(res.data);
        }
        catch (e) {
            console.log("Error:", e);
        }
    }
    const deleteItem = async (_id) => {
        try {
            const res = await axios.delete(`http://localhost:4000/deleteOrder/${_id}`);
            getmyOrders();        }
        catch (e) {
            console.log("Error:", e);
        }

    }

    return (
        <div>
            <header>
                <div className="myorders-header">
                    <h1>My Orders</h1>
                </div>
            </header>
            <div className="myorders">

                {

                    myorders.map((order) => {
                        return (

                            <div className="order-container">
                                <img src={tv} />
                                <div>
                                    <p>{order.product.name}</p>
                                    <p>{order.createdAt}</p>
                                </div>
                                <div>
                                    <button id="return-order" className="btn" onClick={()=>deleteItem(order._id)}>Return order</button>
                                </div>
                            </div>
                        )
                    })


                }

            </div>
        </div>
    )
}

export default Myorders
