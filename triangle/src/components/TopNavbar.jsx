import React from "react";
import { useNavigate } from "react-router-dom";
import './TopNavbar.css';
import logo from '../assets/images/triangle_logo.png';

const TopNavbar = () =>{
    const navigate = useNavigate();
    
    return(
        <div className="TopNavBar_Container">
            <div className="TopNavBar_Logo_Container">
                <div className="TopNavBar_Logo_Wrapper" onClick={() => navigate('/main')}>
                    <img
                        src={logo}
                        alt="로고"
                        className="TopNavBar_Logo"
                    />
                </div>
                <div className="TopNavBar_Button" onClick={() => navigate('/main/graph')}>
                    그래프
                </div>
            </div>
        </div>
    );
}

export default TopNavbar;