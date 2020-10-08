const axios = require('axios');
console.log('insubmit');

const postQuestion = (Id) => axios.get(`http://52.26.193.201:3000/qa/${Id}`)
  .then((data) => data)
  .catch((err) => { throw err; });

export default postQuestion;
