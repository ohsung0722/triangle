// ClubinfoBox 컴포넌트 - 동아리의 상세 정보를 표시하는 컴포넌트
import React from "react";
import './ClubinfoBox.css';
import '../../index.css';

// props 설명
// club: 동아리 정보 객체 (detail 객체에 leader, phone, location, date, meeting 포함)
const Clubinfo_Box = ({ club }) => {
    // 동아리 상세 정보 구조 분해
    const { leader, phone, location, date, meeting } = club.detail;

    return(
        <div className="ClubinfoBox_Container">
            {/* 동아리 정보 테이블 */}
            <table className="ClubinfoBox_InfoBox_Table">
                {/* 회장 및 연락처 정보 */}
                <tr>
                    <td className="ClubinfoBox_Info_Label">회장</td>
                    <td className="ClubinfoBox_Info_Value">{leader}</td>

                    <td className="ClubinfoBox_Info_Label">연락처</td>
                    <td className="ClubinfoBox_Info_Value">{phone}</td>
                </tr>

                {/* 동아리방 및 모집기간 정보 */}
                <tr>
                    <td className="ClubinfoBox_Info_Label">동아리방</td>
                    <td className="ClubinfoBox_Info_Value">{location}</td>

                    <td className="ClubinfoBox_Info_Label">모집기간</td>
                    <td className="ClubinfoBox_Info_Value">{date}</td>
                </tr>

                {/* 정기모임 정보 */}
                <tr>
                    <td className="ClubinfoBox_Info_Label">정기모임</td>
                    <td className="ClubinfoBox_Info_Value" colSpan="3">{meeting}</td>
                </tr>
            </table>
        </div>
    );
}

export default Clubinfo_Box;