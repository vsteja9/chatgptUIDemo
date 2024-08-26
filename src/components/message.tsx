// src/components/Message.tsx
import React from 'react';
import styles from '../styles/Message.module.css';

interface MessageProps {
  text: string;
}

const Message: React.FC<MessageProps> = ({ text }) => {
  return <div className={styles.message}>{text}</div>;
};

export default Message;
