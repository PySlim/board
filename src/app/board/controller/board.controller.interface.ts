import {ControllerInterface} from "../../../utils/router/controllers.interface";
import {NextFunction, Request, Response} from "express";

export interface  BoardControllerInterface extends  Omit<ControllerInterface, 'List' | 'Retrieve'>{
    GetBoardByUser(req: Request, res: Response, next: NextFunction):Promise<any>
}
