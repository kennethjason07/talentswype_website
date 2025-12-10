import { motion } from 'framer-motion';

import './USPSection.css';

const USPSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Anjali Mehta",
      role: "HR Director @ TechFlow",
      quote: "TalentSwype reduced our hiring time by 70%. The candidate quality is unmatched.",
      tags: ["Case Study", "Hiring Success"]
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Founder @ StartupX",
      quote: "Finally, a platform that understands the speed we need. One swipe and we found our lead dev.",
      tags: ["Founder Review", "Speed"]
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "Talent Acquisition Lead",
      quote: "The pre-screening is accurate. We stopped wasting time on initial interview rounds.",
      tags: ["HR Interview", "Quality"]
    }
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
          <h2>Success Stories</h2>
          <p>What HR leaders and Founders say about us</p>
        </motion.div>

        <div className="usp-grid testimonials-grid">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              className="testimonial-card glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="testimonial-tags">
                {item.tags.map(tag => <span key={tag} className="t-tag">{tag}</span>)}
              </div>
              <p className="testimonial-quote">"{item.quote}"</p>
              <div className="testimonial-author">
                <div className="author-avatar-placeholder">{item.name[0]}</div>
                <div className="author-info">
                  <h5>{item.name}</h5>
                  <span>{item.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection;
