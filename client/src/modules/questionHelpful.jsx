import React, { useState, useEffect } from 'react';
import GlobalStyle from '../components/globalStyle';

const HelpfulQuestion = ({ helpfulBody}) => {
  console.log('helpfulBody', helpfulBody);
  const helpfulCount = helpfulBody.question_helpfulness;
  const [count, setCount] = useState(helpfulCount);

  return (
    <div>
      <GlobalStyle />
      {
      `Is the question Helpful?`
}
      <button class="helpfulbutton" type="submit" onClick={() => setCount(count + 1)}> Yes </button>
      {
      `${(count)}`
      }
    </div>
  );
};

export default HelpfulQuestion;