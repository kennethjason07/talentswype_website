import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container navbar-content">
        <motion.div className="logo" whileHover={{ scale: 1.05 }}>
          <span className="logo-text">TalentSwype</span>
        </motion.div>

        <div className="nav-links">
          <a href="#problem">Problems</a>
          <a href="#solution">Solution</a>
          <a href="#pricing">Pricing</a>
          <a href="#team">Team</a>
          <motion.a
            href="https://chat.whatsapp.com/your-link"
            className="btn btn-primary btn-small"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Community
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
