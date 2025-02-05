import React from 'react';
import ImageSlider from './ImageSlider';
import { IoArrowBack } from 'react-icons/io5';
import { FaGoogle } from 'react-icons/fa';

const KharsaahImages = [
  {
    url: "https://www.power-technology.com/wp-content/uploads/sites/21/2020/01/Featured-Image-Al-Kharsaah-Solar-Power-Project-Qatar.jpg",
    caption: "Kharsaah Solar Power Plant"
  },
  {
    url: "https://www.al-monitor.com/sites/default/files/styles/article_hero_medium/public/2022-10/GettyImages-1244052717.jpg?h=1d34674f&itok=nroKPd52",
    caption: "Solar panels at Kharsaah"
  },
  {
    url: "https://m.thepeninsulaqatar.com/get/maximage/20221018_1666085630-405.jpg?1666085630",
    caption: "Aerial view of Kharsaah Solar Power Plant. The massive solar farm spanning 10km² can be seen from outer space."
  }
];

const KharsaahInfo = ({ isVisible, onClose }) => {
  return (
    <div className={`location-info ${isVisible ? 'show' : ''}`}>
      <button className="info-close" onClick={onClose}>
        <IoArrowBack />
      </button>
      <div className="location-header">
        <h1>Al Kharsaah Solar Power Plant</h1>
      </div>
      <p>Al Kharsaah Solar Power Plant is Qatar's first large-scale solar power plant, contributing to the country's renewable energy goals. It now supplies 10% of Qatar's power grid.</p>
      
      <ImageSlider images={KharsaahImages} />
      <div className="map-link">
        <a 
          href="https://www.google.com/maps?q=al+kharsaah+solar+power+plant+qatar"
          target="_blank"
          rel="noopener noreferrer"
          className="google-maps-link"
        >
          <FaGoogle /> View on Google Maps
        </a>
      </div>
    </div>
  );
};

export default KharsaahInfo;
