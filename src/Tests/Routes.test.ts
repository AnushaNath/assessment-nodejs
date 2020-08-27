/*const routes = require("../Routes/Routes");

const request = require("supertest");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
//app.use("/api/v1/parse", express.Router());

/*test("index route works", done => {
  request(app)
    .get("/")
    .expect("Content-Type", /json/)
    .expect({ name: "frodo" })
    .expect(200, done);
});*/

/*test("testing route works", done => {
  request(app)
    .post("/api/v1/parse")
    .type("JSON")
    .send({ data: "JOHN0000MICHAEL0009994567" })
    .then(() => {
      expect({ array: [
          "JOHN",
          "MICHAEL",
          "999-4567"
      ] });
    });
});
*/

import * as request from 'supertest';
import App = require('../../app');
import IndexRoute from '../Routes/index.route';

afterAll(async () => {
  await new Promise(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Index', () => {
  describe('[GET] /', () => {
    it('response statusCode 200', () => {
      const indexRoute = new IndexRoute();
      const app = new App([indexRoute]);

      return request(app.getServer())
      .get(`${indexRoute.path}`)
      .expect(200);
    });
  });
});
