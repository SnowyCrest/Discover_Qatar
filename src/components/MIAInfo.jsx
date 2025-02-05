import React from 'react';
import ImageSlider from './ImageSlider';
import { IoArrowBack } from 'react-icons/io5';
import MiaLogo from '../assets/MIALogo.png'
import { FaGoogle } from 'react-icons/fa';

const MIAImages = [
  {
    url: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/39/a8/9e.jpg",
    caption: "Museum of Islamic Art exterior view"
  },
  {
    url: "https://qatarwanderer.com/wp-content/uploads/2023/06/MIA-cafe-at-the-Museum-of-Islamic-Art.jpg",
    caption: "The museum's cafe"
  },
  {
    url: "https://live.staticflickr.com/7845/46297903545_e271660e3e_b.jpg",
    caption: "Iconic architectural design by I.M. Pei"
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/en/1/14/Doha_skyline_from_the_Museum_of_Islamic_Art%2C_Doha%2C_Qatar.jpg",
    caption: "Museum's stunning view of Doha skyline"
  }
];

const MIAInfo = ({ isVisible, onClose }) => {
  return (
    <div className={`location-info ${isVisible ? 'show' : ''}`}>
      <button className="info-close" onClick={onClose}>
        <IoArrowBack />
      </button>
      <div className="location-header">
        <a href="https://mia.org.qa/en/" target="_blank" rel="noopener noreferrer" title="See the official website">
            <img src={MiaLogo} alt="MIA Logo" className="location-logo small-logo" />
        </a>
        <h1>Museum of Islamic Art</h1>
      </div>
      <p>The Museum of Islamic Art is a cultural icon of Qatar, housing one of the world's most comprehensive collections of Islamic art. Designed by renowned architect I.M. Pei, the building itself is a masterpiece of modern architecture. Inside, you'll find a vast array of artifacts that span centuries and continents, offering a deep dive into the rich history and culture of the Islamic world.</p>

      <ImageSlider images={MIAImages} />
      <div className="map-link">
        <a 
          href="https://www.google.com/maps?q=museum+of+islamic+art+doha"
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

export default MIAInfo;
