import React, { useRef, useEffect, useState } from 'react';
import './ribon.css';
import { gsap } from 'gsap';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faSun, faCloudSunRain, faCloudSun, faCloudRain, faCloudMoonRain, faCloudMoon, faMoon, faCloudBolt } from '@fortawesome/free-solid-svg-icons';

const Ribbon = () => {
  const ribbonRef = useRef();
  const [temperature, setTemperature] = useState(null);
  const [weather, setWeather] = useState(null);

  // Function to format the date
  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = date.toLocaleDateString('en-US', options);

    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
    const restOfDate = dateString.replace(dayName, '').trim();

    return (
      <>
        <span className="day-name">{dayName}</span> {restOfDate}
      </>
    );
  };

  // Function to fetch weather data
  const fetchWeather = async () => {
    const apiKey = 'e45204acec45e9aa0088ad88895faefb';
    const lat = '22.95326672745003';
    const lon = '88.37651924419917';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    try {
      const response = await axios.get(url);
      const temp = response.data.main.temp;
      const weatherCondition = response.data.weather[0].main;
      setTemperature(temp);
      setWeather(weatherCondition);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  // Get the current date
  const currentDate = new Date();

  useEffect(() => {
    fetchWeather();
  }, []);

  const getIcon = () => {
    if (!weather) return null;

    const hour = currentDate.getHours();
    const isDayTime = hour >= 6 && hour < 18;

    switch (weather) {
      case 'Clear':
        return isDayTime ? faSun : faMoon;
      case 'Clouds':
        return isDayTime ? faCloudSun : faCloudMoon;
      case 'Rain':
        return isDayTime ? faCloudSunRain : faCloudMoonRain;
      case 'Thunderstorm':
        return faCloudBolt;
      case 'Drizzle':
        return faCloudRain;
      default:
        return faCloud;
    }
  };

  return (
    <div className="ribbon-container">
      <div ref={ribbonRef} className="animate"></div>
      <div className='date'>{formatDate(currentDate)}</div>
      <div className="weather">
        <div className='weather-icon'>
          {getIcon() && <FontAwesomeIcon icon={getIcon()} size="2x" />}
        </div>
        <div className='temp'>{temperature !== null ? `${temperature}°C` : 'Loading temperature...'}</div>
      </div>
    </div>
  );
};

export default Ribbon;

