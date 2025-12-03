import { motion } from 'framer-motion';
import './CoreValuesSection.css';

const CoreValuesSection = () => {
  const values = [
    { text: 'Transparency', color: 'blue' },
    { text: 'Speed', color: 'purple' },
    { text: 'Fun UX', color: 'pink' },
    { text: 'Candidate-first', color: 'green' },
    { text: 'Employer trust', color: 'orange' },
    { text: 'High-quality screening', color: 'blue' },
    { text: 'Innovation', color: 'purple' },
  ];

  return (
    <section className="values-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Core Values</h2>
          <p>What drives us every day</p>
        </motion.div>

        <div className="values-container">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className={`value-chip glass value-${value.color}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.1, y: -5 }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                y: {
                  duration: 3 + index * 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
            >
              {value.text}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
