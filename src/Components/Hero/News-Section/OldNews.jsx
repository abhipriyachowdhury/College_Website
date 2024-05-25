import React from 'react';
import './OldNews.css';

const OldNews = ({ id, img, headline, description }) => {
  return (
    <div className="old-news">
    <a href="">
      <img src={img} alt="Old News" />
      <div className="news-description">
      <h2>{headline}</h2>
      <p>{description}</p>
      </div>
    </a>
    </div>
  );
};

export default OldNews;
