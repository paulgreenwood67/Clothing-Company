
 //imported elements
import React from "react";
import banner from "../images/banner.jpg";


//function to make the landing page
function LandingPage() {
  return (
    <main className="main">
      <img className="banner" src={banner} alt="banner" />
    </main>
    
  );
}

export default LandingPage;