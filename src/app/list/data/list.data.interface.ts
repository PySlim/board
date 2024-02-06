import {DataInterface} from "../../../utils/router/data.interface";
import {NextFunction} from "express";

export interface ListDataInterface extends  Omit<DataInterface, 'List'|'Retrieve'>{
    GeLitByUserId(id: string, next: NextFunction):Promise<any>
}
