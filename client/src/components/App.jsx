/* eslint-disable import/extensions */
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import GlobalStyle from './globalStyle';
import ProductQuestionMap from '../modules/productQuestionMap.jsx';
// import ProductQuestionForm from '../modules/productQuestion.jsx';

const App = () => (
  <>
    <div className="container">
      <div className="row">
        <div className="col-md-auto">
          username
        </div>
        <div className="col">
          <h1> Questions and Answers</h1>
          <ProductQuestionMap />
        </div>
        <div className="col-md-auto">
          is it helpful
        </div>
      </div>
    </div>
<GlobalStyle />
  </>
);

export default App;
