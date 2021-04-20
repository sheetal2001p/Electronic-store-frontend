import React from 'react'

function Footer() {
    return (
        <div>
            

            <footer>
            <div className="foot">
                <div className="left-footer">
                    <h2>ABOUT</h2>
                    <p>our company</p>
                    <p>About Us</p>
                    <p>Terms of Services</p>
                </div>
                <div className="right-footer">
                    <h2>CONTACT</h2>
                    <h5>Contact Admin</h5>
                    <input type="email" placeholder="Email"/>
                    <button className="subscribe">Subscribe</button>
                </div>
                </div>

            </footer>
        </div>
    )
}


export default Footer

