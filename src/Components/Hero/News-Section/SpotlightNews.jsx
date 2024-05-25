import React from 'react';
import './SpotlightNews.css';

const SpotlightNews = ({ id, img, headline, description }) => {
  return (
    <div className="spotlight-news">
    <a href="">
      <img src={img} alt="Spotlight News" />
      <div className="Spotlight-details">
        <div className="description">
      <h2>{headline}</h2>
      <p>{description}</p>
        </div>
      </div>
    </a>
    </div>
  );
};

export default SpotlightNews;
