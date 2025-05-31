// TopNavbar 컴포넌트 - 웹사이트 상단 네비게이션 바 컴포넌트
import React from "react";
import { useNavigate } from "react-router-dom";
import './TopNavbar.css';
import logo from '../../assets/images/triangle_logo.png';
import graphIcon from '../../assets/images/graph_icon.png';

const TopNavbar = () =>{
    // 페이지 이동을 위한 navigate 훅
    const navigate = useNavigate();
    
    return(
        <div className="TopNavBar_Container">
            {/* 로고와 대시보드 버튼을 포함하는 컨테이너 */}
            <div className="TopNavBar_Logo_Container">
                {/* 로고 영역 - 클릭 시 메인 페이지로 이동 */}
                <div className="TopNavBar_Logo_Wrapper" onClick={() => navigate('/main')}>
                    <img
                        src={logo}
                        alt="로고"
                        className="TopNavBar_Logo"
                    />
                </div>
                {/* 대시보드 버튼 - 클릭 시 그래프 페이지로 이동 */}
                <div className="TopNavBar_Button" onClick={() => navigate('/graph')}>
                    대시보드
                    <img
                        src={graphIcon}
                        alt="graph"
                        className="TopNavBar_icon"
                    />
                </div>
            </div>
        </div>
    );
}

export default TopNavbar;