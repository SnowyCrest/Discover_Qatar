import React, { useState } from 'react';
import { createPortal } from 'react-dom';

const ImageSlider = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const images = [
    {
      src: "https://www.timeoutdoha.com/cloud/timeoutdoha/2021/08/17/7VUA4JvX-Souq-Waqif1-1200x800.jpg",
      caption: "The vibrant main street of Souq Waqif during evening hours"
    },
    {
      src: "https://www.discoverqatar.qa/images/souq-waqif-cafes/dq_hotel_slides/?m=nbf",
      caption: "Traditional cafes and restaurants line the streets"
    },
    {
      src: "https://visitqatar.com/adobe/dynamicmedia/deliver/dm-aid--c6847ddd-6766-4c54-b5aa-973d49d66935/07-pearls-or-pearl-shops.jpg",
      caption: "Pearl shops displaying Qatar's rich trading history"
    },
    {
      src: "https://d12eu00glpdtk2.cloudfront.net/public/images/souq-waqif-souvenirs.jpg",
      caption: "Colorful displays of traditional souvenirs and crafts"
    },
    {
      src: "https://www.researchgate.net/publication/341869103/figure/fig42/AS:981943084654623@1611124883644/Aerial-historical-photographs-of-left-Old-Doha-showing-the-Souq-Waqif-and-Msheireb.ppm",
      caption: "Historical aerial view of Souq Waqif"
    },
    {
      src: "https://maraya-tours.com/wp-content/uploads/2023/01/souqwaqifshopping.webp",
      caption: "Traditional shopping experience in the heart of Doha"
    },
    {
        src: "https://www.timeoutdoha.com/cloud/timeoutdoha/2021/08/17/7VUA4JvX-Souq-Waqif1-1200x800.jpg",
        caption: "The vibrant main street of Souq Waqif during evening hours"
      },
  ];

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedImage(null);
      setIsClosing(false);
    }, 300);
  };

  const Modal = ({ image, onClose }) => {
    return createPortal(
      <div className={`modal-overlay ${isClosing ? 'closing' : ''}`} onClick={handleClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <button className="modal-close" onClick={handleClose}>×</button>
          <img src={image.src} alt={image.caption} />
          <p className="modal-caption">{image.caption}</p>
        </div>
      </div>,
      document.body
    );
  };

  return (
    <>
      <div className="slider-container">
        <div className="slider">
          {images.map((image, index) => (
            <img 
              key={index}
              src={`${image.src}?w=400&q=80`}
              alt={image.caption}
              className="slider-image"
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      </div>

      {selectedImage && <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />}
    </>
  );
};

export default ImageSlider;
