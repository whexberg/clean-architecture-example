import express, {
  Application as ExpressApplication,
  Request,
  Response,
} from "express";

import { IUserService } from "./interfaces/i-user-service";
import { IServiceFactory } from "./interfaces/i-service-factory";

/**
 * Creates the server instance and starts the server on the specified port.
 *
 * NOTE: Application does not have direct dependencies on any concrete
 * implementations, rather it has references to interfaces(contracts) only. This
 * allows dependencies to be swapped out. For example, the Users Service can be
 * updated to use a different database, without affecting the rest of the
 * application. This means that, if setup properly, a switch from MySQL, or
 * some other service that we depend on, can be swapped out at a moment's notice
 * with minimal effort from the developers.
 */
export class Application {
  public server: ExpressApplication;

  private userSvc: IUserService;

  constructor(svcFactory: IServiceFactory) {
    this.userSvc = svcFactory.makeSvc("user") as IUserService;
    this.server = express();
    this.initRoutes();
  }

  initRoutes = () => {
    this.server.get("/", async (req: Request, res: Response) => {
      const users = await this.userSvc.getUsers();
      res.send({ ok: true, data: users });
    });
  };

  start = () => {
    const port = 3000;
    this.server.listen(port, () =>
      console.log(`Listening at http://localhost:${port}`)
    );
  };
}
