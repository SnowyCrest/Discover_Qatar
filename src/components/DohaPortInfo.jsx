import React from 'react';
import ImageSlider from './ImageSlider';
import { IoArrowBack } from 'react-icons/io5';
import { FaGoogle } from 'react-icons/fa';

const DohaPortImages = [
  {
    url: "https://i0.wp.com/974qa.net/wp-content/uploads/2024/08/minda-district-qatar-old-doha-port-doha.jpg?resize=1024%2C512",
    caption: "Doha Port"
  },
  {
    url: "https://m.thepeninsulaqatar.com/get/maximage/20231026_1698305070-551.jpg?1698305070",
    caption: "Cruise ships at Doha Port"
  },
  {
    url: "https://pbs.twimg.com/media/EwBhRb8WgAITiOO.jpg",
    caption: "The box park - made purely from shipping containers; a creative way to accomodate cafes and shops while minimizing wastage"
  },
  {
    url: "https://newindoha.com/wp-content/uploads/2024/02/20231218_144355-1024x577.jpg",
    caption: "The port's awe-inspiring fish market"
  },
  {
    url: "https://qdnewssl-5762.kxcdn.com/images/dev/qatar%20news/large/Amerigo%20Vespucci_17-52-2024_08-52_ccx20847.jpg",
    caption: "The historic Italian ship Armeggio Vespucci paying the port a visit; A tribute to Qatar's friendship with Italy"
  }
];

const DohaPortInfo = ({ isVisible, onClose }) => {
  return (
    <div className={`location-info ${isVisible ? 'show' : ''}`}>
      <button className="info-close" onClick={onClose}>
        <IoArrowBack />
      </button>
      <div className="location-header">
        <h1>Port of Doha</h1>
      </div>
      <p>The Port of Doha is a major seaport in Qatar, serving as a key hub for maritime trade and cruise tourism. This bustling port is not only a gateway for goods and passengers but also a vibrant area with cafes, shops, and a fish market. The port's unique blend of modern facilities and traditional charm makes it a fascinating place to visit.</p>
      <ImageSlider images={DohaPortImages} />
      <div className="map-link">
        <a 
          href="https://www.google.com/maps?q=doha+port+qatar"
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

export default DohaPortInfo;
