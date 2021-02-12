import React from 'react';

const Result = ({ item }) => {
  return (
    <div
      className='tweet-container'
      onClick={() => {
        window
          .open(`https://twitter.com/zzzzz/status/${item.id_str}`, '_blank')
          .focus();
      }}>
      {item.full_text}
    </div>
  );
};

export default Result;
