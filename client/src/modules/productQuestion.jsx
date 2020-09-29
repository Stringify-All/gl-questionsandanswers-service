import React, { useState } from 'react';
import ProductAnswerMap from './productAnswerMap.jsx';
// eslint-disable-next-line arrow-body-style

const ProductQuestion = (productQuestion) => {
  const newProductQuestion = productQuestion.productQuestion;
  return (
    <div className="lines p2-a">
      <div>
        {
      `${newProductQuestion.asker_name}`.concat(
        ` asked: ${newProductQuestion.question_body}`,
      )
  }
      </div>
      <div>
        <ProductAnswerMap newQuestion={newProductQuestion} />
      </div>
    </div>

  );
};
export default ProductQuestion;
