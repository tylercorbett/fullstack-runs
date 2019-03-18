require('dotenv').config();
const mongoose = require('mongoose');
const seedData = require('./seedData');

const connect = require('../lib/utils/connect');

beforeAll(() => {
  return connect();
});

beforeEach(() => {
  return mongoose.connection.dropDatabase();
});

beforeEach(() => {
  return seedData(5);
});

afterAll(() => {
  return mongoose.connection.close();
});
