import {NextFunction, Request} from "express";
import {ListServiceInterface} from "./list.service.interface";

class ListService implements  ListServiceInterface{
    Create(req: Request, next: NextFunction): Promise<any> {
        return ;
    }

    Destroy(req: Request, next: NextFunction): Promise<any> {
        return ;
    }

    Update(req: Request, next: NextFunction): Promise<any> {
        return ;
    }

    GetListByUserid(re: Request, next: NextFunction): Promise<any> {
        return ;
    }

}

export default new   ListService()
