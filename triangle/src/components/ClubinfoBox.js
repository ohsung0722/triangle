import React from "react";
import '../components/ClubinfoBox.css';
import '../index.css';

const Clubinfo_Box = ( { club } ) =>{

    const { leader, phone, location, date, meeting } = club.detail;

    return(
        <div className="ClubinfoBox_Container">
                <table className="InfoBox_Table">
                    <tr><td className="Info_Label">회장</td>
                    <td className="Info_Value">{leader}</td>

                    <td className="Info_Label">연락처</td>
                    <td className="Info_Value">{phone}</td></tr>

                    <tr><td className="Info_Label">동아리방</td>
                    <td className="Info_Value">{location}</td>

                    <td className="Info_Label">모집기간</td>
                    <td className="Info_Value">{date}</td></tr>

                    <tr><td className="Info_Label">정기모임</td>
                    <td className="Info_Value" colSpan="3">{meeting}</td></tr>
                </table>
        </div>
    );
}

export default Clubinfo_Box;