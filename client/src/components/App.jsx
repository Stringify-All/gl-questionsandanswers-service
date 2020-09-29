/* eslint-disable import/extensions */
import React, { useState } from 'react';
import GlobalStyle from './globalStyle';

import ProductQuestionMap from '../modules/productQuestionMap.jsx';
// import ProductQuestionForm from '../modules/productQuestion.jsx';

const App = () => (
  <body>
    <GlobalStyle />
    <h2> Questions and Answers</h2>
    <input
      type="text"
      placeholder="search"
    />
    <button type="submit" onClick={() => setCount(count * 2)}> Search </button>
    <ProductQuestionMap/>
  </body>
);

export default App;

// props.answers
// map answers
// Object.values(on questions)
