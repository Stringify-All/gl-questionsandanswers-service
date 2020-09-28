import React from 'react';
import ProductQuestionForm from './productQuestion.jsx';

const ProductQuestionMap = (props) => {
  console.log('props in mapping', props.question);
  // eslint-disable-next-line space-before-blocks
  if(props.question[0] !== undefined){
    const mapProcuctQuestion = props.question;
     //console.log('in cond', mapProcuctQuestion);
    return(
      <div className="questionsMap">
        {mapProcuctQuestion.map((questionObject) =>
          <ProductQuestionForm productQuestion={questionObject} />)}
      </div>
    )
  }
return <div>loading</div>;
};
export default ProductQuestionMap;