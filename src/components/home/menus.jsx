import React from "react";
import { motion } from "framer-motion";
import Popup from 'reactjs-popup';
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger2.png";


const menu = [
    {
        itemNum: 1,
      title: "Cheese Burger",
      burgerSrc: {burger1},
      price: 200,
      delay: 0
      
    },
    {
        itemNum: 2,
      title: "Veggie Burger",
      burgerSrc: {burger2}, 
      price: 500,
      delay: 0
    },
    {
        itemNum: 3,
      title: "Cheese Burger with Fremch Fries",
      burgerSrc: {burger3},
      price: 1600,
      delay: 0
    },
   
  ];
  
  export default menu;
  