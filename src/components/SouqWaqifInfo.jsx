import React from 'react';
import ImageSlider from './ImageSlider';
import { IoArrowBack } from 'react-icons/io5';
import { FaGoogle } from 'react-icons/fa';

const souqWaqifImages = [
  {
    url: "https://visitqatar.com/adobe/dynamicmedia/deliver/dm-aid--c6847ddd-6766-4c54-b5aa-973d49d66935/07-pearls-or-pearl-shops.jpg?preferwebp=true&quality=75&width=480",
    caption: "Merchants hinting back at Qatar's history by selling pearls"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBbRT0smaZL0pfEyu1rRcDlqPA_ttzJWBM9mcCAQ5_VCh6IFytSrehjJhKDY7hyT6Dg9s&usqp=CAU",
    caption: "Evening dinner is a must-have in Souq Waqif"
  },
  {
    url: "https://kuluqatar.com/storage/images/blog/things-to-do-in-souq-waqif.jpg",
    caption: "Traditional architectural elements preserved in Souq Waqif"
  },
  {
    url: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0e/36/66/40.jpg",
    caption: "The main promenade lined with traditional shops and cafes"
  },
  {
    url: "https://www.pelago.com/img/products/QA-Qatar/souq-waqif-walking-tour-3-hours/fcbe121e-7cbd-45ea-8e89-03ca7470dedd_souq-waqif-walking-tour-3-hours.jpg",
    caption: "Evening ambiance with traditional lanterns and decorations"
  }
];

const SouqWaqifInfo = ({ isVisible, onClose }) => {
  return (
    <div className={`location-info ${isVisible ? 'show' : ''}`}>
      <button className="info-close" onClick={onClose}>
        <IoArrowBack />
      </button>
      <div className="location-header">
        <h1>Souq Waqif</h1>
      </div>
      <p>Souq Waqif is a vibrant traditional market that serves as the social heart of Doha. This bustling marketplace offers a glimpse into Qatar's rich cultural heritage through its architecture, crafts, and lively atmosphere. Here, you can find everything from spices and textiles to traditional garments and souvenirs. The souq is also home to numerous cafes and restaurants where you can enjoy delicious local cuisine.</p>
      <ImageSlider images={souqWaqifImages} />
      <div className="map-link">
        <a 
          href="https://www.google.com/maps?q=souq+waqif+doha"
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

export default SouqWaqifInfo;
