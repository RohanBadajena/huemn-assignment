import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChrome, FaArrowUp } from 'react-icons/fa';
import './App.css';

function App() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  const slideInVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo">
          <FaChrome size={32} />
          <span>chrome</span>
        </div>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">The Browser by Google</a>
          <a href="#">Features</a>
          <a href="#">Support</a>
        </nav>
      </header>
      <main className="main-content">
        <div className="headline">
          <FaChrome size={60} className="headline-icon" />
          <h1>The browser built to be yours</h1>
          <div className="buttons">
            <button>Updates</button>
            <button>Yours</button>
            <button>Safe</button>
            <button>Fast</button>
            <button>By Google</button>
          </div>
          <a href="#" class="no-underline">Download here</a>
        </div>
        <motion.div 
          className="chrome-images"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.3 }}
        >
          <motion.img 
            src="/image1.png" 
            alt="Chrome Image 1" 
            variants={slideInVariants}
            transition={{ duration: 0.8 }} 
          />
          <motion.img 
            src="/image2.png" 
            alt="Chrome Image 2" 
            variants={slideInVariants}
            transition={{ duration: 0.8 }} 
          />
          <motion.img 
            src="/image3.png" 
            alt="Chrome Image 3" 
            variants={slideInVariants}
            transition={{ duration: 0.8 }} 
          />
        </motion.div>
      </main>

      {/* Fast Section with Video */}
      <div className="fast-section">
        <h2>
          The <span className="highlight">fast</span> way to do things online
        </h2>
        <div className="video-container">
          <video autoPlay muted loop className="fast-video">
            <source src="/video.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-columns">
          <div className="footer-column">
            <h3>Chrome Family</h3>
            <a href="#">Other Platforms</a>
            <a href="#">Chromebooks</a>
            <a href="#">Chromecast</a>
          </div>
          <div className="footer-column">
            <h3>Enterprise</h3>
            <a href="#">Download Chrome Browser</a>
            <a href="#">Chrome Browser for Enterprise</a>
            <a href="#">Chrome Devices</a>
            <a href="#">ChromeOS</a>
            <a href="#">Google Cloud</a>
            <a href="#">Google Workspace</a>
          </div>
          <div className="footer-column">
            <h3>Education</h3>
            <a href="#">Google Chrome Browser</a>
            <a href="#">Devices</a>
            <a href="#">Web Store</a>
          </div>
          <div className="footer-column">
            <h3>Dev and Partners</h3>
            <a href="#">Chromium</a>
            <a href="#">ChromeOS</a>
            <a href="#">Chrome Web Store</a>
            <a href="#">Chrome Experiments</a>
            <a href="#">Chrome Beta</a>
            <a href="#">Chrome Dev</a>
            <a href="#">Chrome Canary</a>
          </div>
          <div className="footer-column">
            <h3>Stay Connected</h3>
            <a href="#">Chrome Help</a>
            <a href="#">Google Chrome Blog</a>
            <a href="#">Update Chrome</a>
            <a href="#">Chrome Tips</a>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <FaArrowUp
        className="scroll-top"
        onClick={scrollTop}
        style={{ display: showScroll ? 'flex' : 'none' }}
      />
    </div>
  );
}

export default App;
