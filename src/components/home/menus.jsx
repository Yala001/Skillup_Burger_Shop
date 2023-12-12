import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import Popup from 'reactjs-popup';
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";


const menu = [
    {
        itemNum: 1, 
        burgerSrc: burger1,
        price: 200,
        title: "Cheese Burger",
      delay: 0,
      

      
    },
    {
        itemNum: 2,
        burgerSrc: burger2, 
        price: 500,
        title: "Veggie Burger",
        delay: 0,
        
    },
    {
        itemNum: 3,
        burgerSrc: burger3,
        price: 1600,
        title: "Cheese Burger with Fremch Fries",
      delay: 0,
      
      
      
      
      
    },
   
  ];
  
  export default menu;
  