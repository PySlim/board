import {ServiceInterface} from "../../../utils/router/services.interface";
import {NextFunction, Request} from "express";

export interface CardServiceInterface extends  Omit<ServiceInterface,'List'|'Retrieve'>{
    GetCardByListId(req: Request, next: NextFunction):Promise<any>
}
