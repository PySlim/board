import {ControllerInterface} from "../../../utils/router/controllers.interface";
import {NextFunction, Request, Response} from "express";

export interface CardControllerInterface extends Omit<ControllerInterface,'List' | 'Retrieve'>{
    GetCardByUserId(req: Request, res: Response, next: NextFunction):Promise<any>
}
