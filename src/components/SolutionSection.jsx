import { motion } from 'framer-motion';
import { FiHeart, FiX, FiCheckCircle, FiZap, FiAward, FiUsers } from 'react-icons/fi';
import './SolutionSection.css';

const SolutionSection = () => {
  const candidateFeatures = [
    { icon: <FiHeart />, title: 'Swipe to apply or reject', color: 'pink' },
    { icon: <FiZap />, title: 'AI + Human hybrid screening', color: 'blue' },
    { icon: <FiCheckCircle />, title: 'Guaranteed updates', color: 'green' },
    { icon: <FiAward />, title: 'SkillVerse gamified assessments', color: 'purple' },
    { icon: <FiAward />, title: 'Build Rank (A+ to D)', color: 'orange' },
    { icon: <FiUsers />, title: 'RM guidance', color: 'blue' },
    { icon: <FiCheckCircle />, title: 'Verified profiles', color: 'green' },
  ];

  const employerFeatures = [
    { icon: <FiHeart />, title: 'Swipe to shortlist', color: 'pink' },
    { icon: <FiUsers />, title: 'View complete profiles post-shortlist', color: 'blue' },
    { icon: <FiCheckCircle />, title: 'Pre-vetted applicants', color: 'green' },
    { icon: <FiZap />, title: 'Automated follow-ups', color: 'purple' },
    { icon: <FiAward />, title: 'Full interview management', color: 'orange' },
    { icon: <FiZap />, title: 'Superfast hiring', color: 'pink' },
  ];

  return (
    <section id="solution" className="solution-section">
      <div className="solution-bg-gradient"></div>
      
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Swipe-Based Solution</h2>
          <p>Making recruitment fun, fast, and transparent</p>
        </motion.div>

        <div className="solution-grid">
          <motion.div
            className="solution-column"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="column-header">
              <h3>For Candidates</h3>
            </div>
            
            <div className="features-list">
              {candidateFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`feature-card glass-card feature-${feature.color}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <div className="feature-icon">{feature.icon}</div>
                  <p>{feature.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="solution-column"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="column-header">
              <h3>For Employers</h3>
            </div>
            
            <div className="features-list">
              {employerFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`feature-card glass-card feature-${feature.color}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <div className="feature-icon">{feature.icon}</div>
                  <p>{feature.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
