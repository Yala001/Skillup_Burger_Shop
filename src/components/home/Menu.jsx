// Write all the code here
import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import MenuCard from "../home/MenuCard.jsx";
import menu from "../home/menus";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const Menu = () => {

    return (
        <section id="menu">
             <h1>Menu</h1>
        <div>
        {menu.map(menuItem => (
        <MenuCard
          itemNum={menuItem.itemNum}
          burgerSrc={menuItem.burgerSrc}
          price={menuItem.price}
          title={menuItem.title}
          
          delay={menuItem.delay}
          
          
        />
    ))}     
        </div>
    </section>
        )
   } 

export default Menu;