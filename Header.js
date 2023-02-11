//importing elements
import React from "react";
import logo from "../images/Asset_1.webp";


//function to make the header
import { Routes, Route, Link } from "react-router-dom";



function Header(props) {
  return (

  

    <div className = "row">
        <header className="App-header">
        <div className = "col-lg-3 col-md-4">
            <img className="logo" src={logo} alt="logo" />   
        </div>          
    <div className = "col-lg-7 col-md-6">
        <div className="navbar">
            <ul>
                <Link className="nav-links" to="/">Home</Link>
                <Link className="nav-links"  to="/about">About</Link>
                <Link className="nav-links"  to="/product">Shop</Link>
                <Link className="nav-links"  to="/ShoppingCart">Your Area</Link>
                <Link className="nav-links"  to="/Privacy">Privacy</Link>
                <Link className="nav-links"  to="/Payments">Payment Options</Link>
            </ul>
        </div>      
    </div> 
    <div className = "col-lg-2 col-md-2" >
        <h1  className="WelcomeText">{props.loggedIn ? `Welcome, ${props.name}` : "Sign in"}</h1>
    </div>

    
    
</header>
</div>
  );
}

export default Header;