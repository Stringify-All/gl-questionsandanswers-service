const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = 9002;
const Product = require('./API/models/product.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('../client/dist'));
const { ready } = require('jquery');
const { ObjectId } = require('mongodb');

// Requests he

const id = mongoose.Types.ObjectId();
mongoose.connect("mongodb://localhost:27017/SDC");


app.get('/qa/:product_id', (req, res) => {
  Product.findById(req.params.product_id)
    .lean()
    .exec()
    .then((dbResponse) => {
      const page = req.body.page === undefined ? 1 : req.body.page;
      const count = req.body.count === undefined ? 5 : req.body.count;
      let nonReportedQ = [];
      let nonReportedA = [];
      for (let i = 0; i < dbResponse.questions.length; i++) {
        if (!dbResponse.questions[i].reported) {
          let answersArray = dbResponse.questions[i].answers
          for (let j = 0; j < answersArray.length; j++) {
            if (!answersArray[j].reported) {
              nonReportedA.push(answersArray[j]);
            }
          }
          let questionsArrayElement = dbResponse.questions[i];
          nonReportedQ.push({
            question_id: questionsArrayElement.question_id,
            question_body: questionsArrayElement.question_body,
            question_date: questionsArrayElement.asker_name,
            asker_name: questionsArrayElement.question_helpfulness,
            question_helpfulness: questionsArrayElement.question_helpfulness,
            reported: questionsArrayElement.reported,
            answers: nonReportedA,
          });
          nonReportedA = [];
        }
      }
      let toSend = {
        product_id: dbResponse._id,
        results: nonReportedQ.splice(page - 1 * count, count),
      };
      res.send(toSend);
    })
    .catch((err) => {
      console.log(err)
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
    .lean()
    .exec()
    .then((dbResponse) => {
      const page = req.body.page === undefined ? 1 : req.body.page;
      const count = req.body.count === undefined ? 5 : req.body.count;
      let nonReported = [];
      for (let i = 0; i < dbResponse.questions.length; i++) {
        if (JSON.stringify(dbResponse.questions[i].question_id) === JSON.stringify(req.params.question_id)) {
          for (let j = 0; j < dbResponse.questions[i].answers.length; j++) {
            if (!dbResponse.questions[i].answers[j].reported) {
              nonReported.push(dbResponse.questions[i].answers[j]);
            }
          }
          let toSend = {
            question: dbResponse.questions[i].question_id,
            page: page - 1,
            count: count,
            results: nonReported.splice(page - 1 * count, count),
          };
          res.send(toSend);
        }
      }
    })
    .catch((err) => {
      console.log(err)
      res.send(
        {
          question: req.params.question_id,
          page: 0,
          count: 5,
          results: [],
        },
      );
    });
});

app.post('/qa/:product_id', (req, res) => {
  Product.findById(req.params.product_id)
    .exec()
    .then((product) => {
      product.questions.push({
        question_id: new ObjectId(),
        question_body: req.body.body,
        asker_name: req.body.name,
        answers: [],
      });
      product.save();
      res.sendStatus(201);
    })
    .catch(() => {
      res.sendStatus(400);
    });
});

app.post('/qa/:question_id/answers', (req, res) => {
  Product.findOne({ 'questions.question_id': req.params.question_id })
    .exec()
    .then((product) => {
      for (let i = 0; i < product.questions.length; i++) {
        if (JSON.stringify(req.params.question_id) === JSON.stringify(product.questions[i].question_id)) {
          const reshapedPhotos = [];
          const photoArray = JSON.parse(req.body.photos.replace(/'/g, '"'));
          for (let j = 0; j < photoArray.length; j++) {
            reshapedPhotos.push({ url: photoArray[j] });
          }
          product.questions[i].answers.push({
            answer_id: new ObjectId(),
            body: req.body.body,
            answerer_name: req.body.name,
            photos: reshapedPhotos,
          });
          product.save();
          res.sendStatus(201);
          return;
        }
      }
      throw new Error('question with id does not exist');
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

app.put('/qa/question/:question_id/helpful', (req, res) => {
  Product.findOne({ 'questions.question_id': req.params.question_id })
    .exec()
    .then((product) => {
      for (let i = 0; i < product.questions.length; i++) {
        if (JSON.stringify(req.params.question_id) === JSON.stringify(product.questions[i].question_id)) {
          product.questions[i].question_helpfulness += 1;
          product.save();
          res.sendStatus(201);
          return;
        }
      }
      throw new Error('question with id does not exist');
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

app.put('/qa/question/:question_id/report', (req, res) => {
  Product.findOne({ 'questions.question_id': req.params.question_id })
    .exec()
    .then((product) => {
      for (let i = 0; i < product.questions.length; i++) {
        if (JSON.stringify(req.params.question_id) === JSON.stringify(product.questions[i].question_id)) {
          product.questions[i].reported += 1;
          product.save();
          res.sendStatus(201);
          return;
        }
      }
      throw new Error('question with id does not exist');
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
})

app.put('/qa/answer/:answer_id/helpful', (req, res) => {
  Product.findOne({ 'questions.answers.id': req.params.answer_id })
    .exec()
    .then((product) => {
      for (let i = 0; i < product.questions.length; i++) {
        for (let j = 0; j < product.questions[i].answers.length; j++) {
          if (JSON.stringify(req.params.answer_id) === JSON.stringify(product.questions[i].answers[j].id)) {
            product.questions[i].answers[j].helpfulness += 1;
            product.save();
            res.sendStatus(201);
            return;
          }
        }
      }
      throw new Error('question with id does not exist');
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

app.put('/qa/answer/:answer_id/report', (req, res) => {
  Product.findOne({ 'questions.answers.id': req.params.answer_id })
    .exec()
    .then((product) => {
      for (let i = 0; i < product.questions.length; i++) {
        for (let j = 0; j < product.questions[i].answers.length; j++) {
          if (JSON.stringify(req.params.answer_id) === JSON.stringify(product.questions[i].answers[j].id)) {
            product.questions[i].answers[j].reported += 1;
            product.save();
            res.sendStatus(201);
            return;
          }
        }
      }
      throw new Error('question with id does not exist');
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

app.listen(PORT, () => {
  console.log(`Hello, Scrumdog.  Your server is running on PORT: ${PORT}`);
});

module.exports = app;
