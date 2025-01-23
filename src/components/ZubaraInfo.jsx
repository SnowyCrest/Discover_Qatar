import React from 'react';
import ImageSlider from './ImageSlider';
import { IoArrowBack } from 'react-icons/io5';

const ZubaraImages = [
  {
    url: "https://365adventures.me/wp-content/uploads/2017/08/Zubara-Fort-Visit-gallery-image-8.jpg",
    caption: "Al Zubara Fort"
  },
  {
    url: "https://assets.isu.pub/document-structure/221229172007-7e005e77eb95a0edeba35203b44de022/v1/7efc1b5474bc7aa66765fb3c15f94aa6.jpeg",
    caption: "Historical site of Al Zubara"
  },
  {
    url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMaZxf1G-QG3UcFa-ynBhByW4jGl9GVMbWIyVlVpQtVCA0CBucCZVLW9k4a1AuRznEbiuIvKkU7EVZIVYeG7rHiLc-7kcNQsNg864v1C3AAggkcntR_ZGLSxq2Smh3uZ57cDhHC84b2-Iw/s1600/Zubara+Fort+-+05.01.2019.+%252822%2529.jpeg",
    caption: "Interior of Al Zubara Fort"
  }
];

const ZubaraInfo = ({ isVisible, onClose }) => {
  return (
    <div className={`location-info ${isVisible ? 'show' : ''}`}>
      <button className="info-close" onClick={onClose}>
        <IoArrowBack />
      </button>
      <div className="location-header">
        <h1>Al Zubara Fort</h1>
      </div>
      <p>Al Zubara Fort is a historic Qatari military fortress built in 1938 under the oversight of Sheikh Abdullah bin Jassim Al Thani. It is now a UNESCO World Heritage site.</p>
      <ImageSlider images={ZubaraImages} />
    </div>
  );
};

export default ZubaraInfo;
