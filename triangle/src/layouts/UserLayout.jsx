import react from "react";
import { Outlet } from "react-router-dom";
import './UserLayout.css'

function UserLayout(){
    return(
        <>
            <div className="UserLayoutContainer">
                <div>Header자리</div>
                <div className="UserContentContainer">
                    <Outlet/>
                </div>
                <div>Footer자리</div>
            </div>
        </>
    )
}