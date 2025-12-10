import { motion } from 'framer-motion';
import { FiCheck, FiX, FiClock, FiLayout, FiShield, FiUserCheck } from 'react-icons/fi';
import './ComparisonSection.css';

const ComparisonSection = () => {
  const comparisonData = [
    {
      feature: "Hiring Process",
      icon: <FiClock />,
      traditional: "Tedious, slow, manual",
      swype: "Fast, under 48 hours",
      traditionalIcon: <FiX className="status-icon negative" />,
      swypeIcon: <FiCheck className="status-icon positive" />
    },
    {
      feature: "Interface",
      icon: <FiLayout />,
      traditional: "Boring, text-heavy",
      swype: "Gamified, swipe-based",
      traditionalIcon: <FiX className="status-icon negative" />,
      swypeIcon: <FiCheck className="status-icon positive" />
    },
    {
      feature: "Verification",
      icon: <FiShield />,
      traditional: "No verification",
      swype: "100% Verified profiles",
      traditionalIcon: <FiX className="status-icon negative" />,
      swypeIcon: <FiCheck className="status-icon positive" />
    },
    {
      feature: "Screening",
      icon: <FiUserCheck />,
      traditional: "None / Keyword sorting",
      swype: "AI + Human screening",
      traditionalIcon: <FiX className="status-icon negative" />,
      swypeIcon: <FiCheck className="status-icon positive" />
    }
  ];

  return (
    <section className="comparison-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Why Choose TalentSwype?</h2>
          <p>See how we stack up against the rest</p>
        </motion.div>

        <div className="comparison-container glass-card">
          <div className="comparison-header">
            <div className="col-feature"></div>
            <div className="col-traditional">
              <h3>Other Platforms</h3>
            </div>
            <div className="col-swype">
              <h3>TalentSwype</h3>
            </div>
          </div>

          <div className="comparison-body">
            {comparisonData.map((item, index) => (
              <motion.div 
                key={index}
                className="comparison-row"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="col-feature">
                  <span className="feature-icon-wrapper">{item.icon}</span>
                  <span className="feature-name">{item.feature}</span>
                </div>
                
                <div className="col-traditional">
                  <div className="mobile-label">Other Platforms</div>
                  <div className="cell-content">
                    {item.traditionalIcon}
                    <span className="val-text">{item.traditional}</span>
                  </div>
                </div>
                
                <div className="col-swype">
                  <div className="mobile-label">TalentSwype</div>
                  <div className="cell-content">
                    {item.swypeIcon}
                    <span className="val-text">{item.swype}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
