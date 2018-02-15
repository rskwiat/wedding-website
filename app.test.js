/* eslint-disable */

const request = require('supertest');
const app = require('./app')

describe('Test the location path', () => {

  test('It should response the GET method', async () => {
    const response = await request(app).get('/api/location');    
    expect(response.statusCode).toBe(200);
  });

  test('The body object should return an object', async () => {
    const response = await request(app).get('/api/location');
    expect(response.body.venue).toBe('Buttermilk Falls Inn')
    expect(response.body.date).toBe('October 27, 2018')
    expect(response.body.city).toBe('Milton NY')
  });

});
