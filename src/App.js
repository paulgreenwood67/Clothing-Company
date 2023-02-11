import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Products from "./components/Products"; 
import ShoppingCart from "./components/ShoppingCart";
import Privacy from "./components/Privacy";
import Payments from "./components/Payments";

import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    
    <div className="App">
     <Header />
  
     <Routes>
         
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/product" element={<Products />} /> 
          <Route path="/ShoppingCart" element={<ShoppingCart />} /> 
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/Payments" element={<Payments />} />
       </Routes>
       <Footer />
    </div> 
    
  );
}

export default App;









  
 /* 
const loggedIn = true;

class App extends Component {
  render() {
    return (
      <div className="App">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
          integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
          crossorigin="anonymous"
        />
        <Header name={this.props.name} loggedIn={false} />
        <LandingPage />
        <Products />
        
      </div>
    );
  }
}
*/
