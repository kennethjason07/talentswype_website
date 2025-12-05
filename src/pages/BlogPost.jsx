import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCalendar, FiUser, FiClock } from 'react-icons/fi';
import { blogPosts } from '../data/blogData';
import './BlogPost.css';
import { useEffect } from 'react';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="blog-post-page">
      <div className="blog-post-bg"></div>
      
      <div className="container post-container">
        <div className="post-nav">
          <Link to="/blog" className="back-link">
            <FiArrowLeft /> Back to Insights
          </Link>
        </div>

        <motion.article 
          className="post-content glass-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <header className="post-header">
            <div className={`post-category category-${post.color}`}>
              {post.category}
            </div>
            <h1>{post.title}</h1>
            
            <div className="post-meta">
              <div className="meta-item">
                <FiUser />
                <span>{post.author}, {post.role}</span>
              </div>
              <div className="meta-item">
                <FiCalendar />
                <span>{post.date}</span>
              </div>
              <div className="meta-item">
                <FiClock />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          <div 
            className="post-body"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="post-footer">
            <h3>Share this article</h3>
            <div className="share-buttons">
              <button className="share-btn">LinkedIn</button>
              <button className="share-btn">Twitter</button>
              <button className="share-btn">Copy Link</button>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default BlogPost;
