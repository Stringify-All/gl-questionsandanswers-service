/* eslint-disable arrow-body-style */
import React from 'react';
import GlobalStyle from '../components/globalStyle';

// eslint-disable-next-line no-unused-vars
const ProductAnswer = ({answer}) => {
  console.log('answer', answer);
  return (
    <div className="answer">
      <GlobalStyle />

      {
      `A:  ${answer.body}`
      }
      <div className="answerInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              {
                `by ${answer.answerer_name}`// .concat(` ${answer.date}`) need to format
              }
            </div>
            <div className="col-md-3">
              {
                `helpful yes(${answer.helpfulness})`
              }
            </div>
            <div className="col-md-3">
              report
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg">
              photos
            </div>
          </div>
        </div>
        <div className="container">
          <div className="loadMoreAnswers">
            <div className="row">
              <div className="col-sm-4">
                Load More Answers
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductAnswer;
