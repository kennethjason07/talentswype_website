import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import developerAvatar from '../assets/developer.jpg';
import './HeroSection.css';

const HeroSection = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    });
  }, [controls]);

  const cardVariants = {
    initial: { opacity: 0, x: -100, rotate: -10 },
    animate: (i) => ({
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut'
      }
    })
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
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="swipe-card glass-card"
                custom={i}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                whileHover={{ 
                  scale: 1.05,
                  rotate: i === 2 ? 0 : i === 1 ? -5 : 5,
                  zIndex: 10
                }}
              >
                <div className="card-header">
                  <img src={developerAvatar} alt="Developer" className="card-avatar" />
                  <div className="card-info">
                    <h4>Software Developer</h4>
                    <p>Tech Corp • Remote</p>
                  </div>
                </div>
                <div className="card-tags">
                  <span className="tag">React</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">MongoDB</span>
                </div>
                <div className="card-actions">
                  <motion.button 
                    className="action-btn reject"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    ✕
                  </motion.button>
                  <motion.button 
                    className="action-btn accept"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    ♥
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Floating Glass Cards */}
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
