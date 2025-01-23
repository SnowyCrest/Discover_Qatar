import React from 'react';
import ImageSlider from './ImageSlider';
import { IoArrowBack } from 'react-icons/io5';

const MsheirebImages = [
  {
    url: "https://www.nedapidentification.com/wp-content/uploads/2023/01/Msheireb-Downtown-Doha-scaled-1.jpg",
    caption: "Msheireb Downtown Doha overview"
  },
  {
    url: "https://m.thepeninsulaqatar.com/get/maximage/20221221_1671599181-784.jpg?1671599182",
    caption: "Cultural district"
  },
  {
    url: "https://www.msheireb.com/wp-content/uploads/2024/02/about-img-1.png",
    caption: "Sikkat Al Wadi street view"
  },
  {
    url: "https://www.burohappold.com/wp-content/uploads/2016/04/Msheireb-DD_01_Gensler-and-BuroHappold-Engineering.jpg",
    caption: "Modern architecture and traditional design"
  }
];

const MsheirebInfo = ({ isVisible, onClose }) => {
  return (
    <div className={`location-info ${isVisible ? 'show' : ''}`}>
      <button className="info-close" onClick={onClose}>
        <IoArrowBack />
      </button>
      <div className="location-header">
        <h1>Msheireb Downtown</h1>
      </div>
      <p>Msheireb Downtown Doha is the world's first sustainable downtown regeneration project, reviving the old commercial district with a new architectural language that is modern, yet inspired by traditional Qatari heritage. This innovative project blends the past and the future, creating a vibrant urban space that is both environmentally friendly and culturally significant.</p>
      <ImageSlider images={MsheirebImages} />
    </div>
  );
};

export default MsheirebInfo;
