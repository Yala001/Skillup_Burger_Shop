// Write all the code here
import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

//function OrderDetails() {

//const orderId=1;
//const status = 2;
//const itemQty = 3;
//const paymentMethod = 4;
//const action = 5;

//return (
    
    //<div>
    // <p>{orderId}</p>
    // <p>{status}</p>
    // <p>{itemQty}</p>
    // <p>{paymentMethod}</p>
    // <p>{action}</p>
     
    //</div>
 
//)
//}

function OrderDetails() {

    return (
     <section className="orderDetails"> 
     <main>
    <div>
        <h1>Order Details</h1>
        <h4>Shipping</h4>
        <p>Address</p>
        <h4>Contact</h4>
        <p>Name</p>
        <p>Phone</p>
        <h4>Status</h4>
        <p>Order Status</p>
        <p>Placed at</p>
        <p>Delivered at</p>
        <h4>Payment</h4>
        <p>Payment Method</p>
        <p>Paid at</p>
        <p>Payment Reference</p>
        <h4>Amount</h4>
        <p>Items Total</p>
        <p>Shipping Charges</p>
        <p>Tax</p>
        <p>Total Amount</p>

    </div>
    
    

<article>
    
<h1>Ordered Items</h1>
<div>
Cheese Burger
</div>
<div>
Veg Cheese Burger
</div>
<div>French Fries</div>

<h4>Subtotal</h4>



</article>
</main>
</section>  
)}

export default OrderDetails;