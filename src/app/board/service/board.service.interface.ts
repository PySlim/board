import {ServiceInterface} from "../../../utils/router/services.interface";
import {NextFunction, Request} from "express";

export interface BoardServiceInterface extends Omit<ServiceInterface,'List' | 'Retrieve'>{
    GetBoardById(req: Request, nex: NextFunction):Promise<any>
}
