const request = require("supertest");
const app = require("../server/app");

describe("The http server responds fast to user requests regarding the load", () => {
  it("responds with json", function (done) {
    request(app)
      .get("/?n=40")
      .set("Accept", "application/json")
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        const resposeTime = parseFloat(res.headers["x-response-time"]);
        expect(resposeTime).toBeLessThan(1000);
        return done();
      });
  });
  it("responds with json", function (done) {
    request(app)
      .get("/?n=40")
      .set("Accept", "application/json")
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        const resposeTime = parseFloat(res.headers["x-response-time"]);
        expect(res.body).toEqual({ status: "task-started" });
        return done();
      });
  });
});
