import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/controller";
import "swiper/css/autoplay";
import { EffectCube, Controller, Autoplay } from "swiper/modules";

const CubeSlider = () => {
  return (
    <section className="slider-section">
      <div className="content">
        <h1>So much more to explore...</h1>
        <p>
          Despite how young Qatar may be, it's filled to the brim with history and culture. From ancient farmsteads to its connections with ancient Mesopotamia, explore the modern country's rich backstory.
        </p>
      </div>

      <Swiper
        className="swiper"
        effect="cube"
        grabCursor={true}
        loop={true}
        speed={1000}
        cubeEffect={{
          shadow: false,
          slideShadows: true,
          shadowOffset: 10,
          shadowScale: 0.94,
        }}
        autoplay={{
          delay: 2600,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
        }}
        modules={[EffectCube, Controller, Autoplay]}
      >
        <SwiperSlide>
          <img src="https://visitqatar.com/content/dam/visitqatar/about-qatar/history-of-qatar-sheikh-faisal-bin-qassim-al-thani-museum.jpg/_jcr_content/renditions/medium-1280px.jpeg" alt="Qatar's early history" />
          <div className="overlay">
            <h1>Qatar's early history</h1>
            <p>The peninsular state of Qatar is, in some respects, a modern creation. However, the land itself shows evidence of habitation over millennia.</p>
            <p>› by visitqatar.com</p>
            <a href="https://visitqatar.com/intl-en/about-qatar/history" target="_blank" rel="noopener noreferrer">
              <button>Read Article</button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://visitqatar.com/adobe/dynamicmedia/deliver/dm-aid--c68289cb-51b1-4711-81f1-96cb8bcb4772/djt1912.jpg?quality=75&preferwebp=true&width=800" alt="Majlis and other traditions in Qatar" />
          <div className="overlay">
            <h1>Majlis and other traditions in Qatar</h1>
            <p>The majlis is a central feature of Qatari life. Located by the home, this is where individuals meet to discuss pressing topics, functioning much like a salon in Western Europe.</p>
            <p>› by visitqatar.com</p>
            <a href="https://visitqatar.com/intl-en/about-qatar/traditions" target="_blank" rel="noopener noreferrer">
              <button>Read Article</button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://visitqatar.com/adobe/dynamicmedia/deliver/dm-aid--b1424377-abbc-4b91-a134-31e793c5bd6b/gka-kitesurfing-tournament.jpg?quality=75&preferwebp=true&width=1280" alt="Sports In Qatar" />
          <div className="overlay">
            <h1>Sports In Qatar</h1>
            <p>Qatar is a passionate sporting nation, ranging from one of the oldest sports known to man (falconry) to international spectacles like the FIFA World Cup, Asian Games and Formula One.</p>
            <p>› by visitqatar.com</p>
            <a href="https://visitqatar.com/intl-en/about-qatar/sport" target="_blank" rel="noopener noreferrer">
              <button>Read Article</button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://visitqatar.com/adobe/dynamicmedia/deliver/dm-aid--635485a2-c61d-4d3f-bc01-30cce9a94f50/who-dohwh-spice-market-03.jpg?quality=75&preferwebp=true&width=800" alt="The local cuisine of Qatar" />
          <div className="overlay">
            <h1>The local cuisine of Qatar</h1>
            <p>Qatari cuisine is rich in tradition with a blend of influences from India, Persia, Lebanon, and North Africa. Get ready for a flavour explosion and learn more about our food culture.</p>
            <p>› by visitqatar.com</p>
            <a href="https://visitqatar.com/intl-en/about-qatar/cuisine" target="_blank" rel="noopener noreferrer">
              <button>Read Article</button>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default CubeSlider;