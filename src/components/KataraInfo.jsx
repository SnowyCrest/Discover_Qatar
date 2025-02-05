import React from 'react';
import ImageSlider from './ImageSlider';
import { IoArrowBack } from 'react-icons/io5';
import { FaGoogle } from 'react-icons/fa';

const KataraImages = [
  {
    url: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/554000/554937-doha-and-vicinity.jpg",
    caption: "Katara's Pigeon towers, home to up to 14,000 pigeons."
  },
  {
    url: "https://rozetta-webxr-commerce-image-prod.s3.ap-northeast-1.amazonaws.com/78182ccb637157e7bae88182f733f6a0",
    caption: "Amphitheater at Katara"
  },
  {
    url: "https://artlineqatar.com/images/Katara-2.jpg",
    caption: "Katara's blue mosque"
  },
  {
    url: "https://pbs.twimg.com/media/EMnC7FdXsAACKnj.jpg",
    caption: "Al Thuraya planetarium"
  },
  {
    url: "https://c.myholidays.com/blog/2024/6/191030_WhatisOliOliChildrensMuseumQatar-ezgif.com-jpg-to-webp-converter.webp",
    caption: "The OliOli Children's museum"
  },
  {
    url: "https://www.21highst.net/wp-content/uploads/2019/11/IMGL4385-1200x800.jpg",
    caption: "The Gallerie Lafayette - The ultimate luxury fashion outdoor shopping destination in Qatar, with outdoor air conditioning and succulent gourmet foods"
  },
];

const KataraInfo = ({ isVisible, onClose }) => {
  return (
    <div className={`location-info ${isVisible ? 'show' : ''}`}>
      <button className="info-close" onClick={onClose}>
        <IoArrowBack />
      </button>
      <div className="location-header">
        <h1>Katara Cultural Village</h1>
      </div>
      <p>Katara Cultural Village is a hub for cultural and artistic activities in Qatar, featuring theaters, galleries, and performance venues. This vibrant cultural destination is designed to celebrate the heritage and traditions of Qatar while fostering a spirit of creativity and innovation. From the stunning amphitheater to the beautiful blue mosque, Katara offers a diverse range of attractions and experiences for visitors of all ages.</p>
      <ImageSlider images={KataraImages} />
      <div className="map-link">
        <a 
          href="https://www.google.com/maps?q=katara+cultural+village"
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

export default KataraInfo;
