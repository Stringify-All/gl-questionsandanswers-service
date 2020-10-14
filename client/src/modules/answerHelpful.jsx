/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import putAnswerHelpful from '../api/putanswerhelpful';

// eslint-disable-next-line react/prop-types
const HelpfulAnswer = ({ helpfulBody }) => {
  const helpfulCount = helpfulBody.helpfulness;
  if (helpfulCount !== undefined) {
    const questionId = helpfulBody.answer_id;
    const [helpfulA, sethelpfulA] = useState(false);
    const [clicked, setclicked] = useState(helpfulCount);

    const helpfulClick = (event) => {
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
        <button className="gl-helpfulbutton" type="submit" onClick={(helpfulClick)}> Yes </button>
        {
        `  (${((clicked))})  `
        }
      </span>
    );
  }
  return (
    <div> Loading</div>
  );
};

export default HelpfulAnswer;
