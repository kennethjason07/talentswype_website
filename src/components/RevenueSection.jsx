import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import './RevenueSection.css';

const RevenueSection = () => {
  const employerPlans = [
    {
      name: 'Monthly',
      price: '₹9,999',
      period: '/month',
      features: ['1-month free trial', 'Priority support', 'Fast screening', 'Basic analytics'],
    },
    {
      name: 'Quarterly',
      price: '₹24,999',
      period: '/quarter',
      popular: true,
      features: ['1-month free trial', 'Priority support', 'Fast screening', 'Advanced analytics', 'Same-day delivery'],
    },
    {
      name: 'Annual',
      price: '₹89,999',
      period: '/year',
      features: ['1-month free trial', 'Premium support', 'Fastest screening', 'Full analytics', 'Same-day delivery', 'Replacement guarantee'],
    },
  ];



  return (
    <section id="pricing" className="revenue-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Pricing Plans</h2>
          <p>Choose the plan that works for you</p>
        </motion.div>

        <div className="pricing-container">
          <div className="employer-pricing">

            <div className="pricing-grid">
              {employerPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  className={`pricing-card glass-card ${plan.popular ? 'popular' : ''}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  whileHover={{ scale: 1.03, y: -10 }}
                >
                  {plan.popular && <div className="popular-badge">Most Popular</div>}
                  <h4>{plan.name}</h4>
                  <div className="price blurred">
                    <span className="amount">{plan.price}</span>
                    <span className="period">{plan.period}</span>
                  </div>
                  <ul className="features">
                    {plan.features.map((feature, i) => (
                      <li key={i}>
                        <FiCheck className="check-icon" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    className="btn btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default RevenueSection;
