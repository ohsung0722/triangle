import React from "react";
import { Outlet } from "react-router-dom";
import './UserLayout.css'
import TopNavbar from '../../components/TopNavbar'
import { Footer } from "../../components/Footer/Footer";
import { ChatBot } from "../../components/ChatBot/ChatBot";

function UserLayout(){
    return(
        <>
            <div className="UserLayoutContainer">
                <TopNavbar/>
                <div className="UserContentContainer">
                    <ChatBot/>
                    <Outlet/>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export {UserLayout}