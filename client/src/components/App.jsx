import React from 'react';
import { useState, useEffect } from 'react';
import GlobalStyle from './globalStyle';

const App = () => {
  const [count, setCount] = useState(1);

  return (
    <body>
      <GlobalStyle />
      <h1> Dangerzone. </h1>
      <h2> Kenny Loggins</h2>
      <p> Long Live the Scrumdog Billionaires </p>
      <p> This is the count {count}
      </p>
      <button type="submit" onClick={() => setCount(count * 2)}> Button Large </button>
    </body>
  );
};

export default App;
