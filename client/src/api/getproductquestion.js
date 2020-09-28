const axios = require('axios');

// Questions Get Requests
// product_id, page, count
// GET /qa/:product_id

// Answers Get Requests
// GET /qa/:question_id/answers
// questions_id, page, count

const getProductQuestionGet = (id) => axios.get(`http://52.26.193.201:3000/qa/${id}`)
  .then((data) => data)
  .catch((err) => { throw err; });

export default getProductQuestionGet;
