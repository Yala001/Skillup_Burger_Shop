// Write all the code here
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";



function Contact () {

    return(
<section className="contact">
    <form>
        <h2>Contact us</h2>
        <input></input>
        <input></input>
        <textarea></textarea>
        <Popup trigger={<button type="button" id="hubutton" onClick={(e) => {e.preventDefault(); return "huj";}}>Send</button>} position="center"><div>Thank you for contacting us, we'll get back to you shortly!</div></Popup>
        
    </form>
    <span className="formBorder">
<div><img src="bg.svg" alt="burger picture"/></div>

    </span>
</section>

    )
}

export default Contact;