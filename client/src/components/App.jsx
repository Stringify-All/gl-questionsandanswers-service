/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import GlobalStyle from './globalStyle';
import getProductQuestionGet from '../api/getproductquestion';
// import getProductAnswerGet from '../api/getproductanswer';
import ProductQuestionForm from '../modules/productQuestion.jsx';
import ProductAnswerForm from '../modules/productAnswer.jsx';
// import ProductAnswerList from '../modules/productAnswerMap.jsx';

const App = () => {
  // const [count, setCount] = useState(1);
  const [userId, setuserId] = useState(3);
  const [productQuestion, setProductQuestion] = useState(userId);
  const [productAnswer, setProductAnswer] = useState(userId);

  useEffect(() => {
    getProductQuestionGet(userId)
      .then((res) => {
        // console.log('this is data: ', res);
        // console.log('this is results: ', res.data.results);
        setProductQuestion(res.data.results[userId]);
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  // console.log(productQuestion[1], 'data');
  useEffect(() => {
    getProductQuestionGet(userId)
      .then((res) => {
        // console.log('answer this is data: ', res);
        // console.log('answer this is results: ', res.data.results);
        // console.log('answer results', Object.values(res.data.results[userId].answers));
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
      {/* <ProductAnswerList answer={productAnswer} /> */}
    </body>
  );
};

export default App;

// props.answers
// map answers
// Object.values(on questions)
