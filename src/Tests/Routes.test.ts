import * as request from "supertest";
import App from "../../app";
import IndexRoute from '../Routes/index.route';

let msg = {
  data: "JOHN0000MICHAEL0009994567"
};
const indexRoute = new IndexRoute();
const app = new App();

describe('POST /api/V1/parse', function () {
  it('respond with correct firstName v1 parse', async() => {
      const res = await request(app.getServer())
      .post(`${indexRoute.pathV1}`)
      .send(msg);
      expect(res.body.result.data.firstName).toEqual("JOHN0000");
  });
});

describe('POST /api/V1/parse', function () {
  it('respond with correct lastName v1 parse', async() => {
      const res = await request(app.getServer())
      .post(`${indexRoute.pathV1}`)
      .send(msg);
      expect(res.body.result.data.lastName).toEqual("MICHAEL000");
  });
});

describe('POST /api/V1/parse', function () {
  it('respond with correct clientId v1 parse', async() => {
      const res = await request(app.getServer())
      .post(`${indexRoute.pathV1}`)
      .send(msg);
      expect(res.body.result.data.clientId).toEqual("9994567");
  });
});

describe('POST /api/V2/parse', function () {
  it('respond with correct firstName v2 parse', async() => {
      const res = await request(app.getServer())
      .post(`${indexRoute.pathV2}`)
      .send(msg);
      expect(res.body.result.data.firstName).toEqual("JOHN");
  });
});

describe('POST /api/V2/parse', function () {
  it('respond with correct lastName v2 parse', async() => {
      const res = await request(app.getServer())
      .post(`${indexRoute.pathV2}`)
      .send(msg);
      expect(res.body.result.data.lastName).toEqual("MICHAEL");
  });
});

describe('POST /api/V2/parse', function () {
  it('respond with correct clientId v2 parse', async() => {
      const res = await request(app.getServer())
      .post(`${indexRoute.pathV2}`)
      .send(msg);
      expect(res.body.result.data.clientId).toEqual("999-4567");
  });
});

