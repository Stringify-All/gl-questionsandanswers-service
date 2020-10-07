import React, { useState, useEffect } from 'react';

import putAnswerHelpful from '../api/putanswerhelpful';

const HelpfulAnswer = ({helpfulBody}) => {
  const helpfulCount = helpfulBody.helpfulness;
  if (helpfulCount !== undefined) {
    const questionId = helpfulBody.answer_id;
    const [count, setCount] = useState(helpfulCount);
    const [helpfulA, sethelpfulA] = useState(false);
    const [clicked, setclicked] = useState(helpfulCount);
    // setting state

    const helpfulClick = (event) => {
      console.log('questionId in answer', questionId)
      event.preventDefault();
      sethelpfulA(!helpfulA);
      putAnswerHelpful(questionId)
        .then((res) => {
          setclicked(clicked + 1);
        })
        .catch((err) => {
          throw err;
        });
    };

    return (
      <span>
        Helpful?
        <button className="glhelpfulbutton" type="submit" onClick={(helpfulClick)}> Yes </button>
        {
        `${((clicked))}`
        }
      </span>
    );
  }
  return (
    <div> Loading</div>
  );
};

export default HelpfulAnswer;
