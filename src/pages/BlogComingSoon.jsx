import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiClock, FiEdit3 } from 'react-icons/fi';
import './BlogComingSoon.css';

const BlogComingSoon = () => {
  return (
    <div className="blog-coming-soon-page">
      <div className="coming-soon-bg"></div>
      
      <div className="container">
        <motion.div 
          className="coming-soon-card glass-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="icon-container"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="icon-circle icon-blue">
              <FiEdit3 />
            </div>
            <div className="icon-circle icon-purple floating">
              <FiClock />
            </div>
          </motion.div>

          <h1>Our Blog is Under Construction</h1>
          <p>
            We're crafting high-quality insights, tips, and trends about the future of recruitment. 
            Stay tuned for articles that will help you hire smarter and faster.
          </p>

          <div className="topics-preview">
            <h3>Coming Topics:</h3>
            <div className="topics-list">
              <span className="topic-tag">AI in Hiring</span>
              <span className="topic-tag">Gen Z Recruitment</span>
              <span className="topic-tag">Swipe-Based Applications</span>
              <span className="topic-tag">Employer Branding</span>
            </div>
          </div>

          <Link to="/" className="btn btn-primary">
            <FiArrowLeft /> Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogComingSoon;
