// src/App.tsx
import React, { useState } from 'react';
import ChatBox from './components/chatbox';
import Sidebar from './components/sidebar';
import './app.css';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="App">
      {isSidebarOpen ? (
        <Sidebar />
      ) : (
        <button className="openSidebarButton" onClick={() => setIsSidebarOpen(true)}>
          Open Sidebar
        </button>
      )}
      <ChatBox />
    </div>
  );
};

export default App;
