// Footer 컴포넌트 - 웹사이트 하단 푸터 컴포넌트
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog } from "../Dialog/Dialog";
import './Footer.css'

function Footer() {
    // 개발팀 소개 다이얼로그 상태 관리
    const [isDeveloperDialogOpen, setIsDeveloperDialogOpen] = useState(false)
    
    // 개발팀 링크 클릭 핸들러
    const handleDeveloperLinkClick = (e) => {
        e.preventDefault()
        setIsDeveloperDialogOpen(true)
    }
  
    const navigate = useNavigate();

    return(
        <div>
            {/* 개발팀 소개 다이얼로그 */}
            <Dialog isOpen={isDeveloperDialogOpen} onClose={() => setIsDeveloperDialogOpen(false)} />
            
            {/* 푸터 메인 컨테이너 */}
            <footer className="footer">
                <div className="footer-content">
                    {/* 푸터 링크 목록 */}
                    <div className="footer-links">
                        <a href="/main" className="footer-link">
                            홈
                        </a>
                        <a href='/' className="footer-link">
                            랜딩 페이지
                        </a>
                        <a href="/main/graph" className="footer-link">
                            대시보드
                        </a>
                        <a href="#" className="footer-link" onClick={handleDeveloperLinkClick}>
                            개발팀
                        </a>
                        <a href="https://github.com/SejongOSS/triangle" className="footer-link">
                            Github
                        </a>
                        <a href="http://www.sejong.ac.kr/" className="footer-link">
                            세종대 홈페이지
                        </a>
                    </div>
                    {/* 저작권 정보 */}
                    <div className="footer-copyright">© {new Date().getFullYear()} 세모. All rights reserved.</div>
                </div>
            </footer>
        </div>
    )
}

export {Footer}