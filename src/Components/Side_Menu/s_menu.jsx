import React, { useState, useEffect } from 'react';
import './menu.css';
import SearchContainer from './Search-System/SearchContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareUpRight} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const [featuredTopics, setFeaturedTopics] = useState([]);
  const [recentSearches, setRecentSearches] = useState(() => {
    const savedSearches = localStorage.getItem('recentSearches');
    return savedSearches ? JSON.parse(savedSearches) : [];
  });
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
  }, [recentSearches]);

  const addRecentSearch = (search) => {
    setRecentSearches((prevSearches) => {
      const updatedSearches = [...prevSearches];
      if (!updatedSearches.includes(search)) {
        if (updatedSearches.length >= 5) {
          updatedSearches.shift();
        }
        updatedSearches.push(search);
      }
      return updatedSearches;
    });
  };

  const handleRecentSearchClick = (search) => {
    navigate(`/user/${search}`);
  };
  useEffect(() => {
    // Fetch featured topics from JSONPlaceholder as a demo endpoint
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        // Assuming we take the first 5 posts as featured topics for demo purposes
        const featured = data.slice(0, 5).map(post => ({ name: post.title }));
        setFeaturedTopics(featured);
      })
      .catch((error) => {
        console.error('Error fetching featured topics:', error);
      });
  }, []);
  return (
    <div className="side-menu">
      <div className="search-bar-container">
        <span>Explore websites</span>
        <SearchContainer addRecentSearch={addRecentSearch} />
      </div>
      <div className="recent-search">
        <span>Recent Searches</span>
        <ul className='recent-points'>
          {recentSearches.map((search, index) => (
            <li key={index} onClick={() => handleRecentSearchClick(search)}>
              {search}
            </li>
          ))}
        </ul>
      </div>
      <div className="featured-topic">
        <span>Featured Topics</span>
        <ul className="featured-ul">
          {featuredTopics.map((topic, index) => (
            <li key={index}>{topic.name}
            <FontAwesomeIcon icon={faSquareUpRight} id='north-east'/>
            </li>
          ))}
        </ul>
      </div>
      <div className="about">
        <strong>Academy of Technology</strong>
        <div className="address">
          <a href="https://maps.app.goo.gl/6vPwiovMZiWB2X3N6">
            Grand Trunk Rd, Adisaptagram, Krishnapur Chandanpur, Dakshin Hazipur, West Bengal 712502
          </a>
        </div>
        <div className="about_links link-1">
          <a href="">Visit</a>
          <a href="">Map</a>
          <a href="">Events</a>
          <a href="">People</a>
          <a href="">Carrier</a>
          <a href="">Contact</a>
        </div>
        <div className="about_links link-2">
          <a href="">Privacy</a>
          <a href="">Accessibility</a>
          <a href="">Social Media Hub</a>
        </div>
      </div>
    </div>
  );
};

export { Menu };
