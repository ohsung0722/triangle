import React from "react";
import { motion } from "framer-motion";
import './SectionTitle.css'

function SectionTitle({title, subtitle, center = true}){
    return(
        <motion.div
           initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className={center ? "text-centered" : ""} 
        >
            <h2 className="section-title">{title}</h2>
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </motion.div>
    )
}

export {SectionTitle}