import React from 'react';
import ImageSlider from './ImageSlider';
import { IoArrowBack } from 'react-icons/io5';
import { FaGoogle } from 'react-icons/fa';
import HIALogo from '../assets/HIALogo.png';

const HIAImages = [
  {
    url: "https://www.hok.com/wp-content/uploads/2019/04/Hamad-Exterior-01-1900-1600x1069.jpg",
    caption: "Hamad International Airport exterior view"
  },
  {
    url: "https://www.hok.com/wp-content/uploads/2019/04/Hamad-Interior-01-1900-1600x1069.jpg",
    caption: "Inside the airport terminal"
  },
  {
    url: "https://worldtraveller73.files.wordpress.com/2021/07/30113612091_b08ffb4b6c_o.jpg?w=1280&h=848&crop=1",
    caption: "Luxury lounges at HIA"
  },
  {
    url: "https://d12eu00glpdtk2.cloudfront.net/public/images/guide/A-Message-Peace-World-Ahmed-Al-Bahrani-shutterstock_1360869131.jpg",
    caption: "Art installations at HIA"
  },
  {
    url: "https://moodiedavittreport.com/wp-content/uploads/2023/07/HIA-27.jpg",
    caption: "The Orchard - HIA's interior park"
  },
];

const HIAInfo = ({ isVisible, onClose }) => {
  return (
    <div className={`location-info ${isVisible ? 'show' : ''}`}>
      <button className="info-close" onClick={onClose}>
        <IoArrowBack />
      </button>
      <div className="location-header">
        <a href="https://dohahamadairport.com" target="_blank" rel="noopener noreferrer" title="See the official website">
          <img src={HIALogo} alt="HIA Logo" className="location-logo small-logo" />
        </a>
        <h1>Hamad International Airport</h1>
      </div>
      <p>Hamad International Airport is the primary international airport in Qatar, known for its luxurious amenities and world-class facilities. From its state-of-the-art terminal to its exquisite lounges, HIA offers a travel experience like no other. The airport is also home to a variety of art installations and an indoor park, making it a destination in its own right.</p>
      <ImageSlider images={HIAImages} />
      <div className="map-link">
        <a 
          href="https://www.google.com/maps?q=hamad+international+airport"
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

export default HIAInfo;
