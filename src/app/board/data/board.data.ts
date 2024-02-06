import {BoardDataInterface} from "./board.data.interface";
import {undefined} from "zod";
import MainQuery from "../../../utils/database/query/main.query.class";
import {NextFunction} from "express";

class BoardData implements  BoardDataInterface{
    Create(data: Object, next: NextFunction): Promise<any> {
        return ;
    }

    Destroy(id: string, next: NextFunction): Promise<any> {
        return ;
    }

    Update(id: string, data: Object, next: NextFunction): Promise<any> {
        return ;
    }

    dataSet: MainQuery;

    GetBoardById(id: string, next: NextFunction): Promise<any> {
        return ;
    }

}

export default new BoardData()
