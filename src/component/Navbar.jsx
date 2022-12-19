import React from "react";
import  data from "../data/data.json";
import  "../css/Navbar.css"

function Navbar(){
    return(
   <div className="navbar">
        <div className="logo">
            <a href="/">
                <img src={data.logo} id="main-logo" alt="logo"/>
            </a>
        </div>
        
        <a href="/xioamiphones">Xioami Phones</a>
        <a href="/redmiphones">Redmi Phones</a>
        <a href="/tv">Tv</a>
        <a href="/tablets">Laptops & Tablets</a>
        <a href="/accessories">Accessories</a>
        <a href="/home">Home</a>
        <a href="/audio">Audio</a>
    
   

   

   </div>
   
    )
}
export default Navbar