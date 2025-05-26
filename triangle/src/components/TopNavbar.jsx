import React from "react";
import { Link } from "react-router-dom";
import './TopNavbar.css';
import logo from '../assets/images/triangle_logo.png';

const TopNavbar = () =>{
    return(
        <div className="TopNavBar_Container">
            <div className="TopNavBar_Logo_Container">
                <Link to="/main">
                    <img
                        src={logo}
                        alt="로고"
                        className="TopNavBar_Logo"
                    />
                </Link>
            </div>
        </div>
    );
}

export default TopNavbar;