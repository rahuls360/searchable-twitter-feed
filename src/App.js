import React, { useState, useEffect } from 'react';
import './App.css';
import {data} from './data.js';

const App = () => {
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    const result = data.filter(item => item.full_text.toLowerCase().indexOf(searchString.toLowerCase()) > -1);
    console.log(result, "result");
  }, [searchString])

  return (
    <div className="App">
      <h3>Twitter Likes - Search</h3>
      <input value={searchString} onChange={e => setSearchString(e.target.value)}/>
    </div>
  );
}

export default App;
