import React from 'react';
import './styles.css'
const Gallery = () => {
  return (
    <div className="container">
        <h2 className="gallery-header">Our Work</h2>
        <div className="image-gallery">
            <img src="https://charlotte-remodeling-assets.s3.us-east-2.amazonaws.com/assets/image1.jpg" alt="image of remodeled kitchen "/>
            <img src="https://charlotte-remodeling-assets.s3.us-east-2.amazonaws.com/assets/image2.jpg" alt="image of cabinets "/>
            <img src="https://charlotte-remodeling-assets.s3.us-east-2.amazonaws.com/assets/image3.JPG" alt="image of outdoor patio"/>
            <img src="https://charlotte-remodeling-assets.s3.us-east-2.amazonaws.com/assets/image7.jpg" alt="image of home extension"/>
            <img src="https://charlotte-remodeling-assets.s3.us-east-2.amazonaws.com/assets/image5.jpg" alt="image of garage"/>
            <img src="https://charlotte-remodeling-assets.s3.us-east-2.amazonaws.com/assets/image6.jpg" alt="image of bay windows"/>
        </div>
    </div>
  );
};

export default Gallery;
