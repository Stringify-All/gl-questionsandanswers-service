const axios = require('axios');
console.log('in get request');
const getProductAnswerGet = (Id) => axios.get(`http://52.26.193.201:3000/qa/${Id}/answers`)
  .then((data) => data)
  .catch((err) => { throw err; });

export default getProductAnswerGet;
