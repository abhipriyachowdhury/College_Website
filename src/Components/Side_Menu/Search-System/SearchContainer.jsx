import React, { useState } from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import { FaSearch } from 'react-icons/fa';
import './SearchContainer.css';

// SearchBar Component
const SearchBar = ({ setResults }) => {
  const [typeEffect] = useTypewriter({
    words: ['Search somthing new', 'Learn somthing New', 'Created by AB'],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 20,
  });
  const [input, setInput] = useState('');

  const fetchData = (value) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value.toLowerCase())
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder={typeEffect}
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

// SearchResult Component
const SearchResult = ({ result, onClick }) => {
  const handleResultClick = () => {
    onClick(result.name);
  };

  return (
    <div className="search-result" onClick={handleResultClick}>
      {result.name}
    </div>
  );
};


// SearchResultsList Component
const SearchResultsList = ({ results, handleResultClick }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => (
        <SearchResult result={result} key={id} onClick={handleResultClick} />
      ))}
    </div>
  );
};

// SearchContainer Component
const SearchContainer = ({ addRecentSearch }) => {
  const [results, setResults] = useState([]);

  const handleResultClick = (search) => {
    addRecentSearch(search);
  };

  return (
    <div className="search-container">
      <SearchBar setResults={setResults} />
      <SearchResultsList results={results} handleResultClick={handleResultClick} />
    </div>
  );
};

export default SearchContainer;
