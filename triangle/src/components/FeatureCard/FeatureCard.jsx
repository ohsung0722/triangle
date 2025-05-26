import React from "react";
import { motion } from "framer-motion";
import './FeatureCard.css';

function FeatureCard({icon: Icon, title, description, delay = 0 }){
    return(
        <motion.div
            className="feature-card"
            initial={{opacity: 0, y: 20}}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay }}
        >
            <div className="feature-icon">
                <Icon size={24}/>
            </div>
            <h3 className="feature-title">{title}</h3>
            <p className="feature-description">{description}</p>
        </motion.div>
    )
}

export {FeatureCard}