import React from 'react';
import ProductQuestionForm from './productQuestion.jsx';

const ProductQuestionMap = (props) => {
  console.log('props in mapping', props.question);
  // eslint-disable-next-line space-before-blocks
  if(props.question[0] !== undefined){
    const mapProcuctQuestion = props.question;
     console.log('in cond', mapProcuctQuestion[0]);
    return (<div>{`${(mapProcuctQuestion[0].question_body)}`}</div>);
    // return ()
  }
return <div>loading</div>;
};
export default ProductQuestionMap;