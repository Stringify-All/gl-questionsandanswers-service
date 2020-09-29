import React, { useState, useEffect } from 'react';

const HelpfulButton = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <button type="submit" onClick={() => setCount(count + 1)}> Helpful Question </button>
    </div>
  );
};

export default HelpfulButton;
