import React from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import './TestimonialCard.css'

function TestimonialCard({content, name, title, delay = 0}){
    return(
        <motion.div
            className="testimonial-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay }}
        >
            <p className="testimonial-content">{content}</p>
            <div className="testimonial-author">
                <div className="author-avatar">
                    <User size={24}/>
                </div>
                <div className="author-info">
                    <span className="author-name">{name}</span>
                    <span className="author-title">{title}</span>
                </div>
            </div>
        </motion.div>
    )
}

export {TestimonialCard}