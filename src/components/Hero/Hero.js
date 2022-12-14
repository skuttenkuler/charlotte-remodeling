
import React from 'react';
import "./styles.css"
const Hero = () => {
  return (
    <div className="container">
        <h1 className="header">Charlotte Remodeling <br/> Company</h1>
        <div className="hero">
            <img src="https://charlotte-remodeling-assets.s3.us-east-2.amazonaws.com/assets/image4.JPG" alt="image of house and backyard"/>
            <span>
                <h2>Residential home improvement company specializing in additions, kitchen, bathroom, and total home renovations</h2>
            </span>
        </div>
    </div>
  );
};

export default Hero;
