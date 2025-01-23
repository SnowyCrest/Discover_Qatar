import React, { useState } from 'react';
import './Newsfeed.css';

const newsData = [
  {
    title: "Sealine Season 2024",
    image: "https://visitqatar.com/adobe/dynamicmedia/deliver/dm-aid--d98505af-ea7c-4d0e-970f-a0cd401e9b62/sealine-2.jpg?quality=75&width=1280&preferwebp=true",
    description: "Embark on an unforgettable desert experience at the Sealine Season this January.",
    link: "https://www.qatar2024.qa/en"
  },
  {
    title: "Shop Qatar 2024",
    image: "https://visitqatar.com/adobe/dynamicmedia/deliver/dm-aid--e8a4fcfe-f55b-4af2-85f2-dbffd6650edd/shop-qatar-2024-1st-raffle-draw.jpg?quality=75&preferwebp=true&width=1280",
    description: "Discover amazing deals and prizes at Shop Qatar 2024",
    link: "https://www.qatarenergy.qa"
  },
  {
    title: "Ras Abrouq events ",
    image: "https://visitqatar.com/adobe/dynamicmedia/deliver/dm-aid--8f5f10e3-b8fa-4f9b-8d48-a4e06658da17/film-city.jpg?width=1280&quality=75&preferwebp=true",
    description: "Discover the captivating area of Ras Abrouq, a destination offering an exclusive desert experience. Explore the Film City and Desert Escape near Our Habitas Ras Abrouq Resort where you can enjoy wellness activities, dining, music and cultural activities with your loved ones.",
    link: "https://visitqatar.com/intl-en/events-calendar/ras-abrouq"
  },
  {
    title: "ONE 171: Qatar ",
    image: "https://visitqatar.com/adobe/dynamicmedia/deliver/dm-aid--855c0005-3b39-4774-a8db-cbd36bb67b7a/one-116-banner-4.jpg?width=1200&quality=75&preferwebp=true",
    description: "Get ready for an evening of world-class martial arts as ONE Championship returns to Qatar. Nearly a year after its spectacular debut, this highly anticipated event sets the stage for global superstars and regional talents in MMA, Muay Thai, kickboxing, and submission grappling.",
    link: "https://www.qifp.qa"
  },
  {
    title: "2025 MotoGP™ Qatar Airways Grand Prix of Qatar",
    image: "https://marhaba.qa/wp-content/uploads/2024/10/2025-MOTOGP.jpg",
    description: "Now positioned as the fourth race of the season, this event stands out as the only one on the MotoGP™ calendar held under floodlights, offering fans a unique night racing experience.",
    link: "https://events.q-tickets.com/qatar/eventdetails/6088788348/2025-motogp-qatar-airways-grand-prix-of-qatar"
  },
  {
    title: "Web Summit Qatar 2025 ",
    image: "https://visitqatar.com/adobe/dynamicmedia/deliver/dm-aid--f8f43948-078d-43f6-84a3-91fe7e338c82/web-summit-2023-111.jpg?quality=75&width=1900&preferwebp=true",
    description: "Qatar is all set to host the Middle Eastern edition of the world's largest technology conference. Web Summit Qatar returns to Doha with thousands of the brightest ideas from entrepreneurs, investors and innovators from across the globe. Get ready to connect, collaborate and create the next big thing in Qatar. ",
    link: "https://visitqatar.com/intl-en/events-calendar/web-summit"
  },
  {
    title: "Qatar International Food Festival ",
    image: "https://visitqatar.com/adobe/dynamicmedia/deliver/dm-aid--f7787c29-8452-45e1-87af-0940d18cb8a0/qiff-2023-7.jpg?preferwebp=true&quality=75&width=1280",
    description: "Experience winter magic in the heart of Qatar",
    link: "https://visitqatar.com/intl-en/events-calendar/qatar-international-food-festival"
  },
  {
    title: "Doha International Book Fair 2025 ",
    image: "https://www.dohabookfair.qa/wp-content/uploads/2021/08/20201009_1602265417-925.jpeg",
    description: "Join us at the 34th edition of the Doha International Book Fair, where literature, culture, and knowledge come together in an inspiring celebration of creativity and ideas!",
    link: "https://www.dohabookfair.qa/en/"
  }
];

const Newsfeed = () => {
  return (
    <div className="newsfeed-container">
      <div className="news-track">
        <div className="news-scroll">
          {/* Duplicate the newsData array to create seamless scrolling */}
          {[...newsData, ...newsData].map((news, index) => (
            <div key={index} className="news-card">
              <img src={news.image} alt={news.title} className="news-image" />
              <div className="news-content">
                <h2>{news.title}</h2>
                <p>{news.description}</p>
                <a href={news.link} target="_blank" rel="noopener noreferrer" className="read-more-btn">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newsfeed;
