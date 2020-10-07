import React, { useState, useEffect } from 'react';
import putQuestionHelpful from '../api/putquestionhelpful';

const HelpfulQuestion = ({helpfulBody}) => {
  const helpfulCount = helpfulBody.question_helpfulness;
  const questionId = helpfulBody.question_id;
  const [count, setCount] = useState(helpfulCount);
  const [helpful, sethelpful] = useState(false);
  const [clicked, setclicked] = useState(helpfulCount);
  // setting state

  const helpfulClick = (event) => {
    event.preventDefault();
    sethelpful(!helpful);
    putQuestionHelpful(questionId)
      .then((res) => {
        setclicked(clicked + 1);
      })
      .catch((err) => {
        throw err;
      });
  }





  return (
    <div>
      {
      `Is the question Helpful?`
}
      <button className="helpfulbutton" type="submit" onClick={(helpfulClick)}> Yes </button>
      {
      `${((clicked))}`
      }
    </div>
  );
};

export default HelpfulQuestion;