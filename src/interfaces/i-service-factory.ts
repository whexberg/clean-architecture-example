import { IService } from "./i-service";

export interface IServiceFactory {
  makeSvc: (type: string) => IService;
}
