import { motion } from 'framer-motion';
import { FiMail, FiMessageCircle } from 'react-icons/fi';
import { FaWhatsapp, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass">
      <div className="container footer-content">
        <motion.div
          className="footer-main"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-brand">
            <h3>TalentSwype</h3>
            <p>India's fastest, most transparent recruitment ecosystem</p>
          </div>

          <div className="footer-cta">
            <h4>Join Our Community</h4>
            <motion.a
              href="https://chat.whatsapp.com/your-link"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp /> WhatsApp Community
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="footer-social"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h4>Follow Us</h4>
          <div className="social-links">
            <motion.a href="#" whileHover={{ scale: 1.2, y: -5 }}>
              <FaLinkedin />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.2, y: -5 }}>
              <FaTwitter />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.2, y: -5 }}>
              <FaInstagram />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.2, y: -5 }}>
              <FiMail />
            </motion.a>
          </div>
        </motion.div>

        <div className="footer-bottom">
          <p>&copy; 2026 TalentSwype. All rights reserved.</p>
          <p>Built with ❤️ for the future of recruitment</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
