// MessageItem 컴포넌트 - 채팅 메시지를 표시하는 컴포넌트
import React from "react";
import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";
import "./ChatBot.css";

function MessageItem({ message }) {
  // 메시지 발신자 구분 (사용자/봇)
  const isUser = message.sender === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.2 }}
      className={`message-group ${isUser ? "user" : ""}`}
    >
      {/* 봇 메시지일 경우 봇 아이콘 표시 */}
      {!isUser && (
        <div className="avatar bot-avatar">
          <Bot size={16} />
        </div>
      )}

      {/* 메시지 버블 */}
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className={`message-bubble ${isUser ? "user" : "bot"}`}
      >
        {message.content}
      </motion.div>

      {/* 사용자 메시지일 경우 사용자 아이콘 표시 */}
      {isUser && (
        <div className="avatar user-avatar">
          <User size={16} />
        </div>
      )}
    </motion.div>
  );
}

export { MessageItem };
