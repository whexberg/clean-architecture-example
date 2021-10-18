require("dotenv").config();

import { Server as HttpServer } from "http";
import { Application } from "./src/application";
import { MySQLServiceFactory } from "./src/implementations/mysql-service-factory";
import { MongoServiceFactory } from "./src/implementations/mongodb-service-factory";

/**
 * The contrived example below is meant to replicate what inversify does for us.
 */
const DITypes = { svcFactory: "SERVICE_FACTORY" };
const DependencyContainer = {
  get: (dep: string) => {
    if (dep === DITypes.svcFactory) {
      if (process.env.DB === "mongo") {
        return new MongoServiceFactory();
      } else {
        return new MySQLServiceFactory();
      }
    } else {
      throw new Error("Invalid dependency");
    }
  },
};
const svcFactory = DependencyContainer.get(DITypes.svcFactory);

/**
 * After getting the dependencies needed by the Application class, pass them to
 * the constructor so that Application doesn't need to instantiate it's
 * dependencies which result in the Application class having direct dependencies
 * on the implementations.
 */
const app = new Application(svcFactory);
export const server: HttpServer = app.server as unknown as HttpServer;
if (!module.parent) {
  app.start();
}
