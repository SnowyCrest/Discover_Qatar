import React from 'react';
import ImageSlider from './ImageSlider';
import { IoArrowBack } from 'react-icons/io5';
import { FaGoogle } from 'react-icons/fa';

const PearlImages = [
  {
    url: "https://www.thepearlqatar.com/-/media/project/tpq/tpqwebsite/main-menu-img.jpg?cx=0.5&amp;cy=0.5&amp;cw=0&amp;ch=0&amp;hash=8A2BB6F1FFA24F02296317D08779277E",
    caption: "Aerial view of The Pearl"
  },
  {
    url: "https://m.media-amazon.com/images/M/MV5BMzNmODdhZWUtZTU1MS00ZDE0LTliMzUtZTY1Mjg0MDM5ZThiXkEyXkFqcGc@._V1_.jpg",
    caption: "Marina at The Pearl-Qatar"
  },
  {
    url: "https://steps.com.qa/storage/project-page-design-2-3.png",
    caption: "Residences at The Pearl-Qatar"
  },
  {
    url: "https://cdn.getyourguide.com/img/tour/5df01342b2c4d.jpeg/148.jpg",
    caption: "The Pearl's shopping district inspired by Italian architecture"
  },
  {
    url: "https://gloobles.com/storage/13400/conversions/01HJP076Y0X616CR7PW9Q2F0QA-large.webp",
    caption: "Place vendome - the recently-opened luxury shopping mall with an in-built hotel, dancing fountain events, and much more"
  },
];

const PearlInfo = ({ isVisible, onClose }) => {
  return (
    <div className={`location-info ${isVisible ? 'show' : ''}`}>
      <button className="info-close" onClick={onClose}>
        <IoArrowBack />
      </button>
      <div className="location-header">
        <h1>The Pearl-Qatar</h1>
      </div>
      <p>The Pearl-Qatar is a man-made island featuring luxury residences, shopping, dining, and entertainment options. This upscale development is known for its stunning architecture, beautiful marinas, and vibrant community. Whether you're looking to shop at high-end boutiques, dine at gourmet restaurants, or simply enjoy a leisurely stroll along the waterfront, The Pearl-Qatar has it all.</p>
      <ImageSlider images={PearlImages} />
      <div className="map-link">
        <a 
          href="https://www.google.com/maps?q=the+pearl+qatar"
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

export default PearlInfo;
