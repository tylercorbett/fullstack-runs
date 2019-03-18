const Chance = require('chance');
const Sentence = require('../lib/models/Sentence');
const chance = new Chance();

module.exports = function(count = 100) {
  const sentences = [...Array(count)].map(() => ({
    body: chance.sentence()
  }));

  return Sentence.create(sentences);
};
