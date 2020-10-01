import React, { useState } from 'react';
import ProductAnswerMap from './productAnswerMap.jsx';
import GlobalStyle from '../components/globalStyle';

const ProductQuestion = (productQuestion) => {
  const newProductQuestion = productQuestion.productQuestion;
  console.log(newProductQuestion);
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="questions">
              <div>
                {
              `  Q:  ${newProductQuestion.question_body}`
              }
              </div>
              <div>
                <ProductAnswerMap newQuestion={newProductQuestion} />
              </div>
            </div>
          </div>
          <div className="col-md-auto">
            {
              `Helpful? Yes (${newProductQuestion.question_helpfulness})`
            }
          </div>
          <div className="col-md-auto">
            Add Answer
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductQuestion;
