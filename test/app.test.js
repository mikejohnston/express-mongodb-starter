const request = require("supertest");

const app = require("../app");

describe("app", () => {
  it("responds with a not found message", (done) => {
    request(app)
      .get("/404-handler")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(404, done);
  });
});
