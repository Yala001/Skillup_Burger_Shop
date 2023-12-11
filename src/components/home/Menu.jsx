// Write all the code here
import React from "react";
import { Link } from "react-router-dom";
import MenuCard from "../home/MenuCard.jsx";
import menu from "../home/menus";

function Menu() {

    return (
        <section id="menu">
             <h1>Menu</h1>
        <div>
        {menu.map(menuItem => (
        <MenuCard
          itemNum={menuItem.itemNum}
          title={menuItem.title}
          burgerSrc={menuItem.burgerSrc}
          price={menuItem.price}
          delay={menuItem.delay}
          
        />
      ))}
          
        
        
        </div>
        </section>
)
}
export default Menu;