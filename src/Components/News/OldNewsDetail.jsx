// OldNewsDetail.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import newsData from '../../Data/newsData.json';

const OldNewsDetail = () => {
  const { id } = useParams();
  const oldNewsItem = newsData.oldNews.find(news => news.id === parseInt(id));

  if (!oldNewsItem) {
    return <div>Old news item not found!</div>;
  }

  return (
    <div>
      <h2>{oldNewsItem.headline}</h2>
      <img src={oldNewsItem.img} alt="Old News" />
      <p>{oldNewsItem.description}</p>
    </div>
  );
};

export default OldNewsDetail;
