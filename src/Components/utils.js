import axios from "axios"
import { toast } from "react-toastify"

export const placeOrder = async(_id)=>{
    
    try {
        const productId = _id;
        const token = localStorage.getItem("token");
        const res = await axios.post(`http://localhost:4000/placeorder?product=${productId}`,{},{headers:{"Authorization":`Bearer ${token}`}});
        // console.log(res);
        if (res.error) {
            // setLoader(false)
            toast.error('🦄 Error! try again', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else {
            // setLoader(false)
            toast.success('Ordered Successfully! See Myorders', {
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
    catch (e) {
        console.log("Error:", e);
    }
} 

