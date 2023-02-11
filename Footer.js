//imported elements

import React from "react";
import fbLogo from "../images/facebook.png";
import whatsappLogo from "../images/whatsapp.png";

//function for the about component
function Footer() {
  return (
  <div className="contact-us">
    
    
    <div className = "row">
        <div className = "col-lg-10 col-md-5">
        <h5 className="footerText"><b>Contact us</b></h5>
            <p className="contactText"><b>email:</b> ask@duckandcover.co.uk</p>
            <p className="contactText"><b>call:</b> 0161-974-3415</p>
            <p className="contactText"><b>write:</b> 147 Great Ducie Street, Manchester, M3 1FB</p>
        </div>
        <div className = "col-lg-2 col-md-7">
          <div>
          <a href="https://www.facebook.com/duckandcover.co.uk" target="_blank">
        <img className="socials" src={fbLogo} />
        </a>
        <a href="https://www.instagram.com/duckandcover.co.uk/" target="_blank">
        <img  className="socials"  src={whatsappLogo} />
        </a>
        </div>
           <p><i class="fa-brands fa-facebook"></i></p>
        </div>
    </div>
    
            
          </div>
        
  );
}

export default Footer;