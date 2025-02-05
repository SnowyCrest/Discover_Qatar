import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './footerStyles.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2>Discover Qatar</h2>
          <div className="creators">
            <span>Made by</span>
            <div className="creator-links">
              <a href="https://github.com/SnowyCrest" target="_blank" rel="noopener noreferrer">
                <img src="https://github.com/SnowyCrest.png" alt="SnowyCrest" />
                Anas Timeridjine
              </a>
              &
              <a href="https://github.com/found-sec" target="_blank" rel="noopener noreferrer">
                <img src="https://github.com/found-sec.png" alt="found-sec" />
                Ashish Dhakal
              </a>
            </div>
          </div>
        </div>
        <div className="footer-right">
          <a href="https://github.com/SnowyCrest/Discover_Qatar" 
             className="github-button"
             target="_blank" 
             rel="noopener noreferrer">
            <FaGithub /> View on GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
