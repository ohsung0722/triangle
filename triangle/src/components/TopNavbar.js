import React from "react";
import '../components/TopNavbar.css';
import logo from '../assets/images/triangle_logo.png';

const Top_Navbar = () =>{
    return(
        <div className="TopNavBar_Container">
            <img
                src={logo}
                alt = "로고" 
                className="TopNavBar_Logo"
            />
        </div>
    );
}

export default Top_Navbar;