const { Router } = require('express');
const Sentence = require('../models/Sentence');

module.exports = Router()
  .get('/', (req, res, next) => {
    Sentence
      .find()
      .lean()
      .then(sentence => res.send(sentence))
      .catch(next);
  });

