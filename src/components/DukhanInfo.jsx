import React from 'react';
import ImageSlider from './ImageSlider';
import { IoArrowBack } from 'react-icons/io5';

const DukhanImages = [
  {
    url: "https://www.qatarenergy.qa/PublishingImages/QP%20History/Rig54.jpg",
    caption: "Rig 54, Dukhan, 1956"
  },
  {
    url: "https://www.qatarenergy.qa/PublishingImages/QP%20History/Rig5.jpg",
    caption: "Rig 5, March 1960"
  },
  {
    url: "https://www.qatarenergy.qa/PublishingImages/QP%20History/photo-exibition%207_NEW.jpg",
    caption: "Well #1 Strikes Oil"
  },
  {
    url: "https://www.qatarenergy.qa/PublishingImages/QP%20History/Station.jpg",
    caption: "Qatar Petrol Station, 1960"
  },
  {
    url: "https://static.wixstatic.com/media/62bf21_0a81813c048f465ea454291f6d72f755~mv2.jpg/v1/fill/w_568,h_652,al_c,lg_1,q_85,enc_auto/62bf21_0a81813c048f465ea454291f6d72f755~mv2.jpg",
    caption: "Dukhan's first well"
  },
  {
    url: "https://saspower.com/wp-content/uploads/2021/09/Qatar-Petroleum-QP-Dukhan.png",
    caption: "Modern Dukhan field"
  }
];

const DukhanInfo = ({ isVisible, onClose }) => {
  return (
    <div className={`location-info ${isVisible ? 'show' : ''}`}>
      <button className="info-close" onClick={onClose}>
        <IoArrowBack />
      </button>
      <div className="location-header">
        <h1>Dukhan Field</h1>
      </div>
      <p>Drilled in 1939, this is where Qatar first struck oil. Development continued after World War II and in 1949, the first crude exports occurred.</p>
      <p>86 years later, the field is still up and running. It now spans 70 kilometres across several oil reserves and outputs approx. 331,000 barrels every day.</p>
      <ImageSlider images={DukhanImages} />
    </div>
  );
};

export default DukhanInfo;
