const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = 9002;
const Product = require('./API/models/product.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('../client/dist'));
const faker = require('faker');
const { ready } = require('jquery');

// Requests he

const id = mongoose.Types.ObjectId();
mongoose.connect("mongodb://localhost:27017/SDC");


app.get('/qa/:product_id', (req, res) => {
  Product.findById(req.params.product_id)
    .exec()
    .then((dbResponse) => {
      const page = req.body.page === undefined ? 1 : req.body.page
      const count = req.body.count === undefined ? 5 : req.body.count
      let toSend = {
        product_id: dbResponse._id,
        results: dbResponse.questions.splice(page - 1 * count, count),
      };
      res.send(toSend);
    })
    .catch(() => {
      res.send(
        {
          product_id: req.params.product_id,
          results: [],
        },
      );
    });
});

app.get('/qa/:question_id/answers', (req, res) => {
  Product.findOne({ 'questions.question_id': req.params.question_id })
    .exec()
    .then((dbResponse) => {
      const page = req.body.page === undefined ? 1 : req.body.page
      const count = req.body.count === undefined ? 5 : req.body.count

      for (let i = 0; i < dbResponse.questions.length; i++) {
        if (dbResponse.questions[i].question_id === req.params.question_id) {
          let toSend = {
            question: dbResponse.questions[i].question_id,
            page: page - 1,
            count: count,
            results: dbResponse.questions[i].answers.splice(page - 1 * count, count),
          };
          res.send(toSend);
        }
      }
    })
    .catch(() => {
      res.send(
        {
          question: req.params.question_id,
          page: 0,
          count: 5,
          results: []
        },
      );
    });
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
