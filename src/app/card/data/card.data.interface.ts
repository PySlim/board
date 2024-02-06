import {DataInterface} from "../../../utils/router/data.interface";
import {NextFunction} from "express";

export interface CardDataInterface extends Omit<DataInterface, 'List'| 'Retrieve'>{
    GetCardByUserId(id: string, next: NextFunction):Promise<any>
}
