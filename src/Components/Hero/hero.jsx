import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './hero.css';
import SpotlightNews from './News-Section/SpotlightNews';
import OldNews from './News-Section/OldNews';
import newsData from '../../Data/newsData.json';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faScroll, faCircleArrowRight, faImage,faMagnifyingGlassPlus, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import background from './Main-Background.jpeg';
import { Menu } from '../Side_Menu/s_menu';
// import { ReactComponent as Logo } from '../../assets/AOT-white.svg';
const Hero = () => {
  const { spotlightNews, oldNews } = newsData;
  const [typeEffect] = useTypewriter({
    words: ['Annual Tech Fest', 'Career Fair', 'Art & Craft Exhibition'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
    Cursor: true
  });

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
      const fetchPhotos = async () => {
          try {
              const photoPromises = Array.from({ length: 9 }, () =>
                  axios.get('https://source.unsplash.com/random')
              );
              const photoResponses = await Promise.all(photoPromises);
              const photoUrls = photoResponses.map(response => response.request.responseURL);
              setPhotos(photoUrls);
          } catch (error) {
              console.error("Error fetching the photos", error);
          }
      };

      fetchPhotos();
  }, []);

const [model, setModel] = useState(false);
const [tempimgsrc, setTempImgSrc] = useState('');
const getImg = (photo) => {
  setTempImgSrc(photo);
  setModel(true);
}

  
  return (
    <div>
      <Menu/>

    <div className='hero'>
      <div className="main-page">
      <img src={background} alt="Main Background"/>
      <div className="about-aot">
        <div className="aot">
        {/* <Logo /> */}
        <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 117 30"
    style={{ enableBackground: 'new 0 0 117 30' }}
    xmlSpace="preserve"
  >
    <style type="text/css">
      {`
        .st0{fill:#FFFFFF;}
        .st1{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}
      `}
    </style>
<g>
	<g>
		<path className="st0" d="M73.2,8.1h-9.5c-0.1,0-0.2,0.2-0.1,0.3l2,2.2c0,0,0.1,0.1,0.1,0.1H67c0.1,0,0.2,0.1,0.2,0.2v11
			c0,0.1,0.1,0.2,0.2,0.2h2.6c0.1,0,0.2-0.1,0.2-0.2v-11c0-0.1,0.1-0.2,0.2-0.2h3.1c0.1,0,0.2-0.1,0.2-0.2V8.2
			C73.4,8.1,73.3,8.1,73.2,8.1z"/>
		<path className="st1" d="M56.7,20.2c-0.1,0.1-0.1,0.2-0.1,0.3l0.4,1.2c0,0.1,0,0.2-0.1,0.2h-2.2c-0.1,0-0.1,0-0.1-0.1L49.7,8.3
			c0-0.1,0-0.2,0.1-0.2H52c0.1,0,0.1,0,0.1,0.1l1.9,5.2c0,0,0,0.1,0.1,0.1c0,0,0.1,0,0.1-0.1c0.1-0.3,0.2-0.6,0.3-0.9
			c0.1-0.1,0-0.3-0.1-0.4l-0.6-0.6c-0.1-0.1-0.1-0.3,0-0.4l1.8-1.8c0.1-0.1,0.3-0.1,0.4,0l0.6,0.6c0.1,0.1,0.3,0.1,0.4,0.1
			c0.2-0.1,0.5-0.2,0.8-0.3c0.1,0,0.2-0.2,0.2-0.3V8.4c0-0.2,0.1-0.3,0.3-0.3h2.5c0.2,0,0.3,0.1,0.3,0.3v0.8c0,0.1,0.1,0.3,0.2,0.3
			c0.3,0.1,0.5,0.2,0.8,0.3c0.1,0.1,0.3,0,0.4-0.1l0.6-0.6c0.1-0.1,0.3-0.1,0.4,0l1.8,1.8c0.1,0.1,0.1,0.3,0,0.4l-0.6,0.6
			c-0.1,0.1-0.1,0.2-0.1,0.4c0.1,0.2,0.2,0.5,0.3,0.8c0,0.1,0.2,0.2,0.3,0.2h0.9c0.2,0,0.3,0.1,0.3,0.3v2.5c0,0.2-0.1,0.3-0.3,0.3
			h-1c-0.1,0-0.3,0.1-0.3,0.2c-0.1,0.2-0.2,0.5-0.3,0.7c-0.1,0.1,0,0.3,0.1,0.4l0.7,0.7c0.1,0.1,0.1,0.3,0,0.4l-1.8,1.8
			c-0.1,0.1-0.3,0.1-0.4,0l-0.7-0.7C62.4,20,62.2,20,62.1,20c-0.2,0.1-0.4,0.2-0.7,0.3c-0.1,0-0.2,0.2-0.2,0.3v1
			c0,0.2-0.1,0.3-0.3,0.3h-2.5c-0.2,0-0.3-0.1-0.3-0.3v-1c0-0.1-0.1-0.3-0.2-0.3c-0.2-0.1-0.5-0.2-0.7-0.3c-0.1-0.1-0.3,0-0.4,0.1
			L56.7,20.2z M62.8,14.9c0,1.7-1.4,3.2-3.1,3.2c-1.7,0-3.1-1.4-3.1-3.2c0-1.7,1.4-3.2,3.1-3.2C61.4,11.8,62.8,13.2,62.8,14.9z"/>
		<path className="st0" d="M50.6,12.2c0,0,0-0.1,0-0.1l-1.4-3.7c-0.1-0.1-0.2-0.1-0.3,0l-5.2,13.3c0,0.1,0,0.2,0.1,0.2h3.1
			c0.1,0,0.1,0,0.1-0.1L50.6,12.2z"/>
	</g>
</g>
</svg>

        </div>
        <span className='clgName'>Academy of Technology</span>
        <span className='estd'>ESTD: 2008</span>
        <span className='quote-main'>
        Translate your <strong>vision</strong> into <strong>reality</strong>
        </span>
        <button className='about-us'>About Us
        <FontAwesomeIcon id='go' icon={faCircleArrowRight} />
        </button>
      </div>
      </div>


      <div className='news-container'>
        <div className='spotlight-container'>
          {spotlightNews.map((news) => (
  <SpotlightNews
    key={news.id}
    id={news.id}
    img={news.img}
    headline={news.headline}
    description={news.description}
  />
))}
        </div>
        <div className='more-news'>         
          <span>MORE FROM THE AOT COMMUNITY</span>
        <div className='old-news-container'>
          {oldNews.map((news) => (
          <OldNews
          key={news.id}
    id={news.id}
    img={news.img}
    headline={news.headline}
    description={news.description}
  />
))}
        </div>
        </div>
      </div>
      
      {/* Announcements Section*/}
      <div className="announcement-section">
        <h3><span>Announcements</span>
        <FontAwesomeIcon id='script-ico' icon={faScroll} />
        </h3>
          <ul className='announcement-content'>
            <li><a href="">noticeeeeeeeeeeeeeeee 00</a></li>
            <li><a href="">notice 01</a></li>
            <li><a href="">notice 02</a></li>
            <li><a href="">notice 03</a></li>
            <li><a href="">notice 04</a></li>
          </ul>

      </div>

      {/* Event Section */}

      <div className="event-section">
        <h3>{typeEffect} :<span> Upcomming Events</span> 
        <FontAwesomeIcon id='calender-ico' icon={faCalendarCheck} />
        </h3>
        <div className="event-content">
          <div className="event1 event"></div>
          <div className="event2 event"></div>
        </div>
      </div>
      {/* photo gallery */}
      <div className={model? "model open": "model"}>
        <img src={tempimgsrc} alt="" />
        <FontAwesomeIcon icon={faCircleXmark} onClick={() => setModel(false)}/>
      </div>
      <div className="photo-gallery">
    <h3>Photo Gallery <FontAwesomeIcon icon={faImage} /></h3>
  <div className="gallery">
    {photos.map((photo, index) => (
                <div className="photo" key={index} onClick={() => getImg(photo)}>
                    <img src={photo} alt={`Random Unsplash ${index + 1}`} />
                    <FontAwesomeIcon icon={faMagnifyingGlassPlus} className="zoom-icon" />
                </div>
            ))}

  </div>
      </div>


      {/* Fotter */}
      <div className="fotter">
        <div className="subscribe-letter">
      <span>Want more about AOT?</span>
      <span>
      Explore <a href="">more spotlights</a>, or subscribe to receive <a href="">daily or weekly doses of AOT</a> in your inbox.
      </span>
        </div>
      <button className='Subscribe'>Subscribe</button>
      </div>


    </div>
    </div>
  );
};

export default Hero;
