import './event.css'
import React, { useState, useEffect } from 'react';

const Event = ({ images, interval = 500 }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, interval);
      return () => {
        clearInterval(intervalId);
      };
    }, [images.length, interval]);
  



  return (
    <>
    
    <div className="slider-container">
     
      <div className="image-wrapper">
        <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
      </div>
    
    </div>
    
    </>
  )
}

export default Event
