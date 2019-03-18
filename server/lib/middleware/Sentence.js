const mongoose = require('mongoose');

const sentenceSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 500
  }
});

module.exports = mongoose.model('Sentence', sentenceSchema);
