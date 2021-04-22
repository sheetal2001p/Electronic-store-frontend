import React from "react";
import { Link } from "react-router-dom";
import slogo from "../images/S-logo.png"
import { useHistory } from "react-router-dom"
import { toast } from "react-toastify"
import 'bootstrap/dist/css/bootstrap.min.css';

 function Header() {
  const history = useHistory();

  const logout = () => {
    localStorage.setItem("isLoggedIn", false);
    history.push("/");
    toast.success('Logout Successfully!');
  }

  return (
    <div>
      <header>
        <div class="top">
          <div className="left">
            <img src={slogo} alt="logo" />
          </div>
          <div className="middle">
          <h1>Sheetal's Electronics Store</h1>

          </div>
          { 
          
            (JSON.parse(localStorage.getItem("isLoggedIn")) ? (<div className="right"><Link id="logout" className="login-signup-btn" onClick={logout} style={{ textDecoration: 'none' }}>Logout</Link></div>)
              : (<div className="right">
                <Link to="/login" id="login" className="log-sign-btn" style={{ textDecoration: 'none' }}>Login</Link>
                <Link to="/signup" id="signup" className="log-sign-btn" style={{ textDecoration: 'none' }}>Signup</Link>
              </div>))
          }
        </div>
      </header>
    </div>
  )
}
 export default Header;