const axios = require('axios');

const url = 'http://52.26.193.201:3000/';

// Questions Get Requests
let getProductId = (product_id, cb) => {
  let options = {
    url: url + '/qa/:product_id', // remember to add endpoint
  };
};

let getPage = (page, cb) => {
  let options = {
    url: url + '/qa/:page', // remember to add endpoint
  };
};

let getCount = (count, cb) => {
  let options = {
    url: url + '/qa/:count', // remember to add endpoint
  };
};


axios.get(options, (err, res, body) => {
  if (err) {
    console.log('API request error: ', err)
  } else {
    console.log('API request received.')
    cb(body);
  }
});



module.exports = {
  getProductId,
  getPage,
  getCount,


};