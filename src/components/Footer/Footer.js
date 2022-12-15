import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
const Footer = () => {
  return (
    <footer className="container footer">
        <img src="https://charlotte-remodeling-assets.s3.us-east-2.amazonaws.com/assets/logo.png"/>
        <h2 className="header">Stay Up To Date</h2>
      <ul className="social">
      <a href="#" target="_blank"><img  alt="google icon" src="https://charlotte-remodeling-assets.s3.us-east-2.amazonaws.com/assets/social-icons/google_icon.png"/></a>
      <a href="#" target="_blank"><img  alt="facebook icon" src="https://charlotte-remodeling-assets.s3.us-east-2.amazonaws.com/assets/social-icons/facebook_icon.png"/></a>
      <a href="#" target="_blank"><img  alt="instagram icon" src="https://charlotte-remodeling-assets.s3.us-east-2.amazonaws.com/assets/social-icons/instagram_icon.png"/></a>
      <a href="https://www.houzz.com/professionals/general-contractors/charlotte-remodeling-company-pfvwus-pf~277759379" target="_blank"><img  alt="houzz icon"className="sqr-icon" src="https://charlotte-remodeling-assets.s3.us-east-2.amazonaws.com/assets/social-icons/houzz_icon.png"/></a>
      <a href="https://nextdoor.com/pages/charlotte-remodeling-company/" target="_blank"><img className="sqr-icon" alt="nextdoor icon" src="https://charlotte-remodeling-assets.s3.us-east-2.amazonaws.com/assets/social-icons/nextdoor_icon.png"/></a>
      </ul>
      <p className="copyright">© Charolotte Remodeling Company</p>
    </footer>
  );
};

export default Footer;
