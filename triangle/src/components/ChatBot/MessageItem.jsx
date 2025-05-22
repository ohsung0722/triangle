import React from "react";
import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";
import './ChatBot.css'

function MessageItem({message}){
    const isUser = message.sender === 'user'

    return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.2 }}
      className={`message-group ${isUser ? "user" : ""}`}
    >
      {!isUser && (
        <div className="avatar bot-avatar">
          <Bot size={16} />
        </div>
      )}

      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className={`message-bubble ${isUser ? "user" : "bot"}`}
      >
        {message.content}
      </motion.div>

      {isUser && (
        <div className="avatar user-avatar">
          <User size={16} />
        </div>
      )}
    </motion.div>
  )
}

export {MessageItem}