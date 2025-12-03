import { motion } from 'framer-motion';
import { FiZap, FiShield, FiTrendingUp, FiHeart, FiAward, FiUsers, FiTarget, FiStar } from 'react-icons/fi';
import './USPSection.css';

const USPSection = () => {
  const usps = [
    { icon: <FiHeart />, title: 'Fun swipe-based job discovery', color: 'pink' },
    { icon: <FiZap />, title: 'Hybrid AI + Human screening', color: 'blue' },
    { icon: <FiAward />, title: 'Verified candidate ranks', color: 'purple' },
    { icon: <FiShield />, title: 'Transparency in hiring', color: 'green' },
    { icon: <FiTarget />, title: 'SkillVerse challenges', color: 'orange' },
    { icon: <FiUsers />, title: 'RM support', color: 'blue' },
    { icon: <FiTrendingUp />, title: 'Interview management', color: 'purple' },
    { icon: <FiStar />, title: 'Replacement guarantee', color: 'pink' },
  ];

  return (
    <section className="usp-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Why Choose TalentSwype?</h2>
          <p>Unique features that set us apart</p>
        </motion.div>

        <div className="usp-grid">
          {usps.map((usp, index) => (
            <motion.div
              key={index}
              className={`usp-card glass-card usp-${usp.color}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="usp-icon">{usp.icon}</div>
              <h4>{usp.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection;
