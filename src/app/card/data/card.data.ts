import {CardDataInterface} from "./card.data.interface";
import MainQuery from "../../../utils/database/query/main.query.class";
import {NextFunction} from "express";
import ExpressReviewsError from "../../../utils/error/expressReviewError";
import {ConstantsResponse} from "../../../constants/constants";
import {cardFieldsValid} from "../model/card.object.models";

class CardData implements  CardDataInterface{
    dataSet: MainQuery = new MainQuery('CARD');
    async Create(data: Object, next: NextFunction): Promise<any> {
        try {
            return await this.dataSet.insert.exec(data);
        } catch (error) {
            if (error instanceof ExpressReviewsError) next(error)
            next(new ExpressReviewsError("Failed to create card .",
                    ConstantsResponse.INTERNAL_SERVER_ERROR, "DataError", "Data.create", error));
        }
    }

    async Destroy(id: string, next: NextFunction): Promise<any> {
        try {
            await this.dataSet.update.exec(id,{status: false});
        } catch (error) {
            if (error instanceof ExpressReviewsError) next(error)
            next(new ExpressReviewsError("Failed to delete card.",
                    ConstantsResponse.INTERNAL_SERVER_ERROR, "DataError", "Data.destroy", error));
        }
    }

    async Update(id: string, data: Object, next: NextFunction): Promise<any> {
        try {
            return await this.dataSet.update.exec(id, data);
        } catch (error) {
            if (error instanceof ExpressReviewsError) next(error)
            next(new ExpressReviewsError("Failed to update card.",
                    ConstantsResponse.INTERNAL_SERVER_ERROR, "DataError", "Data.update", error));
        }
    }

    async GetCardByListId(id: string,  query : Object,next: NextFunction): Promise<any> {
        try {
            return await this.dataSet.pagination.exec('*',query,cardFieldsValid,`/card/list/${id}`);
        } catch (error) {
            if (error instanceof ExpressReviewsError) next(error)
            next(new ExpressReviewsError("Failed to  get Card by list.",
                    ConstantsResponse.INTERNAL_SERVER_ERROR, "DataError", "Data.GetCardByList", error));
        }
    }

    async GetCardByTitleAndListId(title: string, listId: string, next: NextFunction): Promise<any> {
        try {
            const result = await this.dataSet.selectWh.exec('*',{title: title, list_id:listId});
            return result[0]
        } catch (error) {
            if (error instanceof ExpressReviewsError) next(error)
            next(new ExpressReviewsError("Failed to get card by title and list",
                    ConstantsResponse.INTERNAL_SERVER_ERROR, "DataError", "Data.GetCardByTitleList", error));
        }
    }

    async GetCardById(id: string, next: NextFunction): Promise<any> {
        try {
            const result = await this.dataSet.selectWh.exec('*', {id: id});
            return result[0]
        } catch (error) {
            if (error instanceof ExpressReviewsError) next(error)
            next(new ExpressReviewsError("Failed to get Card by Id",
                    ConstantsResponse.INTERNAL_SERVER_ERROR, "DataError", "Data.create", error));
        }
    }

}

export default  new CardData()
