// src/components/ChatBox.tsx
import React, { useState, useEffect, useRef } from 'react';
import Message from './message';
import MessageInput from './messageinput';
import styles from '../styles/chatbox.module.css';

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sendMessage = (text: string) => {
    setMessages([...messages, text]);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className={styles.chatBox}>
      <div className={styles.messages}>
        {messages.map((msg, index) => (
          <Message key={index} text={msg} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <MessageInput sendMessage={sendMessage} />
    </div>
  );
};

export default ChatBox;
