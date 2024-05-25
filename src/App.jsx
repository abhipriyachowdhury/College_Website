import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Ribbon from './Components/Band/ribbon';
import { Nav } from './Components/Navbar_Top/nav';
import UserPage from './Components/Side_Menu/UserPage/UserPage';
import './App.css';
import Hero from './Components/Hero/hero';
import Faculty from './Components/Links/Faculty';

function App() {
  return (
    <>
      <div className="app_container">
        <div className="content">
          <Router>
          <Nav />
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/user/:name" element={<UserPage />} />
              <Route path="/faculty" element={<Faculty />} />
            </Routes>
          </Router>
          <Ribbon/>
        </div>
      </div>
    </>
  );
}

export default App;

