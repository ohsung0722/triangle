// SectionTitle 컴포넌트 - 섹션의 제목과 부제목을 표시하는 컴포넌트
import React from "react";
import { motion } from "framer-motion";
import './SectionTitle.css'

// props 설명
// title: 섹션의 제목
// subtitle: 섹션의 부제목 (선택적)
// center: 제목을 중앙 정렬할지 여부 (기본값: true)
function SectionTitle({title, subtitle, center = true}){
    return(
        <motion.div
            // 초기 상태: 투명도 0, y축 20px 아래
            initial={{ opacity: 0, y: 20 }}
            // 화면에 보일 때: 투명도 1, y축 0
            whileInView={{ opacity: 1, y: 0 }}
            // 뷰포트 설정: 한 번만 애니메이션 실행, 여백 -100px
            viewport={{ once: true, margin: "-100px" }}
            // 애니메이션 지속 시간: 0.5초
            transition={{ duration: 0.5 }}
            // 중앙 정렬 여부에 따른 클래스 적용
            className={center ? "chat-text-centered" : ""} 
        >
            {/* 섹션 제목 */}
            <h2 className="chat-section-title">{title}</h2>
            {/* 부제목이 있는 경우에만 표시 */}
            {subtitle && <p className="chat-section-subtitle">{subtitle}</p>}
        </motion.div>
    )
}

export {SectionTitle}