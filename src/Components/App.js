import React from 'react';
// import ReactDOM from 'react-dom';
import '../style/style.css';
import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup"
import Userpage from "./Userpage"
import Mywishlist from "./Mywishlist"
import Adminpage from "./Adminpage"
import Myorders from "./Myorders"
// import scroll from "./scroll"
import Adminproducts from "./Adminproducts"
import Default from "./Default"
import { ToastContainer } from 'react-toastify';
import { Route, Switch } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <ToastContainer/>
     <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/userpage" component={Userpage} />
        <Route exact path="/mywishlist" component={Mywishlist} />
        <Route exact path="/admin" component={Adminpage} />
        <Route exact path="/addproducts" component={Adminproducts} />
        <Route exact path="/myorders" component={Myorders} />
        <Route  component={Default} />
      </Switch>
    </div>
  );
}
export default App;