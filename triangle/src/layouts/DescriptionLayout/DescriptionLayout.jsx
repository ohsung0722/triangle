import React from "react";
import { Outlet } from "react-router-dom";

function DescriptionLayout(){
    return(
        <div>
            <Outlet/>
        </div>
    )
}

export {DescriptionLayout}