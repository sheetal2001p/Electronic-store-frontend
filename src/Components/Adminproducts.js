import React from 'react'
import { useState, useEffect } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { Link ,useHistory} from "react-router-dom";
import slogo from "../images/S-logo.png"


function Adminproducts() {
    const [products, setProducts] = useState([])
    const [userId, setUserId] = useState("");

    const[image,setImage] = useState("");
    const[loading,setLoading] = useState(false);

    const history = useHistory();

    const uploadImage = async(e)=>{
       const files =e.target.files;
       const data = new FormData();
       data.append('file',files[0])
       data.append('upload_preset','storeimages')
       setLoading(true);
       const res =await axios.post("https://api.cloudinary.com/v1_1/dsfynhita/image/upload",data);
       const file = res.data.secure_url;
       return file;
    }
    const [formData, setFormData] = useState({
        name: "",
        productId: "",
        price: "",
        model: "",
        qty: "",
        type: "",
        image:"",
    });

    const changeformData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value });
        console.log(formData)
    }
    useEffect(() => {
        fetchProducts();
        if(!localStorage.getItem("isLoggedIn")){
            history.push("/login");

        }
        else if (localStorage.getItem("userType")==="user"){
           history.push("/userpage");
        }
    }, []);
    const fetchProducts = async () => {
        try {
            const res = await axios.get("http://localhost:4000/getProducts");
            setProducts(res.data);
        }
        catch (e) {
            console.log("Error:", e);
        }
    }


    const addproduct = async () => {
        try {
            const res = await axios.post("http://localhost:4000/addProduct", formData);
            console.log(res);
            fetchProducts();
            setFormData({
                ...formData,
                ["name"]: "",
                ["productId"]: "",
                ["price"]: "",
                ["model"]: "",
                ["qty"]: "",
                ["type"]: "",
                ["image"]:"",

            });
            toast.success(' Product added Successfully!');
        }
        catch (e) {
            console.log("Error:", e);
        }
    }
    const deleteItem = async (_id) => {
        console.log(_id)

        try {
            const res = await axios.delete(`http://localhost:4000/deleteProduct/${_id}`);
            fetchProducts();
        }
        catch (e) {
            console.log("Error234:", e);
        }

    }
    const editProduct = (item) => {
        setFormData({
            ...formData,
            ["name"]: item.name,
            ["productId"]: item.productId,
            ["price"]: item.price,
            ["model"]: item.model,
            ["qty"]: item.qty,
            ["type"]: item.type,
            ["image"]:item.image,
        
        });
        setUserId(item._id);
    }
    const updateProduct =  async() => {
        try {
            const res = await axios.put(`http://localhost:4000/updateProduct/${userId}`, formData);
            fetchProducts();
            setFormData({
                ...formData,
                ["name"]: "",
                ["productId"]: "",
                ["price"]: "",
                ["model"]: "",
                ["qty"]: "",
                ["type"]: "",
                ["image"]:"",

            });
        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <div >
            <div id="admin-products-side">

                <div className="left">
                    <img src={slogo} alt="" />
                </div>
                <h1>All products in your store</h1>
            </div>
            <table className="orders-table product-table">
                <thead>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Model</th>
                    <th>Qty</th>
                    <th>Type</th>
                    <th>Remove product</th>
                    <th>Update Product</th>
                </thead>
                <tbody>
                    {
                        products.map((product) => {

                            return (
                                <tr>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.model}</td>
                                    <td>{product.qty}</td>
                                    <td>{product.type}</td>
                                    <td><Link onClick={() => deleteItem(product._id)}>X</Link></td>
                                    <td><button id="product-table-edit-btn" onClick={() => editProduct(product)}>Edit</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <div id="products-form">
                <h2>Add More products to your store</h2>

                <form type="post">
                  Product name : <input type="text" placeholder="Product Name" name="name" onChange={changeformData} className="products-form-input" value={formData.name} />
                  Price : <input type="text" placeholder="Price" name="price" onChange={changeformData} className="products-form-input" value={formData.price} />
                  Model : <input type="text" placeholder="Model" name="model" onChange={changeformData} className="products-form-input" value={formData.model} />
                  Qty : <input type="text" placeholder="Qty" name="qty" onChange={changeformData} className="products-form-input" value={formData.qty} />
                  Type : <input type="text" placeholder="type" name="type" onChange={changeformData} className="products-form-input" value={formData.type} />
                  Product Image : <input type="file" placeholder="Image URL" name="image" onChange={async(e)=>{
                        const url = await uploadImage(e);
                        setFormData({...formData,["image"]:url});
                        console.log("url:",url)
                    }} className="products-form-input" />
                   
                    < Link className="add-product-btn" onClick={addproduct} style={{ textDecoration: "none" }}>ADD</Link >
                    < Link className="add-product-btn update-btn" onClick={()=>updateProduct()} style={{ textDecoration: "none" }}>UPDATE</Link >
                </form>
            </div>
        </div>
    )
}

export default Adminproducts;
