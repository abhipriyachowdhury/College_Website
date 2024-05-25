import React from 'react';
import { useParams } from 'react-router-dom';
import './UserPage.css'
const UserPage = () => {
  const { name } = useParams();

  return (
    <div className='user-page'>
      <h1>{name}</h1>

    </div>
  );
};
export default UserPage;
