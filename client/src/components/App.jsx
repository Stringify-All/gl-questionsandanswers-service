/* eslint-disable import/extensions */
import React, { useState } from 'react';
import ProductQuestionMap from '../modules/productQuestionMap.jsx';
import AddQuestion from '../modules/addQuestion.jsx';
import './main.css';
// import ProductQuestionForm from '../modules/productQuestion.jsx';

const App = () => (
  <div>
    <div className="container">
      <h1> Questions and Answers</h1>
      <div className="row">
        <div className="col">
          <ProductQuestionMap />
        </div>
      </div>
    </div>
  </div>
);

export default App;
