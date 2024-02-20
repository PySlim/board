import {BoardDataInterface} from "./board.data.interface";
import MainQuery from "../../../utils/database/query/main.query.class";
import {NextFunction} from "express";
import ExpressReviewsError from "../../../utils/error/expressReviewError";
import {ConstantsResponse} from "../../../constants/constants";

class BoardData implements  BoardDataInterface{
    dataSet: MainQuery = new MainQuery('BOARD');
    async Create(data: Object, next: NextFunction): Promise<any> {
        try {
            return await this.dataSet.insert.exec(data);
        } catch (error) {
            if (error instanceof ExpressReviewsError) next(error)
            next(new ExpressReviewsError("Failed to create board .",
                    ConstantsResponse.INTERNAL_SERVER_ERROR, "DataError", "Data.create", error));
        }
    }
    async Destroy(id: string, next: NextFunction): Promise<any> {
        try {
            return await this.dataSet.update.exec(id,{status:false});
        } catch (error) {
            if (error instanceof ExpressReviewsError) next(error)
            next(new ExpressReviewsError("Failed to  delete board.",
                    ConstantsResponse.INTERNAL_SERVER_ERROR, "DataError", "Data.update", error));
        }
    }
    async Update(id: string, data: Object, next: NextFunction): Promise<any> {
        try {
            return await this.dataSet.update.exec(id,data);
        } catch (error) {
            if (error instanceof ExpressReviewsError) next(error)
            next(new ExpressReviewsError("Failed to update the board.",
                    ConstantsResponse.INTERNAL_SERVER_ERROR, "DataError", "Data.update", error));
        }
    }
    async GetBoardById(id: string, next: NextFunction): Promise<any> {
        try {
            const result = await this.dataSet.selectWh.exec('*',{id: id});
            return result[0]
        } catch (error) {
            if (error instanceof ExpressReviewsError) next(error)
            next(new ExpressReviewsError("Failed to get board by id.",
                    ConstantsResponse.INTERNAL_SERVER_ERROR, "DataError", "Data.GetBoarById", error));
        }
    }
    async GetBoardByTitleAndUser(title: string,id: string, next: NextFunction): Promise<any> {
        try {
            const result = await this.dataSet.selectWh.exec('*',{title:title, user_id:id});
            return  result[0]
        } catch (error) {
            if (error instanceof ExpressReviewsError) next(error)
            next(new ExpressReviewsError("Failed to get board by title.",
                    ConstantsResponse.INTERNAL_SERVER_ERROR, "DataError", "Data.GetBoarByTitle", error));
        }
    }
    async GetBoardByUserId(id: string, query: Object ,next: NextFunction): Promise<any> {
        try {
            const result = await this.dataSet.pagination.exec('*',query,["title", "created", "id"],'/board')
            console.log(result)
            return result
        } catch (error) {
            if (error instanceof ExpressReviewsError) next(error)
            next(new ExpressReviewsError("Failed to get board by user id.",
                    ConstantsResponse.INTERNAL_SERVER_ERROR, "DataError", "Data.GetBoardByUserId", error));
        }
    }

}

export default new BoardData()
