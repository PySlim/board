import {NextFunction, Request} from "express";
import {ListServiceInterface} from "./list.service.interface";
import {listInterface, listInterfaceData} from "../model/list.object.models";
import ListData from "../data/list.data";
import {ThrowErrorHandler} from "../../../utils/error/throw.error";
import ExpressReviewsError from "../../../utils/error/expressReviewError";
import {ConstantsResponse} from "../../../constants/constants";
import BoardData from "../../board/data/board.data";
import { boardInterfaceData} from "../../board/model/board.object.models";

class ListService implements  ListServiceInterface{

    private async PropertyChecker(id: string, req: Request ,next : NextFunction){
        const listSearch: listInterfaceData = await ListData.GetListById(id,next)
        console.log(listSearch)
        if(listSearch) {
            const boardSearch: boardInterfaceData = await BoardData.GetBoardById(listSearch.board_id.toString(), next)
            if(boardSearch.user_id.toString() !== req.id){
                ThrowErrorHandler(new ExpressReviewsError('You are not authorized to perform this action',
                    ConstantsResponse.BAD_REQUEST, 'ValidationError', "The list does not belong to the current user."), next)
                return
            }
        }else{
            ThrowErrorHandler(new ExpressReviewsError('List not found',
                ConstantsResponse.BAD_REQUEST, 'ValidationError', "List not found."), next)
            return
        }
    }
    async Create(req: Request, next: NextFunction): Promise<any> {
        try {
            const body: listInterface = req.body;
            const boardSearch: boardInterfaceData = await BoardData.GetBoardById(body.board_id.toString(), next);
            if(boardSearch.user_id.toString() !== req.id){
                ThrowErrorHandler(new ExpressReviewsError('The board does not belong to the current user',
                    ConstantsResponse.FORBIDDEN, 'Validation Error', 'CreateService'), next)
                return
            }
            const listSearch: listInterfaceData[] = await ListData.GetListByTitleAndUserId(body.title, boardSearch.id.toString(),next);
            if (listSearch) {
                ThrowErrorHandler(new ExpressReviewsError('The list title1 is already in use',
                ConstantsResponse.FORBIDDEN, 'Validation Error', 'CreateService'), next)
                return
             }
             return await ListData.Create(body, next);
        } catch (error) {
            next(error)
        }
    }

    async Destroy(req: Request, next: NextFunction): Promise<any> {
        try {
            const id: string = req.params['id'];
            if (typeof Number(id) !== 'number' ) {
                ThrowErrorHandler(new ExpressReviewsError('Invalid Id format,',
                    ConstantsResponse.BAD_REQUEST, 'ValidationError', "The parameter's Id is invalid "), next)
                return
            }
             await this.PropertyChecker(id,req,next)
            return await ListData.Update(id, req.body, next)
        } catch (error) {
            next(error)
        }
    }

    async Update(req: Request, next: NextFunction): Promise<any> {
        try {
            const id: string = req.params['id'];
            if (typeof Number(id) !== 'number' || Object.keys(req.body).length === 0) {
                ThrowErrorHandler(new ExpressReviewsError('Invalid Id format or not data found',
                    ConstantsResponse.BAD_REQUEST, 'ValidationError', "The parameter's Id is invalid or not data found"), next)
                return
            }
            await this.PropertyChecker(id,req, next)
            return await ListData.Update(id, req.body, next)
        } catch (error) {
            next(error)
        }
    }

    async GetListByBoardId(req: Request, next: NextFunction): Promise<any> {
       try {
           const id: string = req.params['id'];
           const query : object = req.query
           if (typeof Number(id) !== 'number' ) {
               ThrowErrorHandler(new ExpressReviewsError('Invalid Id format ',
                   ConstantsResponse.BAD_REQUEST, 'ValidationError', "The parameter's Id is invalid "), next)
               return
           }
           const searchBoard: boardInterfaceData = await BoardData.GetBoardById(id,next)
           if(searchBoard){
               if(searchBoard.user_id.toString() !== req.id){
                   ThrowErrorHandler(new ExpressReviewsError('Board is not property of current user',
                       ConstantsResponse.BAD_REQUEST, 'ValidationError', "The parameter's Id is invalid "), next)
                   return
               }
           }else{
               ThrowErrorHandler(new ExpressReviewsError('Board not found.',
                   ConstantsResponse.BAD_REQUEST, 'ValidationError', "Id is invalid for get board"), next)
               return
           }

           return await ListData.GetListByBoardId(id, query, next)
       } catch (error) {
           next(error)
       }
    }

}

export default new   ListService()
