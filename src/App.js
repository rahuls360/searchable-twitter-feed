import React, { useState, useEffect } from 'react';
import './App.css';
// import tweets from './data.json';
import useDebounce from './hooks/useDebounce';
import Result from './Result';

// copy(Object.values($reactTemp1.getState().entities.tweets.entities))

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [result, setResult] = useState([]);
  const [showScroll, setShowScroll] = useState(false);
  const [data, setData] = useState([]);
  const searchString = useDebounce(searchText, 300);

  useEffect(() => {
    window.addEventListener('scroll', scrollFunction);

    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    }

    fetch(
      `https://raw.githubusercontent.com/rahuls360/searchable-twitter-feed/master/src/data.json`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json.data);
      });
    return () => {
      window.removeEventListener('scroll', scrollFunction);
    };
  }, []);

  useEffect(() => {
    if (data.length) {
      const newResult = data.filter(
        (item) =>
          item.full_text.toLowerCase().indexOf(searchString.toLowerCase()) > -1
      );
      console.log(newResult, 'result');
      setResult(newResult);
    }
  }, [searchString]);

  return (
    <div className='App'>
      <h3>Twitter Likes - Search</h3>
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <div
        id='go-to-top'
        onClick={() => {
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        }}
        style={{ display: showScroll ? 'unset' : 'none' }}>
        Go to top
      </div>

      <div className='tweets'>
        {result.map((item) => (
          <Result item={item} />
        ))}
      </div>
    </div>
  );
};

export default App;
