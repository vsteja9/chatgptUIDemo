// src/components/Sidebar.tsx
import React, { useState } from 'react';
import styles from '../styles/sidebar.module.css';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [chatHistory, setChatHistory] = useState<string[]>([]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const startNewChat = () => {
    const newChat = `Chat ${chatHistory.length + 1}`;
    setChatHistory([newChat, ...chatHistory]);
  };

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
      <div className={styles.header}>
        <h2 className={styles.title}>ChatGPTDemo</h2>
        <button onClick={toggleSidebar} className={styles.closeButton}>
          {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
        </button>
      </div>
      <div className={styles.actions}>
        <button onClick={startNewChat} className={styles.newChatButton}>New Chat</button>
      </div>
      <div className={styles.history}>
        <h3 className={styles.historyTitle}>Chat History</h3>
        <ul className={styles.historyList}>
          {chatHistory.map((chat, index) => (
            <li key={index} className={styles.historyItem}>
              {chat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
