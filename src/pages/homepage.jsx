import React, { useEffect, useCallback, useState } from 'react';
import { WiDaySunny, WiNightClear } from 'react-icons/wi';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import '../../src/index.css';
import CubeSlider from '../components/CubeSlider';
import Newsfeed from '../components/Newsfeed';
import Card from "../components/card-hover-effect";
import AbstractVectors from '../components/AbstractVectors';
import Footer from '../components/Footer';

const FadeInWhenVisible = ({ children }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const Homepage = ({ onMapClick, onQuizClick, onFeedbackClick }) => {
  const images = [
    "https://m.thepeninsulaqatar.com/get/maximage/20240401_1711968532-48.jpg?1711968532",
    "https://visitqatar.com/adobe/dynamicmedia/deliver/dm-aid--9011dc3d-1cfa-4e75-b71d-5179b76430a5/katara-cultural-village-140.jpg?quality=75&preferwebp=true",
    "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/555000/555257-qatar.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/7/79/Zubara_Fort.jpg",
    "https://www.msheireb.com/wp-content/uploads/2023/07/Sustainabiliy-scaled.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/Fisherman_on_the_Doha_Corniche_next_to_the_Islamic_Museum.jpg"
  ];

  const [temperature, setTemperature] = useState(null);
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const heroSection = document.querySelector(".hero");

    const layers = [];
    for (let i = 0; i < 2; i++) {
      const layer = document.createElement("div");
      layer.className = "background-layer";
      heroSection.appendChild(layer);
      layers.push(layer);
    }

    layers[0].style.backgroundImage = `url(${images[currentIndex]})`;
    layers[0].classList.add("active");

    function changeBackgroundImage() {
      const nextIndex = (currentIndex + 1) % images.length;
      const currentLayer = layers[currentIndex % 2];
      const nextLayer = layers[nextIndex % 2];

      nextLayer.style.backgroundImage = `url(${images[nextIndex]})`;
      nextLayer.classList.add("active");
      currentLayer.classList.remove("active");
      
      currentIndex = nextIndex;
    }

    const intervalId = setInterval(changeBackgroundImage, 5000);
    return () => {
      clearInterval(intervalId);
      layers.forEach(layer => layer.remove());
    };
  }, []);

  useEffect(() => {
    const dynamicText = document.querySelector("h1 span");
    const words = ["architecture", "heritage", "culture", "innovation", "traditions"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeEffect = () => {
      const currentWord = words[wordIndex];
      const currentChar = currentWord.substring(0, charIndex);
      if (dynamicText) {
        dynamicText.textContent = currentChar;
        dynamicText.classList.toggle("stop-blinking", currentChar.length > 0);
      }

      if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 125);
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 125);
      } else {
        isDeleting = !isDeleting;
        if (dynamicText) {
          dynamicText.classList.remove("stop-blinking");
        }
        if (!isDeleting) {
          wordIndex = (wordIndex + 1) % words.length;
        }
        setTimeout(typeEffect, 1200);
      }
    };

    typeEffect();
  }, []);

  useEffect(() => {
    const fetchTemperature = async () => {
      try {
        const API_KEY = '1f9a7b21e995b32405047b0b62afb676';
        const QATAR_LAT = 25.2854;
        const QATAR_LON = 51.5310;
        
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${QATAR_LAT}&lon=${QATAR_LON}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
        setTemperature(Math.round(data.main.temp));

        // Check if it's night time
        const hour = new Date().getHours();
        setIsNight(hour < 6 || hour >= 18);
      } catch (error) {
        console.error('Error fetching temperature:', error);
      }
    };

    fetchTemperature();
    const interval = setInterval(fetchTemperature, 600000); // Update every 10 minutes

    return () => clearInterval(interval);
  }, []);

  const handleMapClick = (e) => {
    e.preventDefault();
    onMapClick();
  };

  return (
    <div className="page-container">
      <AbstractVectors />
      <section className="hero">
        <header id="header">
          <a id="logo" href="#">An&Aa</a>
          <div className="header-buttons">
            <a className="button" href="#" onClick={e => {
              e.preventDefault();
              onFeedbackClick();
            }}>Reviews</a>
          </div>
        </header>
        <header className="hero-header">
          <h1 className="hero-title"> Discover 
            Qatar's&nbsp;<span className="typewriter"></span>
          </h1>
        </header>
        
        {temperature !== null && (
          <div className="hero-temperature">
            <span className="weather-label">Current weather in Qatar</span>
            <div className="weather-display">
              {isNight ? <WiNightClear /> : <WiDaySunny />}
              {temperature}°C
            </div>
          </div>
        )}
        
        <footer className="hero-footer">
          <a className="button button-primary" onClick={e => {
            e.preventDefault();
            onMapClick();
          }} href="#">
            Explore the map
          </a>
          <a className="button" onClick={e => {
            e.preventDefault();
            onQuizClick();
          }} href="#">Take the quiz</a>
        </footer>
      </section>
      <article>
        <FadeInWhenVisible>
          <h1 style={{ 
            color: '#000000', 
            fontSize: '4rem',
            textAlign: 'center', 
            margin: '0rem 0 5rem 0' 
          }}>About Qatar</h1>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
            gap: '2rem',
            padding: '2rem',
            maxWidth: '1400px',
            margin: '0 auto',
            alignItems: 'stretch'
          }}>
            <div style={{ 
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '1rem'
            }}>
              <p style={{ 
                color: '#575654',
                fontSize: 'clamp(1rem, 2vw, 1.5rem)', 
                fontWeight: 'normal',
                lineHeight: '1.5',
              }}>
                Qatar is a young destination with a rich heritage, that will leave you wanting more. It's where the desert sands meet the ocean and where ancient traditions, and modern wonders live side by side.
              </p>
            </div>

            <div style={{ 
              aspectRatio: '4/3',
              minHeight: '300px',
            }}>
              <Card imageUrl="https://visitqatar.com/adobe/dynamicmedia/deliver/dm-aid--7744fe20-d8e3-4a80-9747-94f114a98834/pearl-min-1.jpg?width=1920&preferwebp=true" />
            </div>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
            gap: '2rem',
            padding: '2rem',
            maxWidth: '1400px',
            margin: '0 auto',
            alignItems: 'stretch'
          }}>
            <div style={{ 
              aspectRatio: '4/3',
              minHeight: '300px',
            }}>
              <Card imageUrl="https://visitqatar.com/adobe/dynamicmedia/deliver/dm-aid--edf9012a-8ec5-48ed-b5de-b0f754d1fd90/souq-waqif-al-wakrah-13.jpg?preferwebp=true&quality=75" />
            </div>
            
            <div style={{ 
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '1rem'
            }}>
              <p style={{ 
                color: '#575654',
                fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                fontWeight: 'normal',
                lineHeight: '1.5',
              }}>
                Qatar – pronounced 'kuh-TAR' – is located on the Arabian Peninsula, jutting into the Arabian Gulf. The first evidence of human settlement dates to the 6th millennium BCE. For centuries, Qatar was largely populated by Bedouin tribes and a few fishing villages, shaped by the rule of Arab tribes, Portuguese explorers, Ottoman leaders and the esteemed al-Thani family, whose leadership has significantly influenced the nation's heritage. Qatar's destiny changed when oil was first discovered in the Dukhan Field in 1940, transforming its economy from pearling, fishing and trade to one of the wealthiest nations in the world.
              </p>
            </div>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <h2 style={{ 
            color: '#000000', 
            textAlign: 'center', 
            margin: '6rem 0 0.5rem 0' 
          }}> 
            What's happening in Qatar 
          </h2>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            margin: '2rem 0' 
          }}>
            <p style={{ 
              color: '#000000',
              textAlign: 'center', 
              margin: '0 20px' 
            }}>
              Stay updated with the latest events and news of Qatar.
            </p>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <Newsfeed />
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <CubeSlider />
        </FadeInWhenVisible>
      </article>
      <Footer />
    </div>
  );
};

export default Homepage;