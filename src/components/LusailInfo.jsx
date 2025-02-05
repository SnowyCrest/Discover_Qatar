import React from 'react';
import ImageSlider from './ImageSlider';
import { IoArrowBack } from 'react-icons/io5';
import { FaGoogle } from 'react-icons/fa';

const LusailImages = [
  {
    url: "https://live.staticflickr.com/5665/21730904323_aef9837153_b.jpg",
    caption: "Luxury yachts docked at Lusail Marina"
  },
  {
    url: "https://www.qataridiar.com/sites/default/files/styles/wide/public/2022-04/Lusail_0.jpg.webp?itok=8b_YGemO",
    caption: "Stunning views of the Arabian Gulf and Doha's city skyline from Lusail Marina"
  },
  {
    url: "https://dohawestbay.intercontinental.com/_novaimg/4547910-1529631_0_693_1920_1282_1200_800.jpg",
    caption: "Modern facilities and dining options at Lusail Marina's The Square"
  },
  {
    url: "https://d12eu00glpdtk2.cloudfront.net/public/images/local/katara-towers-katara-hospitality-IG.jpg",
    caption: "Lusail's Katara Tower, inspired by Qatar's crossed swords emblem as a tribute to Qatar's heritage. It is the first six-star hotel in Qatar, with recreational, dining and entertainment facilities."
  }
];

const LusailInfo = ({ isVisible, onClose }) => {
  return (
    <div className={`location-info ${isVisible ? 'show' : ''}`}>
      <button className="info-close" onClick={onClose}>
        <IoArrowBack />
      </button>
      <div className="location-header">
        <h1>Lusail Marina</h1>
      </div>
      <p>
        Lusail Marina is a vibrant waterfront destination in Lusail City, Qatar's newest and most ambitious urban development project. The marina offers a blend of luxury and leisure, featuring state-of-the-art facilities for yachts, a variety of dining options, and stunning views of the Arabian Gulf.
      </p>
      <p>
        Lusail City itself is designed to be a smart and sustainable city, incorporating advanced technology and green spaces to create a high-quality living environment. Visitors can enjoy a range of activities, from water sports and boat tours to shopping and entertainment at nearby attractions like the Lusail Iconic Stadium and the Place Vendôme Mall.
      </p>
      <ImageSlider images={LusailImages} />
      <div className="map-link">
        <a 
          href="https://www.google.com/maps?q=lusail+marina+qatar"
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

export default LusailInfo;
