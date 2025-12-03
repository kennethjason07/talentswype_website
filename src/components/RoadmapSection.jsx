import { motion } from 'framer-motion';
import './RoadmapSection.css';

const RoadmapSection = () => {
  const quarters = [
    {
      quarter: 'Q1 2026',
      title: 'Foundation',
      items: ['Platform launch', 'Core swipe features', 'Basic AI screening', 'Initial user base'],
    },
    {
      quarter: 'Q2 2026',
      title: 'Growth',
      items: ['SkillVerse launch', 'Enhanced AI', 'Mobile apps', 'Employer dashboard'],
    },
    {
      quarter: 'Q3 2026',
      title: 'Scale',
      items: ['Advanced analytics', 'Video interviews', 'API integrations', 'Multi-city expansion'],
    },
    {
      quarter: 'Q4 2026',
      title: 'Innovation',
      items: ['AR/VR features', 'Blockchain verification', 'Global expansion', 'Enterprise solutions'],
    },
  ];

  return (
    <section className="roadmap-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Roadmap</h2>
          <p>Building the future of recruitment</p>
        </motion.div>

        <div className="roadmap-timeline">
          {quarters.map((item, index) => (
            <motion.div
              key={index}
              className="roadmap-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="roadmap-card glass-card">
                <div className="quarter-badge">{item.quarter}</div>
                <h3>{item.title}</h3>
                <ul>
                  {item.items.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              {index < quarters.length - 1 && <div className="roadmap-connector"></div>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
