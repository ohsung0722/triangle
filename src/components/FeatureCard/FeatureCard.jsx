// FeatureCard 컴포넌트 - 기능 소개를 위한 카드 컴포넌트
import React from "react";
import { motion } from "framer-motion";
import './FeatureCard.css';

// props 설명
// icon: 기능 아이콘 컴포넌트
// title: 기능 제목
// description: 기능 설명
// delay: 애니메이션 지연 시간 (기본값: 0)
function FeatureCard({icon: Icon, title, description, delay = 0 }){
    return(
        <motion.div
            className="feature-card"
            initial={{opacity: 0, y: 20}}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay }}
        >
            {/* 기능 아이콘 */}
            <div className="feature-icon">
                <Icon size={24}/>
            </div>
            {/* 기능 제목 */}
            <h3 className="feature-title">{title}</h3>
            {/* 기능 설명 */}
            <p className="feature-description">{description}</p>
        </motion.div>
    )
}

export {FeatureCard}