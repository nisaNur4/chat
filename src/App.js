import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Sayfa geçişlerini yönetir. URL-bileşen.
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import ChatRoom from './pages/ChatRoom';
import ResetPassword from './pages/ResetPassword'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} /> {/* <<<<< YENİ ROUTE */}
        <Route path="/chat" element={<ChatRoom />} />
      </Routes>
    </Router>
  );
}

export default App; // Dışa aktarır.
