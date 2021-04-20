import React from 'react'
import img1 from "../images/1.jpg"
import img2 from "../images/2.jpg"
import img3 from "../images/3.jpg"
import img4 from "../images/4.jpg"
import img5 from "../images/5.png"

function Imagesslider() {
    return (
        <div className="slider-container">

        <div className="main-slider">

                <img src={img1} id="img1" alt="" />
                <img src={img2} id="img2"  alt=""/>
                 <img src={img3} id="img3" alt=""/>
                 <img src={img4} id="img4" alt="" />
                 <img src={img5} id="img5" alt="" />
       </div>
       {/* <hr/> */}
        </div>
    )
}

export default Imagesslider
