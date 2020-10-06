const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 9002;
const getApiData = require('./api-helper.js');
const ServerStyleSheet = require('styled-components');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('/../client/dist'));

// Requests here

app.listen(PORT, () => {
  console.log(`Hello, Scrumdog.  Your server is running on PORT: ${PORT}`);
});