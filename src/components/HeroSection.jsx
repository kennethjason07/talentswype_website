import { motion, useAnimation, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiArrowRight, FiMapPin, FiBriefcase, FiDollarSign } from 'react-icons/fi';
import sarahImage from '../assets/candidate-sarah.png';
import alexImage from '../assets/candidate-alex.png';
import priyaImage from '../assets/candidate-priya.png';
import './HeroSection.css';

const CANDIDATES = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Senior React Developer",
    company: "TechFlow AI",
    location: "San Francisco, CA",
    experience: "5 years",
    salary: "$120k - $150k",
    match: 95,
    skills: ["React", "TypeScript", "Node.js", "AWS"],
    image: sarahImage
  },
  {
    id: 2,
    name: "Alex Rivera",
    role: "Full Stack Engineer",
    company: "CloudScale",
    location: "Austin, TX",
    experience: "7 years",
    salary: "$130k - $160k",
    match: 88,
    skills: ["Python", "Django", "PostgreSQL", "Docker"],
    image: alexImage
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "UI/UX Designer",
    company: "Creative Studio",
    location: "Remote",
    experience: "4 years",
    salary: "$90k - $120k",
    match: 92,
    skills: ["Figma", "Prototyping", "User Research", "CSS"],
    image: priyaImage
  }
];

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

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    });
  }, [controls]);

  const handleSwipe = () => {
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
            India's Fastest, Most Transparent Recruitment Ecosystem
          </motion.h1>
          
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            A swipe-based job platform with AI + Human screening for candidates and employers.
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
            >
              Join Our WhatsApp Community <FiArrowRight />
            </motion.button>
            
            <motion.button 
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Platform
            </motion.button>
          </motion.div>
        </motion.div>

        <div className="hero-visual">
          <div className="swipe-cards-container">
            <motion.div 
              className="thought-bubble"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <div className="bubble-content">Try swiping! 👆</div>
              <div className="bubble-tail"></div>
            </motion.div>

            <div className="swipe-side-indicator left">
              <div className="indicator-icon">←</div>
              <div className="indicator-text">
                <h3>Swipe Left</h3>
                <p>to Accept</p>
              </div>
            </div>

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

            <div className="swipe-side-indicator right">
              <div className="indicator-icon">→</div>
              <div className="indicator-text">
                <h3>Swipe Right</h3>
                <p>to Reject</p>
              </div>
            </div>
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
