import {DataInterface} from "../../../utils/router/data.interface";
import {NextFunction} from "express";

export interface  BoardDataInterface extends  Omit<DataInterface,'List' | 'Retrieve' >{
    GetBoardById(id: string, next: NextFunction):Promise<any>
}
