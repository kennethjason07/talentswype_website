import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCalendar, FiUser } from 'react-icons/fi';
import { blogPosts } from '../data/blogData';
import './BlogSection.css';

const BlogSection = () => {
  // Use first 3 posts for the home page section
  const displayPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Latest Insights</h2>
          <p>Trends, tips, and technology shaping the future of work</p>
        </motion.div>

        <div className="blog-grid">
          {displayPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className={`blog-card glass-card blog-${post.color}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-date"><FiCalendar /> {post.date}</span>
                </div>
                
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                
                <div className="blog-footer">
                  <div className="blog-author">
                    <div className="author-avatar">
                      <FiUser />
                    </div>
                    <span>{post.author}</span>
                  </div>
                  <Link to={`/blog/${post.id}`} className="read-more">
                    Read More <FiArrowRight />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="blog-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/blog" className="btn btn-secondary">View All Articles</Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
