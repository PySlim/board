import {ServiceInterface} from "../../../utils/router/services.interface";
import {NextFunction, Request} from "express";

export interface  UsersServiceInterface extends Omit<ServiceInterface,'List'>{
    Sign(req: Request, next: NextFunction):Promise<any>
}


