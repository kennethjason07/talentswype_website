import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCalendar, FiUser, FiArrowLeft } from 'react-icons/fi';
import { blogPosts } from '../data/blogData';
import './BlogPage.css';

const BlogPage = () => {
  return (
    <div className="blog-page">
      <div className="blog-page-bg"></div>
      
      <div className="container">
        <div className="blog-nav">
          <Link to="/" className="back-link">
            <FiArrowLeft /> Back to Home
          </Link>
        </div>

        <motion.div 
          className="blog-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>TalentSwype Insights</h1>
          <p>Expert perspectives on the future of recruitment, technology, and hiring trends.</p>
        </motion.div>

        <div className="blog-listing-grid">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className={`blog-card glass-card blog-${post.color}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
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
                    Read Article <FiArrowRight />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
