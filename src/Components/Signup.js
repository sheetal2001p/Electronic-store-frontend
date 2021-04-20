import axios from 'axios'
import React from 'react'
import { Link ,Redirect,useHistory} from "react-router-dom"
import { useState } from "react"
import { toast } from "react-toastify"
import { Spinner } from "react-bootstrap";


function Signup() {
    const [loader, setLoader] = useState(false);
       const history = useHistory();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        address: ""
    });

    const changeFormData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value });
    }

    const createUser = async () => {

        try {
            setLoader(true);
            const res = await axios.post("http://localhost:4000/user/signup", formData);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("userType",res.data.user.userType);

            if (res.error) {
                setLoader(false)
                localStorage.setItem("isLoggedIn", false);
            }
            else {
                setLoader(false)
                localStorage.setItem("isLoggedIn", true);

                toast.success('Signup Successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            if (!localStorage.getItem("isLoggedIn")) {
                history.push("/login")
            }
            else if (res.data.user.userType === "admin") {
                history.push("/admin")
            }
            else {
                history.push("/userpage")
            }
        }
        catch (error) {
            setLoader(false)
            toast.error('🦄 Signup failed!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    return (
        <div className="signup-body">
            <div className="login-signup-page">

                <form>
                    <h1>SignUp</h1>

                    <input type="text" name="firstName" placeholder="FirstName" onChange={changeFormData} />
                    <input type="text" name="lastName" placeholder="LastName" onChange={changeFormData} />
                    <input type="email" name="email" placeholder="Email" onChange={changeFormData} />
                    <input type="password" name="password" placeholder="password" onChange={changeFormData} />
                    <input type="text" name="address" placeholder="Address" onChange={changeFormData} />
                    <Link onClick={createUser} id="login-signup-btn"  style={{ textDecoration: 'none' }}>Signup
                     {(loader ? (<Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />) : null)}</Link>
                    <p>Already have an account?<Link to="/login" className="linking" style={{ textDecoration: 'none' }}>login</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Signup
