import React from 'react';
// eslint-disable-next-line arrow-body-style
const ProductQuestionForm = (props) => {
  const productQuestion = props.productQuestion;
  // console.log('props', props);
  // console.log('productQuestion', productQuestion);
  return (
    <div className="lines p2-a">
      {
        `${productQuestion.asker_name}`.concat(
          ` asked: ${productQuestion.question_body}`)
    }
    </div>
  );
};

export default ProductQuestionForm;
