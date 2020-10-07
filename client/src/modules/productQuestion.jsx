import React, { useState } from 'react';
import ProductAnswerMap from './productAnswerMap.jsx';
import HelpfulQuestion from './questionHelpful.jsx';

const ProductQuestion = (productQuestion) => {
  const newProductQuestion = productQuestion.productQuestion;
  return (
    <>
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
            <HelpfulQuestion helpfulBody={newProductQuestion} />
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

// { condition ? <div> Renders on condition </div> : <div> Doesn't render on condition</div> };