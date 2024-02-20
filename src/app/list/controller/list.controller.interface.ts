import {ControllerInterface} from "../../../utils/router/controllers.interface";
import {NextFunction, Request, Response} from "express";

export interface ListControllerInterface extends  Omit<ControllerInterface, 'List' | 'Retrieve'>{
    GetListByBoardId(req: Request, res: Response, next: NextFunction):Promise<any>
}
