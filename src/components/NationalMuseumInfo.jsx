import React from 'react';
import ImageSlider from './ImageSlider';
import { IoArrowBack } from 'react-icons/io5';
import NMoQ_Logo from '../assets/NMoQ_logo.png';
import { FaGoogle } from 'react-icons/fa';

const NationalMuseumImages = [
  {
    url: "https://www.timeoutdoha.com/cloud/timeoutdoha/2021/08/17/National-Museum-of-Qatar-2.jpg",
    caption: "National Museum of Qatar - Inspired by the Desert Rose quartz formation."
  },
  {
    url: "https://www.erco.com/images/new-national-museum-of-qatar-7113/eur-erco-new-national-museum-of-qatar-intro-8-20.jpg",
    caption: "Interior of the National Museum"
  },
  {
    url: "https://media.cnn.com/api/v1/images/stellar/prod/190328105124-national-museum-qatar-10.jpg?q=w_2255,h_1501,x_0,y_0,c_fill",
    caption: "Exhibits at the National Museum"
  },
  {
    url: "https://qmwebsiteprodstorage.blob.core.windows.net/media/images/nmoq-gallery-kids-4.2e16d0ba.fill-1200x630.jpg",
    caption: "Interactive screens to captivate visitors and experience history"
  },
  {
    url: "https://newindoha.com/wp-content/uploads/2022/04/20220411_172918-1024x577.jpg",
    caption: "The museum's cafe and terrace view to help visitors digest all of the history the museum has"
  },
];

const NationalMuseumInfo = ({ isVisible, onClose }) => {
  return (
    <div className={`location-info ${isVisible ? 'show' : ''}`}>
      <button className="info-close" onClick={onClose}>
        <IoArrowBack />
      </button>
      <div className="location-header">
        <a href="https://nmoq.org.qa/en/" target="_blank" rel="noopener noreferrer" title="See the official website">
          <img src={NMoQ_Logo} alt="NMoQ Logo" className="location-logo small-logo" />
        </a>
        <h1>National Museum of Qatar</h1>
      </div>
      <p>The National Museum of Qatar showcases the history and culture of Qatar through immersive exhibits and stunning architecture.</p>
      <p>Click on one of the images below to explore the museum.</p>
      <ImageSlider images={NationalMuseumImages} />
      <div className="map-link">
        <a 
          href="https://www.google.com/maps?q=national+museum+of+qatar"
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

export default NationalMuseumInfo;
