import { IService } from "./i-service";
import { IUser } from "./i-user";

export interface IUserService extends IService {
  getUsers: () => Promise<IUser[]>;
}
