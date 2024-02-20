import {DataInterface} from "../../../utils/router/data.interface";
import {NextFunction} from "express";

export interface CardDataInterface extends Omit<DataInterface, 'List'| 'Retrieve'>{
    GetCardByListId(id: string, query: Object, next: NextFunction):Promise<any>
    GetCardByTitleAndListId(title: string, listId: string, next: NextFunction):Promise<any>
    GetCardById(id:string, next:NextFunction):Promise<any>
}
