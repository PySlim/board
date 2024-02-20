import {ListDataInterface} from "./list.data.interface";
import MainQuery from "../../../utils/database/query/main.query.class";
import {NextFunction} from "express";
import ExpressReviewsError from "../../../utils/error/expressReviewError";
import {ConstantsResponse} from "../../../constants/constants";
import {listFieldsValid} from "../model/list.object.models";


class ListData implements ListDataInterface{
    dataSet: MainQuery = new MainQuery('LIST');

    async Create(data: Object, next: NextFunction): Promise<any> {
        try {
            return await this.dataSet.insert.exec(data);
        } catch (error) {
            if (error instanceof ExpressReviewsError) next(error)
            next(new ExpressReviewsError("Failed to create list .",
                    ConstantsResponse.INTERNAL_SERVER_ERROR, "DataError", "Data.create", error));
        }
    }
    async Destroy(id: string, next: NextFunction): Promise<any> {
        try {
            const result = await this.dataSet.selectWh.exec('*',{id:id, status:false});
            return result[0]
        } catch (error) {
            if (error instanceof ExpressReviewsError) next(error)
            next(new ExpressReviewsError("Failed to destroy list.",
                    ConstantsResponse.INTERNAL_SERVER_ERROR, "DataError", "Data.Destroy", error));
        }
    }
    async Update(id: string, data: Object, next: NextFunction): Promise<any> {
        try {
            return await this.dataSet.update.exec(id,data);
        } catch (error) {
            if (error instanceof ExpressReviewsError) next(error)
            next(new ExpressReviewsError("Failed to update list .",
                    ConstantsResponse.INTERNAL_SERVER_ERROR, "DataError", "Data.Update", error));
        }
    }

    async GetListByBoardId(id: string, params: Object, next: NextFunction): Promise<any> {
        try {
            const {queryResult } = await this.dataSet.pagination.exec('*', params,listFieldsValid,'/list')
            return queryResult
        } catch (error) {
            if (error instanceof ExpressReviewsError) next(error)
            next(new ExpressReviewsError("Failed to retrieve the board list.",
                    ConstantsResponse.INTERNAL_SERVER_ERROR, "DataError", "Data.GetListByBoard", error));
        }
    }
    async GetListByTitleAndUserId(title: string, boardId: string, next: NextFunction): Promise<any> {
        try {
            const result = await this.dataSet.selectWh.exec('*', {title:title, board_id: boardId});
            return result[0]
        } catch (error) {
            if (error instanceof ExpressReviewsError) next(error)
            next(new ExpressReviewsError("Failed to get list by title and board.",
                    ConstantsResponse.INTERNAL_SERVER_ERROR, "DataError", "Data.GetListByTitleAndUserId", error));
        }
    }

    async GetListById(id: string, next: NextFunction) {
    try {
        const result  = await this.dataSet.selectWh.exec('*',{id:id})
        return result[0]
    } catch (error) {
        if (error instanceof ExpressReviewsError) next(error)
        next(new ExpressReviewsError("Failed to list.",
                ConstantsResponse.INTERNAL_SERVER_ERROR, "DataError", "Data.GetListById", error));
    }
    }

}

export default new  ListData()
