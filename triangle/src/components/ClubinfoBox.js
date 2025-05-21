import React from "react";
import '../components/ClubinfoBox.css';
import '../index.css';

const Clubinfo_Box = () =>{
    return(
        <div className="ClubinfoBox_Container">
                <table className="InfoBox_Table">
                    <tr><td className="Info_Label">회장</td>
                    <td className="Info_Value">회장정보</td>

                    <td className="Info_Label">연락처</td>
                    <td className="Info_Value">연락처정보</td></tr>

                    <tr><td className="Info_Label">동아리방</td>
                    <td className="Info_Value">동아리방정보</td>

                    <td className="Info_Label">모집기간</td>
                    <td className="Info_Value">모집기간정보</td></tr>

                    <tr><td className="Info_Label">정기모임</td>
                    <td className="Info_Value">정기모임정보</td></tr>
                </table>
        </div>
    );
}

export default Clubinfo_Box;