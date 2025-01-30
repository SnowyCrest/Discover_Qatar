import React, { useState, useEffect } from 'react';
import styles from './WeatherWidget.module.css';
import classNames from 'classnames';
import { WiDaySunny, WiNightClear, WiRain, WiThunderstorm, 
         WiSnow, WiCloudy, WiDayCloudy, WiNightAltCloudy } from 'react-icons/wi';
import { IoChevronUpOutline, IoChevronDownOutline } from 'react-icons/io5';

const WeatherWidget = () => {
  const API_KEY = '1f9a7b21e995b32405047b0b62afb676';
  const QATAR_LAT = 25.2854;
  const QATAR_LON = 51.5310;

  const [hoursData, setHoursData] = useState([]);
  const [currentHourData, setCurrentHourData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleWidget = () => {
    setIsVisible(!isVisible);
  };

  // Fetch weather forecast
  const fetchWeatherForecast = async () => {
    try {
      const currentDate = new Date();
      const currentTimestamp = Math.floor(currentDate.getTime() / 1000); // Current timestamp in seconds
      const tomorrowTimestamp = currentTimestamp + 86400; // Add 24 hours (in seconds) for tomorrow

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${QATAR_LAT}&lon=${QATAR_LON}&appid=${API_KEY}&units=metric&cnt=16`
      );
      const data = await response.json();

      const filteredData = data.list.filter((entry) => {
        const entryTimestamp = entry.dt;
        return entryTimestamp >= currentTimestamp && entryTimestamp < tomorrowTimestamp + 86400;
      });

      const processedData = processWeatherData(filteredData);
      setHoursData(processedData);
      setCurrentHourData(processedData[0]); // Set initial hour data
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return [];
    }
  };

  // Process OpenWeatherMap API data
  const processWeatherData = (weatherData) => {
    const processedData = [];
    const currentDate = new Date();
    const todayDate = currentDate.toLocaleDateString('en-CA');
    const tomorrowDate = new Date(currentDate);
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    const formattedTomorrowDate = tomorrowDate.toLocaleDateString('en-CA');

    weatherData.forEach((entry) => {
      const entryDate = new Date(entry.dt_txt);
      const entryDateString = entryDate.toLocaleDateString('en-CA');

      let dayLabel;
      if (entryDateString === todayDate) {
        dayLabel = 'Today';
      } else if (entryDateString === formattedTomorrowDate) {
        dayLabel = 'Tomorrow';
      } else {
        dayLabel = entryDate.toLocaleDateString('en-US', { weekday: 'long' });
      }

      processedData.push({
        day: dayLabel,
        hour: entryDate.getHours(),
        weather: mapWeatherCondition(entry.weather[0].main, entryDate.getHours()),
        temp: Math.round(entry.main.temp),
        time: entryDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })
      });
    });

    return processedData;
  };

  // Map weather conditions
  const mapWeatherCondition = (condition, hour) => {
    const nightConditions = hour < 6 || hour >= 18;

    switch (condition) {
      case 'Clear':
        return nightConditions ? 'clear-night' : 'sunny';
      case 'Clouds':
        return nightConditions ? 'partly-cloudy-night' : 'partly-cloudy';
      case 'Rain':
        return 'rainy';
      case 'Thunderstorm':
        return 'thunderstorm';
      case 'Snow':
        return 'snowy';
      default:
        return nightConditions ? 'partly-cloudy-night' : 'cloudy';
    }
  };

  // Get icon based on weather
  const getWeatherIcon = (weather) => {
    switch (weather) {
      case 'clear-night':
        return <WiNightClear className={styles.weatherIcon} />;
      case 'sunny':
        return <WiDaySunny className={styles.weatherIcon} />;
      case 'rainy':
        return <WiRain className={styles.weatherIcon} />;
      case 'thunderstorm':
        return <WiThunderstorm className={styles.weatherIcon} />;
      case 'snowy':
        return <WiSnow className={styles.weatherIcon} />;
      case 'cloudy':
        return <WiCloudy className={styles.weatherIcon} />;
      case 'partly-cloudy':
        return <WiDayCloudy className={styles.weatherIcon} />;
      case 'partly-cloudy-night':
        return <WiNightAltCloudy className={styles.weatherIcon} />;
      default:
        return <WiCloudy className={styles.weatherIcon} />;
    }
  };

  // Toggle sun and moon based on the hour
  const toggleSunMoon = (hour) => {
    const sunrise = 6; // Sunrise at 6 AM
    const sunset = 18; // Sunset at 6 PM
    const sun = document.querySelector(`.${styles.weatherSun}`);
    const moon = document.querySelector(`.${styles.weatherMoon}`);
    const background = document.querySelector(`.${styles.weatherBackground}`);
    const backgroundNight = document.querySelector(`.${styles.weatherBackgroundNight}`);
    const isNight = hour < sunrise || hour >= sunset;
    
    // Add requestAnimationFrame for smoother transitions
    requestAnimationFrame(() => {
      setIsNightMode(isNight);
      
      if (!isNight) {
        const dayDuration = sunset - sunrise;
        const rotation = -90 + ((hour - sunrise) / dayDuration) * 180;
        sun.style.transform = `rotate(${rotation}deg)`;
        sun.style.opacity = '1';
        moon.style.opacity = '0';
        background.style.opacity = '1';
        backgroundNight.style.opacity = '0';
      } else {
        const nightDuration = 24 - (sunset - sunrise);
        const adjustedHour = hour < sunrise ? hour + 24 : hour;
        const rotation = -90 + ((adjustedHour - sunset) / nightDuration) * 180;
        moon.style.transform = `rotate(${rotation}deg)`;
        moon.style.opacity = '1';
        sun.style.opacity = '0';
        background.style.opacity = '0';
        backgroundNight.style.opacity = '1';
      }
    });
  };

  // Update weather and temperature display
  const updateWeatherAndTemperature = (currentHour) => {
    const temperature = currentHour.temp;
    const weather = currentHour.weather;
    const day = currentHour.day;

    document.getElementById('temperature').textContent = temperature;
    document.getElementById('weatherType').textContent = weather.replace(/-/g, ' ');

    const rain = document.getElementById('rain');
    const snow = document.getElementById('snow');
    const cloud = document.getElementById('cloud');
    const thunderstorm = document.getElementById('thunderstorm');
    const background = document.querySelector(`.${styles.weatherBackground}`);
    const sun = document.querySelector(`.${styles.weatherSun}`);
    const moon = document.querySelector(`.${styles.weatherMoon}`);

    rain.style.opacity = '0';
    snow.style.opacity = '0';
    cloud.style.opacity = '0';
    thunderstorm.style.opacity = '0';
    background.style.filter = 'none';
    sun.style.filter = 'none';
    moon.style.filter = 'none';

    switch (weather) {
      case 'rainy':
        rain.style.opacity = '1';
        cloud.style.opacity = '0.8';
        background.style.filter = 'grayscale(0.5) brightness(0.5)';
        moon.style.filter = 'brightness(0.8)';
        break;
      case 'snowy':
        snow.style.opacity = '1';
        background.style.filter = 'grayscale(0.5) opacity(0.4)';
        sun.style.filter = 'grayscale(0.9)';
        break;
      case 'cloudy':
        cloud.style.opacity = '0.9';
        background.style.filter = 'grayscale(0.5) brightness(0.5)';
        moon.style.filter = 'brightness(0.8)';
        break;
      case 'thunderstorm':
        cloud.style.opacity = '0.8';
        thunderstorm.style.opacity = '1';
        background.style.filter = 'grayscale(1) brightness(0.1)';
        sun.style.filter = 'grayscale(0.9)';
        break;
      case 'partly-cloudy':
      case 'partly-cloudy-night':
        cloud.style.opacity = '0.5';
        break;
    }

    document.getElementById('currentDay').textContent = day;
  };

  useEffect(() => {
    fetchWeatherForecast();
  }, []);

  useEffect(() => {
    if (currentHourData) {
      toggleSunMoon(currentHourData.hour);
      updateWeatherAndTemperature(currentHourData);
    }
  }, [currentHourData]);

  return (
    <>
      <button 
        className={styles.toggleButton}
        onClick={toggleWidget}
        type="button" // Add type to prevent form submission
      >
        {isVisible ? (
          <>
            <IoChevronDownOutline size={16} />
            Hide Weather
          </>
        ) : (
          <>
            <IoChevronUpOutline size={16} />
            Show Weather
          </>
        )}
      </button>
      <div className={classNames(styles.weatherWidget, {
        [styles.weatherWidgetVisible]: isVisible,
        [styles.nightMode]: isNightMode
      })}>
        <div className={styles.weatherCard}>
          <div className={styles.weatherCardBody}>
            <div className={styles.weatherBackgroundNight}></div>
            <div className={styles.weatherBackground}></div>
            <div className={styles.weatherTemperature}>
              <span id="temperature">21</span>°C
            </div>
            <div className={styles.weatherType}>
              <span id="weatherType">Sunny</span>
            </div>
            <div className={styles.currentDay}>
              <span id="currentDay">Today</span>
            </div>
            <div id="thunderstorm">
              <div id="lightning"></div>
            </div>
            <div className={styles.weatherSun}></div>
            <div className={styles.weatherMoon}></div>
            <div id="cloud"></div>
            <canvas id="rain"></canvas>
            <div id="snow"></div>
            <div className={styles.weatherHoursContainer}>
              <div className={styles.weatherHours}>
                {hoursData.map((data, index) => (
                  <div
                    key={index}
                    className={classNames(styles.weatherHour, {
                      [styles.weatherActive]: currentHourData && currentHourData.hour === data.hour
                    })}
                    data-day={data.day}
                    data-hour={data.hour}
                    data-weather={data.weather}
                    data-temp={data.temp}
                    onClick={() => setCurrentHourData(data)}
                  >
                    <span className={styles.weatherTimeSpan}>{data.time}</span>
                    {getWeatherIcon(data.weather)}
                    <span className={styles.weatherTempSpan}>{data.temp}°C</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherWidget;
