import {ServiceInterface} from "../../../utils/router/services.interface";
import {NextFunction, Request} from "express";

export interface  ListServiceInterface extends Omit<ServiceInterface,'List' | 'Retrieve'>{
    GetListByBoardId(req: Request, next: NextFunction):Promise<any>

}

