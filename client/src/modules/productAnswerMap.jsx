/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import getProductAnswerGet from '../api/getproductanswer';
 import ProductAnswer from './productAnswer.jsx';
console.log('inside pam');

const ProductAnswerMap = ( { newQuestion } ) => {
  const questionId = newQuestion.question_id;
  console.log('pAM props', questionId);
  const [answerId, setAnswerId] = useState([questionId]);

  useEffect(() => {
    console.log('inUseEffect')
    getProductAnswerGet(questionId)
      .then((res) => {
        console.log('res', res.data.results);
        setAnswerId(res.data.results);
      })
      .catch((err) => {
        throw err;
      });
  }, [questionId]);

  return (
    <div className="mapProductAnswer">
      {answerId.map((answerObject) => <ProductAnswer answer={answerObject} />)}
    </div>
  );
};

export default ProductAnswerMap;
