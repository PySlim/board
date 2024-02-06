import {ListControllerInterface} from "./list.controller.interface";
import {undefined} from "zod";
import {NextFunction, Request, Response} from "express";

class ListController implements ListControllerInterface{
    Create(req: Request, res: Response, next: NextFunction): Promise<void> {
        return ;
    }

    Destroy(req: Request, res: Response, next: NextFunction): Promise<void> {
        return ;
    }

    Update(req: Request, res: Response, next: NextFunction): Promise<void> {
        return ;
    }

    GetListByUserId(req: Request, res: Response, next: NextFunction): Promise<any> {
        return ;
    }

}

export default new    ListController()
