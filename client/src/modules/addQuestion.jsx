import React, { useState, useEffect } from 'react';

const AddQuestion = ({productQuestion}) => {
  console.log(productQuestion);
const [clicked, setClicked] = useState([false]);

const addClicked = (event) => {
  event.preventDefault()
}
  return (
    <button className="glbutton" type="submit" onClick={addClicked}> Add a Question </button>
  )
}

export default AddQuestion;