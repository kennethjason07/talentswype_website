import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMessageCircle } from 'react-icons/fi';
import { FaWhatsapp, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo.png';
import './Footer.css';

import { supabase } from '../lib/supabase';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert('Please agree to the privacy policy to continue.');
      return;
    }

    setIsSubmitting(true);
    try {
      if (!supabase) {
        throw new Error('Supabase client is not initialized. Check your environment variables.');
      }

      const { error } = await supabase
        .from('contact_submissions')
        .insert([{
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          consent_given: formData.consent,
          status: 'new'
        }]);

      if (error) throw error;

      alert('Thank you for contacting us! We will get back to you shortly.');
      setFormData({ name: '', phone: '', email: '', message: '', consent: false });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <img src={logo} alt="TalentSwype" className="footer-logo" />
            <p className="footer-slogan">Now our team will handle all the backend tasks for you</p>
          </div>

          <div className="footer-cta contact-form-container">
            <h4>Write to us</h4>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="name" 
                placeholder="Name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
              <input 
                type="tel" 
                name="phone" 
                placeholder="Phone Number" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Email Address" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
              <textarea 
                name="message" 
                placeholder="How can we help you?" 
                value={formData.message} 
                onChange={handleChange} 
                rows="3"
              ></textarea>
              
              <div className="form-consent">
                <label>
                  <input 
                    type="checkbox" 
                    name="consent" 
                    checked={formData.consent} 
                    onChange={handleChange} 
                    required 
                  />
                  <span>
                    I agree to receive promotions and marketing messages.
                  </span>
                </label>
              </div>

              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Contact Us'}
              </button>
            </form>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
