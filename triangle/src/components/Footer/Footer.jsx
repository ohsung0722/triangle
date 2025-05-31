import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog } from "../Dialog/Dialog";
import './Footer.css'

function Footer() {
      const [isDeveloperDialogOpen, setIsDeveloperDialogOpen] = useState(false)
    const handleDeveloperLinkClick = (e) => {
        e.preventDefault()
        setIsDeveloperDialogOpen(true)
    }
  
    const navigate = useNavigate();

    return(
        <div>
        <Dialog isOpen={isDeveloperDialogOpen} onClose={() => setIsDeveloperDialogOpen(false)} />
        <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href="/main" className="footer-link">
              홈
            </a>
            <a href='/' className="footer-link">
                랜딩 페이지
            </a>
            <a href="/main/graph" className="footer-link">
              동아리 그래프
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
          <div className="footer-copyright">© {new Date().getFullYear()} 세모. All rights reserved.</div>
        </div>
      </footer>
    </div>
    )
}

export {Footer}