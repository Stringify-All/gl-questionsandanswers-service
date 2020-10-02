const axios = require('axios');

const putQuestionHelpful = (id) => axios.put(`http://52.26.193.201:3000/qa/question/${id}/helpful`)
  .then((data) => data)
  .catch((err) => {throw err;});

export default putQuestionHelpful;
