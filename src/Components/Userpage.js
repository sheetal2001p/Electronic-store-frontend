import React from 'react'
import Userheader from "./Userheader"
import Userproduct from "./Userproducts"
import Footer from "./Footer"
import {useEffect} from "react"
import {useHistory} from "react-router-dom"


export default function Userpage() {
    const history = useHistory();
    useEffect(() => {
        if(!JSON.parse(localStorage.getItem("isLoggedIn"))){
            history.push("/");
       }
        else if (localStorage.getItem("userType")==="admin"){
           history.push("/admin");
        }
    }, [])
    return (
        <div className="userpage">
            <Userheader/>
            <Userproduct/>
            <Footer/>
        </div>
    )
}
