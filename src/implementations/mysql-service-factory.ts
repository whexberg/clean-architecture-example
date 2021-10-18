import { IServiceFactory } from "../interfaces/i-service-factory";
import { IService } from "../interfaces/i-service";
import { MySQLUserService } from "./mysql-user-service";

export class MySQLServiceFactory implements IServiceFactory {
  makeSvc = (type: string): IService => {
    if (/user/i.test(type)) {
      return new MySQLUserService();
    }
    throw new Error("Invalid service type");
  };
}
