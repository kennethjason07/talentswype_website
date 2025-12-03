import { motion } from 'framer-motion';
import { FiX, FiAlertCircle, FiMeh, FiClock } from 'react-icons/fi';
import './ProblemSection.css';

const ProblemSection = () => {
  const candidateProblems = [
    { icon: <FiX />, text: 'No response after applying' },
    { icon: <FiMeh />, text: 'Boring applications' },
    { icon: <FiAlertCircle />, text: 'Lack of guidance' },
    { icon: <FiClock />, text: 'Confusing interviews' },
    { icon: <FiX />, text: 'Fake job posts' },
    { icon: <FiMeh />, text: 'Low-quality platforms' },
    { icon: <FiAlertCircle />, text: 'No fun element' },
  ];

  const employerProblems = [
    { icon: <FiX />, text: 'Irrelevant CVs' },
    { icon: <FiAlertCircle />, text: 'Unqualified applicants' },
    { icon: <FiClock />, text: 'Slow screening' },
    { icon: <FiMeh />, text: 'Verification delays' },
    { icon: <FiX />, text: 'No-shows' },
    { icon: <FiAlertCircle />, text: 'Manual processes' },
  ];

  return (
    <section id="problem" className="problem-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>The Problems We Solve</h2>
          <p>Traditional recruitment is broken. Here's why.</p>
        </motion.div>

        <div className="problems-grid">
          <motion.div
            className="problem-column"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="column-header">
              <h3>For Candidates</h3>
            </div>
            <div className="problems-list">
              {candidateProblems.map((problem, index) => (
                <motion.div
                  key={index}
                  className="problem-card glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="problem-icon">{problem.icon}</div>
                  <p>{problem.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="problem-column"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="column-header">
              <h3>For Employers</h3>
            </div>
            <div className="problems-list">
              {employerProblems.map((problem, index) => (
                <motion.div
                  key={index}
                  className="problem-card glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="problem-icon">{problem.icon}</div>
                  <p>{problem.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
