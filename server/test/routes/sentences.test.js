const app = require('../../lib/app');
const request = require('supertest');

describe('sentences routes', () => {
  it('gets a list of notes', () => {
    return request(app)
      .get('/sentences')
      .then(res => {
        expect(res.ok).toBeTruthy();
      });
  });
});

