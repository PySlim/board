import {UsersControllerInterface} from "./users.controller.interface";
import {NextFunction, Request, Response} from "express";


class UsersController implements  UsersControllerInterface{
    Create(req: Request, res: Response, next: NextFunction): Promise<void> {
        return ;
    }

    Destroy(req: Request, res: Response, next: NextFunction): Promise<void> {
        return ;
    }

    Retrieve(req: Request, res: Response, next: NextFunction): Promise<void> {
        return ;
    }

    Update(req: Request, res: Response, next: NextFunction): Promise<void> {
        return ;
    }

}

export default  new UsersController()
