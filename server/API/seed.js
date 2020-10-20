const mongoose = require('mongoose');
const faker = require('faker');
const fs = require('fs');
const productQuestion = require('./models/product.js');
const { ObjectId } = require('mongodb');
let start;

const writeProducts = fs.createWriteStream('products.json');

const getRandomInt = (max) => Math.floor(Math.random() * (max));

function writeNumberOfProducts(writer, encoding, number, callback) {
  start = new Date().getTime();
  let i = number;
  function write() {
    let ok = true;
    do {
      if (((i / number) * 100) % 10 === 0) {
        console.log(`${i / number * 100}% remaining`)
      }
      i -= 1;
      let numA = getRandomInt(5);
      let numQ = getRandomInt(5);
      let numPhotos = getRandomInt(3);

      let photos = [];
      for (let photoNumber = 0; photoNumber < numPhotos; photoNumber++) {
        photos.push({
          url: faker.image.imageUrl(),
        });
      }

      let answers = [];
      for (let answerNumber = 0; answerNumber < numA; answerNumber++) {
        answers.push({
          id: {$oid: ObjectId()},
          body: faker.lorem.words(15),
          date: faker.date.past(),
          answerer_name: faker.internet.userName(),
          helpfulness: faker.random.number({max: 50}),
          reported: (i % 10 === 0 && answerNumber % 3 === 0) ? 1 : 0,
          photos: photos
        });
      }

      let questions = [];
      for (let questionNumber = 0; questionNumber < numQ; questionNumber++) {
        questions.push({
          question_id: { $oid: ObjectId() },
          question_body: faker.lorem.words(15),
          question_date: faker.date.past(),
          asker_name: faker.internet.userName(),
          question_helpfulness: faker.random.number({ max: 50 }),
          reported: (i % 10 === 0 && questionNumber % 3 === 0) ? 1 : 0,
          answers: answers
        });
      }

      let product = {
        questions: questions
      };

      if (i === 0) {
        writer.write(JSON.stringify(product) + '\n', encoding, callback);
      } else {
        ok = writer.write(JSON.stringify(product) + '\n', encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

writeNumberOfProducts(writeProducts, 'utf-8', 10000000, () => {
  writeProducts.end();
  const stop = new Date().getTime();
  console.log(`Seeding took ${stop - start} milliseconds`);
});
