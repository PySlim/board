import {UsersServiceInterface} from "./users.service.interface";
import {NextFunction, Request} from "express";

class UsersService implements UsersServiceInterface{

    Create(req: Request, next: NextFunction): Promise<any> {
        return ;
    }

    Destroy(req: Request, next: NextFunction): Promise<any> {
        return ;
    }

    Retrieve(req: Request, next: NextFunction): Promise<any> {
        return ;
    }

    Update(req: Request, next: NextFunction): Promise<any> {
        return ;
    }

}

export default  new UsersService()
