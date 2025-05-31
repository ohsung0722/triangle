import React from "react";
import { useNavigate } from "react-router-dom";
import './TopNavbar.css';
import logo from '../assets/images/triangle_logo.png';
import graphIcon from '../assets/images/graph_icon.png';

const TopNavbar = () =>{
    const navigate = useNavigate();
    
    return(
        <div className="TopNavBar_Container">
            <div className="TopNavBar_Logo_Container">
                <div className="TopNavBar_Logo_Wrapper" onClick={() => navigate('/')}>
                    <img
                        src={logo}
                        alt="로고"
                        className="TopNavBar_Logo"
                    />
                </div>
                <div className="TopNavBar_Button" onClick={() => navigate('/graph')}>
                    대시보드
                    <img
                    src={graphIcon}
                    alt="graph"
                    className="TopNavBar_icon"
                    />
                </div>
            </div>
        </div>
    );
}

export default TopNavbar;