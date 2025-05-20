import React,{useState} from "react";
import './ClubNameBox.css';

import starIcon from '../assets/images/star.svg';
import filledStarIcon from '../assets/images/filled_star.svg';

const ClubNameBox = () =>{
    const [isActive, setIsActive] = useState(false);

    const handleIsActive =()=>{
        setIsActive((prev) => !prev)
    }

    return (
        <div className="ClubNameBox_Container">
            <div>
                <h1>En#</h1>
                <label className="ClubNameBox_Category">학술분과</label>
                <label className="ClubNameBox_label">IT</label>
            </div>
            <div className="ClubNameBox_icon_wrapper" onClick={handleIsActive}>
                <img 
                src={isActive === true ? filledStarIcon : starIcon}
                alt="like"
                className="ClubNameBox_icon"
                />
            </div>
            
        </div>
    )
}

export default ClubNameBox;