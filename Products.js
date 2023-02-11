
//imported elements
import React from "react";
import prod1 from "../images/prod1.webp";
import prod2 from "../images/prod2.webp";
import prod3 from "../images/prod3.webp";


// function to make the product page
function Products() {
  return (
    <main className="main">
      <div>
        <div className="productImages flex">
          <div className="placeholder-1">
            <h5 className="aboutHeading">Street subculture</h5>
              <img src={prod1} />
                <p>Price £75</p>
                  <button type="button" class="btn btn-dark" >Buy</button>
          </div>
          <div className="placeholder-2">
            <h5 className="aboutHeading" >Sports Utility</h5>
              <img src={prod2} />
                <p>Price £75</p>
                  <button type="button" class="btn btn-dark" >Buy</button>
          </div>
          <div className="placeholder-3">
            <h5 className="aboutHeading">Contemporary Classic</h5>
              <img src={prod3} />
                <p>Price £75</p>
                  <button type="button" class="btn btn-dark" >Buy</button>
          </div>
        </div>
      </div>
    <p></p>
    </main>
 
  );
}

export default Products;

