import { IService } from "../interfaces/i-service";
import { IUser } from "../interfaces/i-user";

export class MySQLUserService implements IService {
  private users: IUser[] = [
    {
      id: 123,
      firstName: "User",
      middleName: "From",
      lastName: "MySQL",
    },
  ];

  public getUsers = async (): Promise<IUser[]> => {
    console.log("Retrieving user data from: MySQL");
    return this.users;
  };
}
