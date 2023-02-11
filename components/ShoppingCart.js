//imported elements
import React from 'react';


//function for the shoppingcart
function ShoppingCart(){

  function outAlert(){
    alert('You have logged out')
  }
  return(
    <div>
      <h3 className="aboutText">Your Area</h3>
        <button type="button" class="btn btn-dark"  onClick={outAlert}>Log out</button>
        <p></p>
    </div>
  )
}

 
  export default ShoppingCart