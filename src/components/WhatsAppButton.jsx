import React, { useState } from 'react';
import { FaWhatsapp, FaChevronDown, FaCommentDots } from 'react-icons/fa';
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '919764840628';
  const message = 'Hello! I would like to know more about TalentSwype.';

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleChatClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className={`whatsapp-button-container ${isOpen ? 'open' : ''}`}>
      {isOpen && (
        <div className="whatsapp-chat-window">
          <div className="chat-header">
            <div className="chat-avatar">
              <IoChatbubbleEllipsesOutline />
            </div>
            <div className="chat-message-bubble">
              <p>I checked the website, and I have a few questions to ask</p>
            </div>
          </div>
          
          <button className="whatsapp-redirect-btn" onClick={handleChatClick}>
            <FaWhatsapp className="btn-icon" />
            <span>Chat With Us</span>
          </button>
          
          <div className="chat-footer">
            <span>Powered by TalentSwype</span>
          </div>
        </div>
      )}
      
      <button 
        className={`whatsapp-fab ${isOpen ? 'active' : ''}`} 
        onClick={toggleChat} 
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <FaChevronDown className="whatsapp-icon" /> : <IoChatbubbleEllipsesOutline className="whatsapp-icon" />}
      </button>
    </div>
  );
};

export default WhatsAppButton;
