import {ServiceInterface} from "../../../utils/router/services.interface";
import {NextFunction, Request} from "express";

export interface  ListServiceInterface extends Omit<ServiceInterface,'List' | 'Retrieve'>{
    GetListByUserid(re: Request, next: NextFunction):Promise<any>
}

