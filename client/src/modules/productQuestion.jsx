import React from 'react';

// eslint-disable-next-line arrow-body-style
const ProductQuestionForm = (props) => {
  console.log('inquestionform');
  const productQuestion = props.question;
  // console.log('props', props);
  // console.log('productQuestion', productQuestion);
  return (

    <div className="lines p2-a">
      {
      `User: ${productQuestion.asker_name}`
    }
    </div>
  );
};

export default ProductQuestionForm;
