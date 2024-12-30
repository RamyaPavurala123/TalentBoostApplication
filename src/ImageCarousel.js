// src/ImageCarousel.js
import React, { useState } from 'react';
import './ImageCarousel.css'; // Add your CSS for styling

const ImageCarousel = () => {
  // Define your images array inside the component
  const images = [
    '/laptop.jpg', // Add URLs to your images
    '/mobiles.png',
    '/laptop.jpg',
    // Add more images as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      <img src={images[currentIndex]} alt="Carousel Slide" className="carousel-image" />
      <button className="carousel-button next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageCarousel;
