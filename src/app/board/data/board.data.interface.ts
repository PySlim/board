import {DataInterface} from "../../../utils/router/data.interface";
import {NextFunction} from "express";

export interface  BoardDataInterface extends  Omit<DataInterface,'List' | 'Retrieve' >{
    GetBoardById(id: string, next: NextFunction):Promise<any>
    GetBoardByTitleAndUser(title: string, id: string, next: NextFunction):Promise<any>
    GetBoardByUserId(id: string, query: Object ,next: NextFunction):Promise<any>
}
