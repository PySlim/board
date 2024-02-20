import {NextFunction, Request} from "express";
import {CardServiceInterface} from "./card.service.interface";
import {cardInterface, cardInterfaceData} from "../model/card.object.models";
import CardData from "../data/card.data";
import {ThrowErrorHandler} from "../../../utils/error/throw.error";
import ExpressReviewsError from "../../../utils/error/expressReviewError";
import {ConstantsResponse} from "../../../constants/constants";
import ListData from "../../list/data/list.data";
import {listInterfaceData} from "../../list/model/list.object.models";
import BoardData from "../../board/data/board.data";
import {boardInterfaceData} from "../../board/model/board.object.models";

class CardService implements  CardServiceInterface{

    private async CheckProperty(id: string, req: Request, next: NextFunction){
        const listSearch: listInterfaceData = await ListData.GetListById(id, next);
        if(listSearch){
            const boardSearch: boardInterfaceData = await BoardData.GetBoardById(listSearch.board_id.toString(),next)
            if(boardSearch.user_id.toString() !== req.id){
                ThrowErrorHandler(new ExpressReviewsError('The list is not property of current user',
                    ConstantsResponse.FORBIDDEN, 'Validation Error', 'Is not authorized'), next)
                return
            }
        }else{
            ThrowErrorHandler(new ExpressReviewsError('List not found',
                ConstantsResponse.FORBIDDEN, 'Validation Error', 'Data not found'), next)
            return
        }
    }

    private CheckValidateFormatId(id: string, next: NextFunction){

        if (typeof Number(id) !== 'number') {
            ThrowErrorHandler(new ExpressReviewsError('Invalid Id format',
                ConstantsResponse.BAD_REQUEST, 'ValidationError', "The parameter's Id is invalid"), next)
            return
        }
    }

    private CheckContentBodyRequest(req: Request, next: NextFunction){
        if (Object.keys(req.body).length === 0) {
            ThrowErrorHandler(new ExpressReviewsError('Data not found for update',
                ConstantsResponse.BAD_REQUEST, 'ValidationError', "The body request is empty"), next)
            return
        }
    }

    private async CheckParameters(title: string, listId: string, next: NextFunction){
        const cardSearch: cardInterfaceData[] = await CardData.GetCardByTitleAndListId(title,listId.toString() ,next);
        if (cardSearch) {
            ThrowErrorHandler(new ExpressReviewsError('The card title is already in use',
                ConstantsResponse.FORBIDDEN, 'Validation Error', 'CreateServiceCard'), next)
            return
        }
    }
    async Create(req: Request, next: NextFunction): Promise<any> {
        try {
            const body: cardInterface = req.body;
            await this.CheckProperty(body.list_id.toString(),req,next)
            await this.CheckParameters(body.title, body.list_id.toString(), next)
             return await CardData.Create(body, next);
        } catch (error) {
            next(error)
        }
    }

    async Destroy(req: Request, next: NextFunction): Promise<any> {
        try {
            const id: string = req.params['id'];
            await this.CheckValidateFormatId(id, next)
            const cardSearch: cardInterfaceData = await CardData.GetCardById(id,next)
            if (cardSearch) await this.CheckProperty(cardSearch.list_id.toString(),req,next)
            await CardData.Destroy(id, next)
            return {}
        } catch (error) {
            next(error)
        }
    }

    async Update(req: Request, next: NextFunction): Promise<any> {
        try {
            const id: string = req.params['id']
            const body: cardInterface = req.body;
            this.CheckValidateFormatId(id,next)
            await this.CheckContentBodyRequest(req, next)
            await this.CheckParameters(body.title,body.list_id.toString(),next)
            await this.CheckProperty(body.list_id.toString(),req,next)
            return await CardData.Update(id,body, next);
        } catch (error) {
            next(error)
        }
    }

    async GetCardByListId(req: Request, next: NextFunction): Promise<any> {
        try{
            const id: string = req.params['id']
            const query = req.query
            this.CheckValidateFormatId(id, next)
            await this.CheckProperty(id,req,next)
            const { queryResult, dataPagination} =  await CardData.GetCardByListId(id,query, next)
            req.pagination_result = dataPagination
            return queryResult
        }catch(error){
            next(error)
        }
    }

}

export default  new CardService()
