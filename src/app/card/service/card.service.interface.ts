import {ServiceInterface} from "../../../utils/router/services.interface";
import {NextFunction, Request} from "express";

export interface CardServiceInterface extends  Omit<ServiceInterface,'List'|'Retrieve'>{
    GetCardByUserId(req: Request, next: NextFunction):Promise<any>
}
