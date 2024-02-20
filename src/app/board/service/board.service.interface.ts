import {ServiceInterface} from "../../../utils/router/services.interface";
import {NextFunction, Request} from "express";

export interface BoardServiceInterface extends Omit<ServiceInterface,'List' >{
    GetBoardByUserId(req: Request, next:NextFunction):Promise<any>
}
