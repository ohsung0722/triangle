import React from "react";
import './ClubinfoBox.css';
import '../../index.css';

const Clubinfo_Box = ( { club } ) =>{

    const { leader, phone, location, date, meeting } = club.detail;

    return(
        <div className="ClubinfoBox_Container">
                <table className="ClubinfoBox_InfoBox_Table">
                    <tr><td className="ClubinfoBox_Info_Label">회장</td>
                    <td className="ClubinfoBox_Info_Value">{leader}</td>

                    <td className="ClubinfoBox_Info_Label">연락처</td>
                    <td className="ClubinfoBox_Info_Value">{phone}</td></tr>

                    <tr><td className="ClubinfoBox_Info_Label">동아리방</td>
                    <td className="ClubinfoBox_Info_Value">{location}</td>

                    <td className="ClubinfoBox_Info_Label">모집기간</td>
                    <td className="ClubinfoBox_Info_Value">{date}</td></tr>

                    <tr><td className="ClubinfoBox_Info_Label">정기모임</td>
                    <td className="ClubinfoBox_Info_Value" colSpan="3">{meeting}</td></tr>
                </table>
        </div>
    );
}

export default Clubinfo_Box;