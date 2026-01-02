import { motion } from 'framer-motion';
import { FiX, FiAlertCircle, FiMeh, FiClock } from 'react-icons/fi';
import './ProblemSection.css';

const ProblemSection = () => {
  const candidateProblems = [
    { icon: <FiX />, text: 'No response after applying' },
    { icon: <FiX />, text: 'Fake job posts' },
    { icon: <FiMeh />, text: 'Low-quality platforms' },
    { icon: <FiAlertCircle />, text: 'Lack of guidance' },
  ];

  const employerProblems = [
    { icon: <FiX />, text: 'Irrelevant CVs' },
    { icon: <FiX />, text: 'No-shows' },
    { icon: <FiClock />, text: 'Slow screening' },
    { icon: <FiAlertCircle />, text: 'Manual processes' },
  ];

  return (
    <>
      <section id="employer-problems" className="problem-section employer-problems">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Problems Employers Face</h2>
            <p>Finding the right talent is like finding a needle in a haystack.</p>
          </motion.div>

          <div className="problems-list-container">
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
          </div>
        </div>
      </section>

      <section id="candidate-problems" className="problem-section candidate-problems">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Problems Candidates Face</h2>
            <p>Traditional recruitment is slow, confusing, and impersonal.</p>
          </motion.div>

          <div className="problems-list-container">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default ProblemSection;
