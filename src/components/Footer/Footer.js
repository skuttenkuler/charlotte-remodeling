import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
const Footer = () => {
  return (
    <footer className="container footer">
        <img src="https://charlotte-remodeling-assets.s3.us-east-2.amazonaws.com/assets/logo.png"/>
        <h2 className="header">Stay Up To Date</h2>
      <ul className="social">
      <Link href="#" target="_blank"><img src="https://charlotte-remodeling-assets.s3.us-east-2.amazonaws.com/assets/social-icons/google_icon.png"/></Link>
      <Link href="#" target="_blank"><img src="https://charlotte-remodeling-assets.s3.us-east-2.amazonaws.com/assets/social-icons/facebook_icon.png"/></Link>
      <Link href="#" target="_blank"><img src="https://charlotte-remodeling-assets.s3.us-east-2.amazonaws.com/assets/social-icons/instagram_icon.png"/></Link>
      <Link href="#" target="_blank"><img className="sqr-icon" src="https://charlotte-remodeling-assets.s3.us-east-2.amazonaws.com/assets/social-icons/houzz_icon.png"/></Link>
      <Link href="#" target="_blank"><img className="sqr-icon" src="https://charlotte-remodeling-assets.s3.us-east-2.amazonaws.com/assets/social-icons/nextdoor_icon.png"/></Link>
      </ul>
      <p className="copyright">© Charolotte Remodeling Company</p>
    </footer>
  );
};

export default Footer;
