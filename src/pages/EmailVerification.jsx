import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./EmailVerification.css";

const EmailVerification = () => {
  const tickVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeInOut",
        delay: 0.2
      }
    }
  };

  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20 
      }
    }
  };

  return (
    <div className="verification-page">
      <div className="verification-container glass">
        <div className="icon-wrapper">
          <motion.div 
            className="success-circle"
            variants={circleVariants}
            initial="hidden"
            animate="visible"
          >
            <svg viewBox="0 0 52 52" className="checkmark-svg">
              <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
              <motion.path
                className="checkmark-check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
                variants={tickVariants}
              />
            </svg>
          </motion.div>
        </div>
        
        <motion.div 
          className="verification-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h1>Email Verified!</h1>
          <p>Ready to Swype? Your email has been successfully verified.</p>
          <p className="sub-text">You can now return to the app and login to start matching.</p>
          
          <Link to="/" className="btn btn-primary return-btn">
            Return to App
          </Link>
        </motion.div>
      </div>

      <div className="bg-glow blue"></div>
      <div className="bg-glow purple"></div>
    </div>
  );
};

export default EmailVerification;
