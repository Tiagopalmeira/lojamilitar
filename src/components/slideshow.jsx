import React, { useState } from 'react';
import '../css/produto.css'
// Lista de imagens para o slideshow
const PhotoSlideshow = ({ photos = [] }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  if (photos.length === 0) {
    return <p>No photos available</p>;
  }

  const nextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow">
      <img src={photos[currentPhotoIndex]} alt="Slideshow" />
      <div className="slideshow-controls">
        <button onClick={prevPhoto}>-</button>
        <button onClick={nextPhoto}>+</button>
      </div>
    </div>
  );
};

export default PhotoSlideshow;
