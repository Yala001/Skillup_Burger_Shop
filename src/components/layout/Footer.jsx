// Write all the code here
import React from "react";
const Footer = () => {
    
    const name = "Burgershop";
    const year = new Date().getFullYear();
    
      return (
        <footer>
        <div>
            <h2>Burger Shop</h2>
            <p>We are trying to give you the best taste possible</p>
            <p className="strong">We give attention to genuine feedback </p>
        <p> {name} {year}</p>
        </div>
        <aside>
           
            <p>Follow us</p>
            <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-facebook-f"></i>
                </button>
               
          <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-google"></i>
                </button>
            <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-twitter"></i>
                </button>
            
            </aside>
        </footer>
      );
    }
    
    export default Footer;