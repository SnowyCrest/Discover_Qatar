import React from 'react';
import ImageSlider from './ImageSlider';
import { IoArrowBack } from 'react-icons/io5';
import QNLLogo from '../assets/QNLLogo.png';
import { FaGoogle } from 'react-icons/fa';

const QNLImages = [
  {
    url: "https://www.espai-visual.com/wp-content/uploads/2017/12/permanent-exhibition-qatar-national-library.jpg",
    caption: "Qatar National Library's exterior view. It resembles two pieces of paper that are pulled apart and folded diagonally at the corners to create a shell-like structure."
  },
  {
    url: "https://static01.nyt.com/images/2024/09/26/multimedia/26sp-museums-qatar-inyt-02-pzcm/26sp-museums-qatar-inyt-02-pzcm-videoSixteenByNine3000.jpg",
    caption: "The interior of Qatar National Library. It consists of several study rooms and carells, a restaurant and cafe, a computer lab, a 120-seat auditorium, and much more."
  },
  {
    url: "https://www.metalocus.es/sites/default/files/styles/mopis_news_carousel_item_desktop/public/metalocus_qatar-national-library_photo-hans-werlemann_02.jpg?itok=5fweWiD4",
    caption: "Qatar National Library's -clearly very comfortable- reading areas"
  },
  {
    url: "https://marhaba.qa/wp-content/uploads/2018/07/QNl-Childrens-Library.jpg",
    caption: "The Library's 686-square-meter Children's library"
  }
];

const QNLInfo = ({ isVisible, onClose }) => {
  return (
    <div className={`location-info ${isVisible ? 'show' : ''}`}>
      <button className="info-close" onClick={onClose}>
        <IoArrowBack />
      </button>
      <div className="location-header">
        <a href="https://www.qnl.qa/en" target="_blank" rel="noopener noreferrer" title="See the official website">
          <img src={QNLLogo} alt="QNL Logo" className="location-logo small-logo" />
        </a>
        <h1>Qatar National Library</h1>
      </div>
      <p>Qatar National Library (QNL) is a state-of-the-art facility that serves as a center for learning, research, and culture. The library offers a vast collection of books, digital resources, and special collections, making it a hub for knowledge and innovation in Qatar.</p>
      <ImageSlider images={QNLImages} />
      <div className="map-link">
        <a 
          href="https://www.google.com/maps?q=qatar+national+library"
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

export default QNLInfo;
