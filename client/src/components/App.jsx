/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import GlobalStyle from './globalStyle';
import getProductQuestionGet from '../api/getproductquestion';
// import getProductAnswerGet from '../api/getproductanswer';
// import ProductQuestionForm from '../modules/productQuestion.jsx';
import ProductQuestionMap from '../modules/productQuestionMap.jsx';
import ProductAnswerForm from '../modules/productAnswer.jsx';
// import ProductAnswerList from '../modules/productAnswerMap.jsx';

const App = () => {
  const [userId, setuserId] = useState(3);
  const [productQuestion, setProductQuestion] = useState([]);
  const [productAnswer, setProductAnswer] = useState(userId);

  useEffect(() => {
    getProductQuestionGet(userId)
      .then((res) => {
        setProductQuestion(res.data.results);
        console.log('product question', res.data.results);
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
      <ProductQuestionMap question={productQuestion} />
      <ProductAnswerForm answer={productAnswer} />
      {/* <ProductAnswerList answer={productAnswer} /> */}
    </body>
  );
};

export default App;

// props.answers
// map answers
// Object.values(on questions)
