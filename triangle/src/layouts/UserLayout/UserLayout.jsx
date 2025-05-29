import React from "react";
import { Outlet } from "react-router-dom";
import './UserLayout.css'
import TopNavbar from '../../components/TopNavbar'

function UserLayout(){
    return(
        <>
            <div className="UserLayoutContainer">
                {/* <TopNavbar/> */}
                <div className="UserContentContainer">
                    <Outlet/>
                </div>
                
            </div>
        </>
    )
}

export {UserLayout}