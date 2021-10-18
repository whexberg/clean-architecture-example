import request from "supertest";

import { Application } from "./application";
import { MongoServiceFactory } from "./implementations/mongodb-service-factory";
import { MySQLServiceFactory } from "./implementations/mysql-service-factory";

describe("Application", () => {
  test("Should return Mongo data when using MongoServiceFactory", async () => {
    const app = new Application(new MongoServiceFactory());
    const res = await request(app.server).get("/");

    expect(res.body).toStrictEqual({
      data: [
        {
          id: 123,
          firstName: "User",
          middleName: "From",
          lastName: "Mongo",
        },
      ],
      ok: true,
    });
  });
  test("Should return MySQL data when using MySQLServiceFactory", async () => {
    const app = new Application(new MySQLServiceFactory());
    const res = await request(app.server).get("/");

    expect(res.body).toStrictEqual({
      data: [
        {
          id: 123,
          firstName: "User",
          middleName: "From",
          lastName: "MySQL",
        },
      ],
      ok: true,
    });
  });
});
