import {DataInterface} from "../../../utils/router/data.interface";
import {NextFunction} from "express";

export interface ListDataInterface extends  Omit<DataInterface, 'List'|'Retrieve'>{
    GetListByBoardId(id: string, params: Object , next: NextFunction):Promise<any>
    GetListByTitleAndUserId(title: string, boardId: string, next: NextFunction):Promise<any>
    GetListById(id: string, next: NextFunction)
}
