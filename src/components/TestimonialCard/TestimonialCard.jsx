// TestimonialCard 컴포넌트 - 사용자 후기를 표시하는 카드 컴포넌트
import React from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import './TestimonialCard.css'

// props 설명
// content: 후기 내용
// name: 작성자 이름
// title: 작성자 직함/소속
// delay: 애니메이션 지연 시간 (기본값: 0)
function TestimonialCard({content, name, title, delay = 0}){
    return(
        <motion.div
            className="testimonial-card"
            // 초기 상태: 투명도 0, y축 20px 아래
            initial={{ opacity: 0, y: 20 }}
            // 화면에 보일 때: 투명도 1, y축 0
            whileInView={{ opacity: 1, y: 0 }}
            // 뷰포트 설정: 한 번만 애니메이션 실행, 여백 -50px
            viewport={{ once: true, margin: "-50px" }}
            // 애니메이션 설정: 지속 시간 0.5초, 지연 시간 적용
            transition={{ duration: 0.5, delay }}
        >
            {/* 후기 내용 */}
            <p className="testimonial-content">{content}</p>
            {/* 작성자 정보 */}
            <div className="testimonial-author">
                {/* 작성자 아바타 */}
                <div className="author-avatar">
                    <User size={24}/>
                </div>
                {/* 작성자 이름과 직함 */}
                <div className="author-info">
                    <span className="author-name">{name}</span>
                    <span className="author-title">{title}</span>
                </div>
            </div>
        </motion.div>
    )
}

export {TestimonialCard}