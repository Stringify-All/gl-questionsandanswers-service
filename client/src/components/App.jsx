/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import GlobalStyle from './globalStyle';
import getProductQuestionGet from '../api/getproductquestion';
import ProductQuestionForm from '../modules/productQuestion.jsx';
import ProductAnswerForm from '../modules/productAnswer.jsx';
// import ProductQuestionMap from '../modules/productQuestionMap.jsx';

const App = () => {
  const [count, setCount] = useState(1);
  // const [count, setCount] = useState(1);
  const [userId, setuserId] = useState(3);
  const [productQuestion, setProductQuestion] = useState('');
  const [productAnswer, setProductAnswer] = useState(userId);

  useEffect(() => {
    getProductQuestionGet(userId)
      .then((res) => {
        setProductQuestion(res.data.results[userId]);
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  useEffect(() => {
    getProductQuestionGet(userId)
      .then((res) => {
        setProductAnswer(Object.values(res.data.results[userId].answers));
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  return (
    <body>
      <GlobalStyle />
      <h2> Questions and Answers</h2>
      <input
        type="text"
        placeholder="search"
      />
      <button type="submit" onClick={() => setCount(count * 2)}> Just Button </button>
      <ProductQuestionForm question={productQuestion} />
      <ProductAnswerForm answer={productAnswer} />
      {/* <ProductQuestionMap question={productQuestion} /> */}
      {/* <ProductAnswerList answer={productAnswer} /> */}
    </body>
  );
};

export default App;

// props.answers
// map answers
// Object.values(on questions)
