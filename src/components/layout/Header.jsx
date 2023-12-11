

// Write all the code here
import ReactLogo from "../../assets/Burger.svg";
import DropdownMenu from "./DropdownMenu";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Header() {
    const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const navs = [
      {name: "Login", path: "/login" },
      {name:"Orders", path:"/myorders"},
      {name:"Logout", path:"/login"}
      
    ]
    setNavLinks(navs);
  }, []);

    return (
        
    <div>
        <nav> 
          <img src ={ReactLogo} style={{width: 70, height: 70, color:"red" }} alt="burger icon"/>
               
            <div class="btn-group">
                <a href="../">Home</a>
            <button
              type="button"
              class="btn dropdown-toggle red"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
            >
              Menu
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              {navLinks.map((d, i) => (
                <li key={i}>
                  <Link to={d.path}>
                    <button class="dropdown-item" type="button">
                      {d.name}
                    </button>
                  </Link>
                </li>
              ))}
            </ul> 
            </div>
        </nav>
    </div>
    
    )
};

export default Header;
