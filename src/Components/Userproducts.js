import React from 'react'
import tv from "../images/TV.jpg"
import { useState, useEffect } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { Spinner } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Userproducts() {
    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(false);


    useEffect(() => {
        fetchProducts();
    }, []);
    const fetchProducts = async (req, res) => {
        try {
            const res = await axios.get("http://localhost:4000/getProducts");
            setProducts(res.data);
        }
        catch (e) {
            console.log("Error:", e);
        }
    }


    const placeOrder = async (_id) => {

        try {
            const productId = _id;
            const token = localStorage.getItem("token");
            setLoader(true);
            const res = await axios.post(`http://localhost:4000/placeorder?product=${productId}`, {}, { headers: { "Authorization": `Bearer ${token}` } });
            // console.log(res);
            if (res.error) {
                setLoader(false)
                toast.error('Error! try again');
            }
            else {
                setLoader(false)
                toast.info('Ordered Successfully! See Myorders');
            }
        }
        catch (e) {
            console.log("Error:", e);
        }
    }


    const addtoWishlist = async (_id) => {
        try {
            const productId = _id;
            const token = localStorage.getItem("token");
            const res = await axios.post(`http://localhost:4000/addtowishlist?product=${productId}`, {}, { headers: { "Authorization": `Bearer ${token}` } });
            if (res.error) {
                // setLoader(false)
                toast.error('🦄 Error! try again');
            }
            else {
                // setLoader(false)
                toast.success('Added to Wishlist');
            }
        }
        catch (e) {
            console.log("Error:", e);
        }
    }


    return (
        <div class="user-product-cards">
            <div id="home">
                <h2>Featured products</h2>
                <div className="cards">
                    {
                        products.map((product) => {
                            if (product.type === "featured") {
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
                                                <button className="card-btns" onClick={() => placeOrder(product._id)}>Order Now
                                                {(loader ? (<Spinner
                                                        as="span"
                                                        animation="border"
                                                        size="sm"
                                                        role="status"
                                                        aria-hidden="true"
                                                    />) : null)}</button>
                                                <button className="addtowishlist card-btns" onClick={() => addtoWishlist(product._id)}>Add to wishlist</button>
                                            </div>
                                        </div>
                                    </div>

)
                            }

                        })
                    }
                </div>
            </div>
            <div id="LC">
                <h2>Laptops and Computers</h2>
                <div className="cards">
                    {
                        products.map((product) => {
                            if (product.type === "LC") {
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
                                                <button className="card-btns" onClick={() => placeOrder(product._id)}>Order Now</button>
                                                <button className="addtowishlist card-btns" onClick={() => addtoWishlist(product._id)}>Add to wishlist</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
            <div id="HA">
                <h2>Home Appliances</h2>
                <div className="cards">
                    {
                        products.map((product) => {
                            if (product.type === "HA") {
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
                                                <button className="card-btns" onClick={() => placeOrder(product._id)}>Order Now</button>
                                                <button className="addtowishlist card-btns" onClick={() => addtoWishlist(product._id)}>Add to wishlist</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
            <div id="MT">
                <h2>Mobile and Tablets</h2>
                <div className="cards">
                    {
                        products.map((product) => {
                            if (product.type === "MT") {
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
                                                <button className="card-btns" onClick={() => placeOrder(product._id)}>Order Now</button>
                                                <button className="addtowishlist card-btns" onClick={() => addtoWishlist(product._id)}>Add to wishlist</button>
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

