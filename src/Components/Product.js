import React from 'react'
import tv from "../images/TV.jpg"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"

function Product() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);
    const fetchProducts = async (req, res) => {
        try {
            const res = await axios.get("http://localhost:4000/getProducts");
            setProducts(res.data);
             // setLoader(false)
            
        }
        catch (e) {
            console.log("Error:", e);
        }
    }



    return (
        <div className="products">
            <div>
                <h2>All Electronic products you need</h2>
            </div>

            <div className="product-cards-slider">
                <div className="cards">
                     {
                        products.map((product) => {
                            if (product.type === "featured"||product.type === "MT") {
                                return (
                                    <div className="card">
                                        <div>
                                            <div className="product-image">
                                                <img src={product.image} alt="product" />
                                            </div>
                                            <div id="product-description">
                                                <h6>Rs.{product.price}</h6>

                                                <p>{product.name},{product.model}</p>
                                            </div>
                                            <div>
                                                <Link className="card-btns" to="/signup" style={{ textDecoration: 'none' }}>Order Now</Link>
                                                <Link className="addtowishlist card-btns" to="/signup" style={{ textDecoration: 'none' }}>Add to wishlist</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>




        </div>
    )
}



export default Product;

