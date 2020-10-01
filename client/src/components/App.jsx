/* eslint-disable import/extensions */
import React, { useState } from 'react';
import GlobalStyle from './globalStyle';
import ProductQuestionMap from '../modules/productQuestionMap.jsx';
// import ProductQuestionForm from '../modules/productQuestion.jsx';

const App = () => (
  <>
    <GlobalStyle />
    <div className="container">
      <h1> Questions and Answers</h1>
      <div className="row">
        <div className="col">
          <ProductQuestionMap />
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-auto">
          <button type="submit"> More Questions </button>
        </div>
        <div className="col-md-auto">
          <button type="submit"> Add a Question </button>
        </div>
      </div>
    </div>
  </>
);

export default App;
