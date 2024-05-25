// SpotlightNewsDetail.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import newsData from '../../Data/newsData.json';

const SpotlightNewsDetail = () => {
  const { id } = useParams();
  const spotlightNewsItem = newsData.spotlightNews.find(news => news.id === parseInt(id));

  if (!spotlightNewsItem) {
    return <div>Spotlight news item not found!</div>;
  }

  return (
    <div>
      <h2>{spotlightNewsItem.headline}</h2>
      <img src={spotlightNewsItem.img} alt="Spotlight News" />
      <p>{spotlightNewsItem.description}</p>
    </div>
  );
};

export default SpotlightNewsDetail;
