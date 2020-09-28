/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
// eslint-disable-next-line arrow-body-style
const ProductQuestionForm = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  // eslint-disable-next-line react/prop-types
  const productQuestion = props.question;
  console.log('in productQuestion render', productQuestion);
  return (

    <div className="lines p2-a">
      {
      `User: ${productQuestion.asker_name}`.concat(` asked: ${productQuestion.question_body}`)
    }
    </div>
  );
};

export default ProductQuestionForm;
