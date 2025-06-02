import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";

function DescriptionLayout(){
    return(
        <div>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export {DescriptionLayout}