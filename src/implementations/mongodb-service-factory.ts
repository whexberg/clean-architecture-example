import { IServiceFactory } from "../interfaces/i-service-factory";
import { IService } from "../interfaces/i-service";
import { MongoUserService } from "./mongodb-user-service";

export class MongoServiceFactory implements IServiceFactory {
  makeSvc = (type: string): IService => {
    if (/user/i.test(type)) {
      return new MongoUserService();
    }
    throw new Error("Invalid service type");
  };
}
