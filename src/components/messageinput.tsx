// src/components/MessageInput.tsx
import React, { useState } from 'react'; // Import React to ensure the file is treated as a module
import styles from '../styles/MessageInput.module.css';

interface MessageInputProps {
  sendMessage: (text: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ sendMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      sendMessage(inputValue);
      setInputValue('');
    }
  };

  return (
    <form className={styles.inputForm} onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={styles.inputField}
        placeholder="Type a message..."
      />
      <button type="submit" className={styles.sendButton}>Send</button>
    </form>
  );
};

export default MessageInput;
