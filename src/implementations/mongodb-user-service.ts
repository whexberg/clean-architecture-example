import { IService } from "../interfaces/i-service";
import { IUser } from "../interfaces/i-user";

export class MongoUserService implements IService {
  private users: IUser[] = [
    {
      id: 123,
      firstName: "User",
      middleName: "From",
      lastName: "Mongo",
    },
  ];

  public getUsers = async (): Promise<IUser[]> => {
    console.log("Retrieving user data from: Mongo");
    return this.users;
  };
}
