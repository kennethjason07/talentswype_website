import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiMenu, FiSettings } from 'react-icons/fi';
import developerAvatar from '../assets/developer.jpg';
import './MobileDemoSection.css';

const DEMO_CANDIDATES = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Senior React Dev",
    image: developerAvatar,
    action: 'accept' // Left swipe
  },
  {
    id: 2,
    name: "Alex Rivera",
    role: "Full Stack Eng",
    image: developerAvatar,
    action: 'accept' // Left swipe
  },
  {
    id: 3,
    name: "James Wilson",
    role: "UI Designer",
    image: developerAvatar,
    action: 'reject' // Right swipe
  },
  {
    id: 4,
    name: "Maria Garcia",
    role: "Product Manager",
    image: developerAvatar,
    action: 'accept' // Left swipe
  },
  {
    id: 5,
    name: "David Kim",
    role: "DevOps Engineer",
    image: developerAvatar,
    action: 'reject' // Right swipe
  }
];

const DemoCard = ({ data, index, active, swipeDirection }) => {
  const variants = {
    initial: { scale: 0.9, y: 0, opacity: 0 },
    animate: { 
      scale: active ? 1 : 0.95, 
      y: active ? 0 : -10,
      opacity: 1,
      x: 0,
      rotate: 0
    },
    exitAccept: {
      x: -300, // Left
      rotate: -20,
      opacity: 0,
      transition: { duration: 0.6, ease: "easeInOut" }
    },
    exitReject: {
      x: 300, // Right
      rotate: 20,
      opacity: 0,
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  };

  return (
    <motion.div
      className="demo-card"
      style={{ zIndex: index }}
      variants={variants}
      initial="initial"
      animate="animate"
      exit={data.action === 'accept' ? "exitAccept" : "exitReject"}
    >
      {swipeDirection === 'accept' && active && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="demo-indicator accept"
        >
          LIKE
        </motion.div>
      )}
      {swipeDirection === 'reject' && active && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="demo-indicator reject"
        >
          NOPE
        </motion.div>
      )}
      
      <img src={data.image} alt={data.name} className="demo-card-image" />
      <div className="demo-card-content">
        <h4>{data.name}</h4>
        <p>{data.role}</p>
      </div>
    </motion.div>
  );
};

const MobileDemoSection = () => {
  const [cards, setCards] = useState(DEMO_CANDIDATES);
  const [swipeDirection, setSwipeDirection] = useState(null);

  useEffect(() => {
    if (cards.length === 0) {
      // Wait for last card to fully exit before resetting
      const timer = setTimeout(() => {
        setCards(DEMO_CANDIDATES);
        setSwipeDirection(null);
      }, 800);
      return () => clearTimeout(timer);
    }

    const currentCard = cards[cards.length - 1];
    
    // Auto swipe logic
    const timer = setTimeout(() => {
      setSwipeDirection(currentCard.action);
      
      // Remove card after animation starts
      setTimeout(() => {
        setCards(prev => {
          const newCards = [...prev];
          newCards.pop();
          return newCards;
        });
        setSwipeDirection(null);
      }, 700); // Wait for exit animation
      
    }, 2000); // Wait before swiping

    return () => clearTimeout(timer);
  }, [cards]);

  return (
    <section className="mobile-demo-section">
      <div className="mobile-demo-header">
        <h2>Hire in Seconds, Not Weeks</h2>
        <p>One swipe to accept top talent. One swipe to move on. No endless forms, no complicated workflows—just instant decisions.</p>
      </div>

      <div className="demo-container">
        <div className="demo-instruction left">
          <div className="instruction-icon">←</div>
          <h3>Swipe Left</h3>
          <p>to Accept</p>
        </div>

        <div className="phone-frame">
          <div className="phone-notch"></div>
          <div className="phone-screen">
            <div className="app-header">
              <FiMenu />
              <h3>Card Swipe</h3>
              <FiSettings />
            </div>

            <div className="demo-cards-container">
              <AnimatePresence>
                {cards.map((card, index) => (
                  <DemoCard
                    key={card.id}
                    data={card}
                    index={index}
                    active={index === cards.length - 1}
                    swipeDirection={swipeDirection}
                  />
                ))}
              </AnimatePresence>
            </div>

            <div className="demo-controls">
              <motion.button 
                className={`demo-btn accept ${swipeDirection === 'accept' ? 'active-glow' : ''}`}
                animate={swipeDirection === 'accept' ? { scale: [1, 1.2, 1] } : {}}
              >
                ✓
              </motion.button>
              <motion.button 
                className={`demo-btn reject ${swipeDirection === 'reject' ? 'active-glow' : ''}`}
                animate={swipeDirection === 'reject' ? { scale: [1, 1.2, 1] } : {}}
              >
                ✕
              </motion.button>
            </div>
          </div>
        </div>

        <div className="demo-instruction right">
          <div className="instruction-icon">→</div>
          <h3>Swipe Right</h3>
          <p>to Reject</p>
        </div>
      </div>
    </section>
  );
};

export default MobileDemoSection;
