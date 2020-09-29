/* eslint-disable arrow-body-style */
import React from 'react';

// eslint-disable-next-line no-unused-vars
const ProductAnswer = ({answer}) => {
  return (
    <div className="lines p2-b">
      {
      `Answer: ${answer.body}`
    }
    </div>
  );
};
export default ProductAnswer;
