import React from 'react'
import { Link, useHistory } from "react-router-dom";
import { useState,useEffect } from "react"
import axios from "axios";
import { Spinner } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from "react-toastify"

function Login() {
    const history = useHistory();
    const [loader, setLoader] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    useEffect(() => {
        if(!JSON.parse(localStorage.getItem("isLoggedIn"))){
            history.push("/login");
       }
        else {
           history.push("/userpage");
        }
    }, []);

    const changeFormData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value });
        // console.log(formData)
    }
    const getPage = async (req, res) => {
        try {
            setLoader(true)
            const res = await axios.post("https://sheetal-electronic-store.herokuapp.com/user/login", formData);
            // console.log(res)
            // console.log(res.data.user.userType)
            localStorage.setItem("userType",res.data.user.userType);
            localStorage.setItem("token", res.data.token);
            if (res.error) {
                setLoader(false)
                localStorage.setItem("isLoggedIn", false);
            }
            else {
                setLoader(false)
                toast.success('Login Successfully!');
                localStorage.setItem("isLoggedIn", true);
            }

            if (!localStorage.getItem("isLoggedIn")) {
                history.push("/login")
            }
            else if (localStorage.getItem("userType") === "admin") {
                history.push("/admin")
            }
            else {
                history.push("/userpage")
            }
        }
        catch (e) {
            console.log("Error", e);
            setLoader(false)
            localStorage.setItem("isLoggedIn", false);

            toast.error(' Login failed!');
        }
    }
    const keyPressed = ()=>{
         console.log("pressed")
    }

    return (
        <div className="login-body">
            <div className="login-signup-page">

                <form method="post">
                    <h1>Login</h1>

                    <input type="email" name="email" placeholder="Email" onChange={changeFormData} />
                    <input type="password" name="password" placeholder="password" onChange={changeFormData} />
                    <Link id="login-signup-btn" onClick={getPage} to="/login" onKeyPress={keyPressed} style={{ textDecoration: 'none' }}>Login
                    {(loader ? (<Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />) : null)}</Link>
                    <p>No Account?<Link to="/signup" className="linking" style={{ textDecoration: 'none' }}>Signup</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login;