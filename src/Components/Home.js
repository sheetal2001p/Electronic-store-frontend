import React from 'react'
import Header from './Header';
import Imagesslider from "./Imagesslider"
import Welcome from "./Welcome"
import Product from "./Product"
import Footer from "./Footer"
import {useEffect } from "react"
import {useHistory} from "react-router-dom"

export default function Home() {
  const history = useHistory();
  useEffect(() => {
    localStorage.setItem("isLoggedIn",false);
}, [])
    return (
        <div>
      <Header/>
      <Imagesslider/>
      <Welcome/>
      <Product/>
      <Footer/>
        </div>
    )
}
