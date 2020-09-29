import React, { useState } from 'react';
import ProductAnswerMap from './productAnswerMap.jsx';
// eslint-disable-next-line arrow-body-style

const ProductQuestion = (productQuestion) => {
  const newProductQuestion = productQuestion.productQuestion;
  // const [count, setCount] = useState(0);
  return (
    <div className="answer">
      <div>
        {
      `${newProductQuestion.asker_name}`.concat(
        ` asked: ${newProductQuestion.question_body}`,
      )
  }
      </div>
      <div>
        <HelpfulButton newProductQuestion={newProductQuestion} />
        <ProductAnswerMap newQuestion={newProductQuestion} />
      </div>
    </div>

  );
};
export default ProductQuestion;
