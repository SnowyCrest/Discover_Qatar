import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { IoClose, IoArrowBack, IoArrowForward } from 'react-icons/io5'; // Import the close and navigation icons

const ImageModal = ({ image, onClose, onPrev, onNext, isClosing, slideDirection }) => {
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
            className={`modal-image ${slideDirection}`}
          />
          <div className={`modal-caption ${isClosing ? 'closing' : ''}`}>
            {image.caption}
          </div>
          <button className={`modal-close ${isClosing ? 'closing' : ''}`} onClick={onClose}>
            <IoClose /> {/* Use the imported close icon */}
          </button>
          <button className="modal-prev" onClick={onPrev}>
            <IoArrowBack /> {/* Use the imported back icon */}
          </button>
          <button className="modal-next" onClick={onNext}>
            <IoArrowForward /> {/* Use the imported forward icon */}
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
  const [slideDirection, setSlideDirection] = useState('');
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

  const handlePrev = () => {
    setSlideDirection('slide-right');
    const currentIndex = images.findIndex(img => img.url === selectedImage.url);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  const handleNext = () => {
    setSlideDirection('slide-left');
    const currentIndex = images.findIndex(img => img.url === selectedImage.url);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
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
          onPrev={handlePrev}
          onNext={handleNext}
          isClosing={isClosing}
          slideDirection={slideDirection}
        />
      )}
    </>
  );
};

export default ImageSlider;
