import React, { useState, useEffect } from 'react';
import './App.css';
import { data } from './data.js';
import useDebounce from './hooks/useDebounce';
import Result from './Result';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [result, setResult] = useState([]);
  const searchString = useDebounce(searchText, 300);

  useEffect(() => {
    const newResult = data.filter(
      (item) =>
        item.full_text.toLowerCase().indexOf(searchString.toLowerCase()) > -1
    );
    console.log(newResult, 'result');
    setResult(newResult);
  }, [searchString]);

  return (
    <div className='App'>
      <h3>Twitter Likes - Search</h3>
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <div className='tweets'>
        {result.map((item) => (
          <Result item={item} />
        ))}
      </div>
    </div>
  );
};

export default App;
