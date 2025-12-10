import { motion, useAnimation, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiArrowRight, FiMapPin, FiBriefcase, FiDollarSign } from 'react-icons/fi';
import { MdTouchApp } from 'react-icons/md';
import { FaRegHandPointer } from 'react-icons/fa6';
import rahulImage from '../assets/candidate-rahul.png';
import arjunImage from '../assets/candidate-arjun.png';
import priyaImage from '../assets/candidate-priya.png';
import './HeroSection.css';

const CANDIDATES = [
  {
    id: 1,
    name: "Rahul Verma",
    role: "Senior React Developer",
    company: "TechMahindra",
    location: "Bangalore, India",
    experience: "5 years",
    salary: "₹10L - ₹12L",
    match: 95,
    skills: ["React", "TypeScript", "Node.js", "AWS"],
    image: rahulImage
  },
  {
    id: 2,
    name: "Arjun Patel",
    role: "Full Stack Engineer",
    company: "Infosys",
    location: "Pune, India",
    experience: "7 years",
    salary: "₹12L - ₹15L",
    match: 88,
    skills: ["Python", "Django", "PostgreSQL", "Docker"],
    image: arjunImage
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "UI/UX Designer",
    company: "Wipro Digital",
    location: "Hyderabad, India",
    experience: "4 years",
    salary: "₹8L - ₹10L",
    match: 92,
    skills: ["Figma", "Prototyping", "User Research", "CSS"],
    image: priyaImage
  }
];

const SwipeHandHelper = ({ showLeft, showRight }) => {
  const [currentAnimation, setCurrentAnimation] = useState('left');

  useEffect(() => {
    // Only alternate if both animations are still enabled
    if (!showLeft || !showRight) return;

    const interval = setInterval(() => {
      setCurrentAnimation(prev => prev === 'left' ? 'right' : 'left');
    }, 4000); // Switch every 4 seconds

    return () => clearInterval(interval);
  }, [showLeft, showRight]);

  // Determine which animation to show
  const shouldShowLeft = showLeft && (!showRight || currentAnimation === 'left');
  const shouldShowRight = showRight && (!showLeft || currentAnimation === 'right');

  return (
    <div className="swipe-hand-container">
      {/* Left Swipe Animation */}
      <AnimatePresence>
        {shouldShowLeft && (
          <motion.div
            key="left-hand"
            className="hand-wrapper left-swipe"
            initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }}
            animate={{
              opacity: [0.4, 1, 1, 0.4],
              x: [0, -40, -80, -80],
              y: [0, -5, 0, 0],
              rotate: [0, -10, -20, -20]
            }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            transition={{
              duration: 4,
              times: [0, 0.2, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 0
            }}
          >
            <div className="hand-icon-wrapper">
              <svg className="swipe-arrow-svg" viewBox="0 0 100 60" style={{ transform: 'scaleX(-1)' }}>
                <path 
                  d="M 10 35 Q 50 5 90 35" 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M 75 20 L 90 35 L 75 50" 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              <FaRegHandPointer className="hand-icon" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Right Swipe Animation */}
      <AnimatePresence>
        {shouldShowRight && (
          <motion.div
            key="right-hand"
            className="hand-wrapper right-swipe"
            initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }}
            animate={{
              opacity: [0.4, 1, 1, 0.4],
              x: [0, 40, 80, 80],
              y: [0, -5, 0, 0],
              rotate: [0, 10, 20, 20]
            }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            transition={{
              duration: 4,
              times: [0, 0.2, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 0
            }}
          >
            <div className="hand-icon-wrapper">
              <svg className="swipe-arrow-svg" viewBox="0 0 100 60" >
                <path 
                  d="M 10 35 Q 50 5 90 35" 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                 <path 
                  d="M 75 20 L 90 35 L 75 50" 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              <FaRegHandPointer className="hand-icon" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SwipeCard = ({ data, active, onSwipe, index }) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);
  const acceptOpacity = useTransform(x, [-100, 0], [1, 0]);
  const rejectOpacity = useTransform(x, [0, 100], [0, 1]);

  const [exitX, setExitX] = useState(0);

  const handleDragEnd = (event, info) => {
    if (!active) return;
    
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset > 100 || velocity > 500) {
      setExitX(200);
      onSwipe('right');
    } else if (offset < -100 || velocity < -500) {
      setExitX(-200);
      onSwipe('left');
    }
  };

  const triggerSwipe = (direction) => {
    if (!active) return;
    setExitX(direction === 'right' ? 200 : -200);
    onSwipe(direction);
  };

  return (
    <motion.div
      className="swipe-card glass-card"
      style={{
        x,
        rotate,
        opacity,
        zIndex: index,
        cursor: active ? 'grab' : 'default',
        scale: active ? 1 : 0.95 + (index * 0.02),
        y: active ? 0 : -10 * (CANDIDATES.length - index),
      }}
      drag={active ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.7}
      onDragEnd={handleDragEnd}
      initial={false}
      animate={{ 
        scale: active ? 1 : 0.95,
        opacity: 1,
        y: active ? 0 : -10
      }}
      exit={{ 
        x: exitX !== 0 ? (exitX > 0 ? 500 : -500) : 0, 
        opacity: 0,
        transition: { duration: 0.6, ease: "easeInOut" } 
      }}
      whileTap={{ cursor: 'grabbing' }}
    >
      <motion.div style={{ opacity: acceptOpacity }} className="swipe-indicator accept">
        LIKE
      </motion.div>
      <motion.div style={{ opacity: rejectOpacity }} className="swipe-indicator reject">
        NOPE
      </motion.div>

      <div className="match-badge">{data.match}%</div>

      <div className="card-header">
        <img src={data.image} alt={data.name} className="card-avatar" />
        <div className="card-info">
          <h4>{data.name}</h4>
          <p className="card-role">{data.role}</p>
          <p className="card-company">{data.company}</p>
        </div>
      </div>

      <div className="card-details">
        <div className="detail-item">
          <FiMapPin className="detail-icon" />
          <span>{data.location}</span>
        </div>
        <div className="detail-item">
          <FiBriefcase className="detail-icon" />
          <span>{data.experience}</span>
        </div>
        <div className="detail-item">
          <FiDollarSign className="detail-icon" />
          <span>{data.salary}</span>
        </div>
      </div>

      <div className="card-tags">
        {data.skills.map(skill => (
          <span key={skill} className="tag">{skill}</span>
        ))}
      </div>

      <div className="card-actions">
        <motion.button 
          className="action-btn accept"
          onClick={(e) => {
            e.stopPropagation();
            triggerSwipe('left');
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ✓
        </motion.button>
        <motion.button 
          className="action-btn reject"
          onClick={(e) => {
            e.stopPropagation();
            triggerSwipe('right');
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ✕
        </motion.button>
      </div>
    </motion.div>
  );
};

const HeroSection = () => {
  const controls = useAnimation();
  const [cards, setCards] = useState(CANDIDATES);
  const [resetKey, setResetKey] = useState(0);
  const [showLeft, setShowLeft] = useState(true);
  const [showRight, setShowRight] = useState(true);

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    });
  }, [controls]);

  const handleSwipe = (direction) => {
    console.log(`User swiped ${direction}`);
    
    // Disable suggestion based on direction
    if (direction === 'left') {
      setShowLeft(false);
    }
    if (direction === 'right') {
      setShowRight(false);
    }

    setCards(prev => {
      const newCards = [...prev];
      newCards.pop();
      if (newCards.length === 0) {
        // Immediately reset cards for seamless infinite loop
        setCards(CANDIDATES);
        setResetKey(k => k + 1); // Force remount
        return CANDIDATES;
      }
      return newCards;
    });
  };

  return (
    <section className="hero-section">
      <div className="hero-gradient-bg"></div>
      
      <div className="container hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hiring Simplified. <br />
            Just <span className="swipe-word">Swipe <MdTouchApp className="swipe-icon-title" /></span> And We Do The Rest!
          </motion.h1>
          
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Now our team will handle all the backend tasks for you
          </motion.p>

          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Sign up <FiArrowRight />
            </motion.button>
            

          </motion.div>
        </motion.div>

        <div className="hero-visual">
          <div className="swipe-cards-container">
            <SwipeHandHelper showLeft={showLeft} showRight={showRight} />

            <AnimatePresence key={resetKey}>
              {cards.map((card, index) => (
                <SwipeCard
                  key={card.id}
                  data={card}
                  index={index}
                  active={index === cards.length - 1}
                  onSwipe={handleSwipe}
                />
              ))}
            </AnimatePresence>
          </div>

          <motion.div 
            className="floating-card glass"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <div className="stat-number">10K+</div>
            <div className="stat-label">Active Jobs</div>
          </motion.div>

          <motion.div 
            className="floating-card glass floating-card-2"
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1
            }}
          >
            <div className="stat-number">50K+</div>
            <div className="stat-label">Candidates</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
