import { motion } from 'framer-motion';
import './TeamSection.css';

const TeamSection = () => {
  const team = [
    { name: 'Shantanu', role: 'Founder & CEO', color: 'blue' },
    { name: 'Kenneth', role: 'CTO & Co-founder', color: 'purple' },
    { name: 'Prasad', role: 'Co-founder', color: 'purple' },
    { name: 'Mansi', role: 'Operations', color: 'pink' },
    { name: 'Varsha', role: 'Relationship Manager', color: 'green' },
  ];

  return (
    <section id="team" className="team-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Meet Our Team</h2>
          <p>The people building the future of recruitment</p>
        </motion.div>

        <div className="team-grid">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className={`team-card glass-card team-${member.color}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="team-avatar"></div>
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
