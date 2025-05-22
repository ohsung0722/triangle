import React, { useEffect, useRef, useState } from "react";
import './ChatBot.css'
import { AnimatePresence, motion } from "framer-motion";
import { Maximize2, MessageSquare, Minimize2, Send, X } from "lucide-react";
import { MessageItem } from "./MessageItem";

function ChatBot(){
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: '1',
            content: '안녕하세요! 무엇을 도와드릴까요?',
            sender: 'bot',
            timestamp: new Date()
        }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const handleSendMessage = (e) => {
        e.preventDefault()
        if (!input.trim()) return

        const userMessage = {
            id: Date.now().toString(),
            content: input,
            sender: "user",
            timestamp: new Date(),
        }

        setMessages((prev) => [...prev, userMessage])
        setInput("")

        setTimeout(() => {
            const botResponses = [
            "도움이 필요하신가요?",
            "더 자세히 설명해 주시겠어요?",
            "알겠습니다. 다른 질문이 있으신가요?",
            "그 부분에 대해 더 알려드릴게요.",
            "네, 가능합니다. 어떻게 도와드릴까요?",
        ]

        const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]

        const botMessage = {
            id: (Date.now() + 1).toString(),
            content: randomResponse,
            sender: "bot",
            timestamp: new Date(),
        }

        setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  const toggleChat = () => {
    if (isMinimized) {
      setIsMinimized(false)
    } else {
      setIsOpen(!isOpen)
    }
  }

  const minimizeChat = () => {
    setIsMinimized(true)
  }

  const closeChat = () => {
    setIsOpen(false)
    setIsMinimized(false)
  }

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({
            behavior:'smooth'
        })
    }, [messages])

    return( 
        <>
      <motion.div
        className="chat-toggle-button"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <button className="chat-button" onClick={toggleChat}>
          <MessageSquare size={24} />
        </button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-container-layout"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              height: isMinimized ? "auto" : "auto",
            }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="chat-container">
              <motion.div className="chat-header" layout>
                <div className="header-title">
                  <div className="avatar bot-avatar">
                    <MessageSquare size={16} />
                  </div>
                  <span>AI 챗봇</span>
                </div>
                <div className="header-actions">
                  {isMinimized ? (
                    <button className="icon-button" onClick={() => setIsMinimized(false)}>
                      <Maximize2 size={16} />
                    </button>
                  ) : (
                    <button className="icon-button" onClick={minimizeChat}>
                      <Minimize2 size={16} />
                    </button>
                  )}
                  <button className="icon-button" onClick={closeChat}>
                    <X size={16} />
                  </button>
                </div>
              </motion.div>

              <AnimatePresence>
                {!isMinimized && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="messages-container">
                      <AnimatePresence initial={false}>
                        {messages.map((message) => (
                          <MessageItem key={message.id} message={message} />
                        ))}
                      </AnimatePresence>
                      <div ref={messagesEndRef} />
                    </div>

                    <form onSubmit={handleSendMessage} className="input-container">
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="메시지를 입력하세요..."
                        className="message-input"
                      />
                      <button type="submit" className="send-button">
                        <Send size={16} />
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
    )
}

export {ChatBot}