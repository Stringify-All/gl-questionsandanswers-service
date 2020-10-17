var mongoose = require ('mongoose');
var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;


const productSchema = new Schema (
  {
    questions: [
      {
        question_id: ObjectId,
        _id: false,
        question_body: String,
        question_date: {
          type: Date,
          default: Date.now,
        },
        asker_name: String,
        question_helpfulness: Number,
        reported: Number,
        answers: [
          {
            id: ObjectId,
            _id: false,
            body: String,
            date: {
              type: Date,
              default: Date.now,
            },
            answerer_name: String,
            helpfulness: Number,
            reported: Number,
            photos: [
              {
                _id: false,
                url: String,
              },
            ],
          },
        ],
      },
    ],
  },
);

module.exports = mongoose.model('Product', productSchema);
