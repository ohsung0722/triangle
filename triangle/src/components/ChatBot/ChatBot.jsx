import React, { useEffect, useRef, useState } from "react";
import "./ChatBot.css";
import { AnimatePresence, motion } from "framer-motion";
import { Maximize2, MessageSquare, Minimize2, Send, X } from "lucide-react";
import { MessageItem } from "./MessageItem";
import { generateResponse } from "../../services/openaiService";

function ChatBot({highlight = false}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "1",
      content: "안녕하세요! 무엇을 도와드릴까요?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await generateResponse(input);
      
      const botMessage = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error getting response from OpenAI:', error);
      const errorMessage = {
        id: (Date.now() + 1).toString(),
        content: "죄송합니다. 응답을 생성하는 중에 오류가 발생했습니다. 다시 시도해주세요.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleChat = () => {
    if (isMinimized) {
      setIsMinimized(false);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const minimizeChat = () => {
    setIsMinimized(true);
  };

  const closeChat = () => {
    setIsOpen(false);
    setIsMinimized(false);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <>
      <motion.div
        className="chat-toggle-button"
        initial={{ scale: 0 }}
        animate={{ scale: highlight ? 1.2 : 1 }}
        transition={highlight
          ? {
              duration: 0.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }
          : { type: "spring", stiffness: 260, damping: 20 }}
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
                <div className="chat_header_title">
                  <div className="avatar bot-avatar">
                    <MessageSquare size={16} />
                  </div>
                  <span>AI 챗봇</span>
                </div>
                <div className="header-actions">
                  {isMinimized ? (
                    <button
                      className="icon-button"
                      onClick={() => setIsMinimized(false)}
                    >
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

                    <form
                      onSubmit={handleSendMessage}
                      className="input-container"
                    >
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={isLoading ? "응답을 생성하는 중..." : "메시지를 입력하세요..."}
                        className="message-input"
                        disabled={isLoading}
                      />
                      <button 
                        type="submit" 
                        className={`send-button ${isLoading ? 'loading' : ''}`}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="loading-spinner" />
                        ) : (
                          <Send size={16} />
                        )}
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
  );
}

export { ChatBot };
