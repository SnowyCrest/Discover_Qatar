import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { IoClose } from 'react-icons/io5'; // Import the close icon

const ImageModal = ({ image, onClose, isClosing }) => {
  const handleModalClick = (e) => {
    e.stopPropagation(); // Prevent clicks from propagating to map
  };

  return ReactDOM.createPortal(
    <div className={`modal-overlay ${isClosing ? 'closing' : ''}`} onClick={handleModalClick}>
      <div className={`modal-content ${isClosing ? 'closing' : ''}`} onClick={e => e.stopPropagation()}>
        <div className="modal-image-container">
          <img 
            src={image.url} 
            alt={image.caption} 
            className="modal-image"
          />
          <div className={`modal-caption ${isClosing ? 'closing' : ''}`}>
            {image.caption}
          </div>
          <button className={`modal-close ${isClosing ? 'closing' : ''}`} onClick={onClose}>
            <IoClose /> {/* Use the imported close icon */}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

const ImageSection = ({ images, speed, onImageClick, isPaused }) => {
  return (
    <div 
      className="images-track"
      style={{ 
        animation: `swipe ${speed}ms linear infinite`,
        animationPlayState: isPaused ? 'paused' : 'running'
      }}
    >
      {images.map((image, index) => (
        <div 
          className="slider-item" 
          key={`${index}-${image.url}`}
          onClick={() => onImageClick(image)}
        >
          <img
            src={image.url}
            alt={image.caption}
            className="slider-image"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

const ImageSlider = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const speed = 30000; // 30 seconds for one complete scroll

  const handleImageClick = (image) => {
    setIsClosing(false);
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedImage(null);
      setIsClosing(false);
      document.body.style.overflow = 'auto';
    }, 300); // Match this with CSS animation duration
  };

  return (
    <>
      <div className="slider-container">
        <div 
          className="banner-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="wrapper">
            <ImageSection 
              images={images} 
              speed={speed} 
              onImageClick={handleImageClick} 
              isPaused={isPaused}
            />
            <ImageSection 
              images={images} 
              speed={speed} 
              onImageClick={handleImageClick} 
              isPaused={isPaused}
            />
          </div>
        </div>
      </div>

      {selectedImage && (
        <ImageModal 
          image={selectedImage} 
          onClose={handleClose}
          isClosing={isClosing}
        />
      )}
    </>
  );
};

export default ImageSlider;
