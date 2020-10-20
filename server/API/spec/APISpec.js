const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;
const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Product = require('../models/product.js')
const app = require('../../index.js');
const { enable } = require('../../index.js');

chai.use(chaiHttp);
let testProduct;

describe('API test', function() {
  beforeEach(function(done) {
    mongoose.connect("mongodb://localhost:27017/SDC");
    Product.findOne({'questions.answers.photos': {$exists: true, $ne: []}})
      .exec()
      .then((response) => testProduct = response)
      .then(() => done())
  });
  it("should receive first product's quesitons when a get request is made to the questions route", function(done) {
    chai.request(app)
      .get(`/qa/${testProduct._id}`)
      .end((err, res) => {
        if(err) {
          console.log(err)
          done()
        }
        let expected = JSON.stringify({
          "product_id": testProduct._id,
          "results": testProduct.questions
        })
        expect(res.text).to.equal(expected)
        done();
      })
  })
  it("should return a response with an empty results array get request is made to the questions route with a wrong id", function(done) {
    chai.request(app)
      .get('/qa/1')
      .then((res) => {
        let expected = JSON.stringify({
          "product_id": "1",
          "results": []
        })
        
        expect(res.text).to.equal(expected)
      })
      .then(done, done)
  })
  it("should return the correct list of answers for an answers request", function(done) {
    chai.request(app)
      .get(`/qa/${testProduct.questions[0].question_id}/answers`)
      .then((res) => {
        let expected = JSON.stringify({
          question: testProduct.questions[0].question_id,
          page: 0,
          count: 5,
          results: testProduct.questions[0].answers
        })
        expect(res.text).to.equal(expected)
        done()
      })
  })
  it("should return a response with an empty results array get request is made to the questions route with a wrong id", function(done) {
    chai.request(app)
      .get('/qa/1/answers')
      .then((res) => {
        let expected = JSON.stringify({
          "question": "1",
          "page": 0,
          "count": 5,
          "results": []
        })
        expect(res.text).to.equal(expected)
      })
      .then(done, done)
  })
  it("should post a new question to the database", (done) => {
    let questionbody = JSON.stringify(ObjectId())
    chai.request(app)
      .post(`/qa/${testProduct._id}`)
      .send({
        body: questionbody,
        name: "stuff",
        email: "things.com"
      })
      .then((res => {
        expect(res).to.have.status(201)
      }))
      .then(() => {
        Product.findOne({"questions.question_body" : questionbody})
          .exec()
          .then((dbResponse) => {
            console.log('dbresponse', dbResponse)
            expect(dbResponse.questions.length).to.equal(testProduct.questions.length + 1)
            done()
          })
      })
  })
})