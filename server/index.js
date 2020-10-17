const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = 9002;
const Product = require('./API/models/product.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('../client/dist'));
const faker = require('faker')

// Requests he

const id = mongoose.Types.ObjectId();
console.log('this is the id', id)
mongoose.connect("mongodb://localhost:27017/SDC");

app.get('/qa/:product_id', (req, res) => {
  Product.findById(req.params.product_id)
    .exec()
    .then((dbResponse) => {
      res.status = 200;
      let toSend = {
        product_id: dbResponse._id,
        results: dbResponse.questions,
      };
      res.send(toSend);
    })
    .catch(() => {
      res.send(
        {
          product_id: req.params.product_id,
          results: []
        }
      )
    });
});

app.get('/qa/:question_id/answers', (req, res) => {
  res.send(`this is the answer list route: ${req.params.product_id}`);
});

app.post('/qa/:product_id', (req, res) => {
  res.send(`you have reached the post route for questions.  this is the body: ${req.body.things}`)
})

app.post('/qa/:question_id/answers', (req, res) => {
  res.send(`you have reached the post route for answers.  this is the body: ${req.body.things}`)
})

app.put('/qa/question/:question_id/helpful', (req, res) => {
  res.send(`you have reached the helpful route for questions.`)
})

app.put('/qa/question/:question_id/report', (req, res) => {
  res.send(`you have reached the report route for questions`)
})

app.put('/qa/answer/:answer_id/helpful', (req, res) => {
  res.send(`you have reached the helpful route for answers`)
})

app.put('/qa/answer/:answer_id/report', (req, res) => {
  res.send(`you have reached the report route for answers`)
})

app.listen(PORT, () => {
  console.log(`Hello, Scrumdog.  Your server is running on PORT: ${PORT}`);
});

module.exports = app;
