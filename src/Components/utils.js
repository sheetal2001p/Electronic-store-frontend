import axios from "axios"
import { toast } from "react-toastify"
import 'bootstrap/dist/css/bootstrap.min.css';

export const placeOrder = async(_id)=>{
    
    try {
        const productId = _id;
        const token = localStorage.getItem("token");
        const res = await axios.post(`https://sheetal-electronic-store.herokuapp.com/placeorder?product=${productId}`,{},{headers:{"Authorization":`Bearer ${token}`}});
        // console.log(res);
        if (res.error) {
            // setLoader(false)
            toast.error('🦄 Error! try again');
        }
        else {
            // setLoader(false)
            toast.success('Ordered Successfully! See Myorders');
        }
    }
    catch (e) {
        console.log("Error:", e);
    }
} 

