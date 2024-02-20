import {BoardServiceInterface} from "./board.service.interface";
import {NextFunction, Request} from "express";
import {boardInterface, boardInterfaceData} from "../model/board.object.models";
import BoardData from "../data/board.data";
import {ThrowErrorHandler} from "../../../utils/error/throw.error";
import ExpressReviewsError from "../../../utils/error/expressReviewError";
import {ConstantsResponse} from "../../../constants/constants";



class BoardService implements  BoardServiceInterface{
    async Create(req: Request, next: NextFunction): Promise<any> {
        try {
            const body: boardInterface = req.body;
            const userId: string = req.id as string
            const boardSearch: boardInterfaceData = await BoardData.GetBoardByTitleAndUser(body.title,userId , next);
            if (boardSearch) {
                ThrowErrorHandler(new ExpressReviewsError('The board title is already in use',
                ConstantsResponse.FORBIDDEN, 'Validation Error', 'CreateServiceBoardData'), next)
                return
             }
            if(body.user_id.toString() !== req.id){
                ThrowErrorHandler(new ExpressReviewsError('Invalid identity',
                    ConstantsResponse.FORBIDDEN, 'Validation Error', 'CreateServiceBoardData'), next)
                return
            }
             return await BoardData.Create(body, next);
        } catch (error) {
            next(error)
        }
    }

    async Destroy(req: Request, next: NextFunction): Promise<any> {
        try {
            const id: string = req.params['id'];
            if (typeof Number(id) !== 'number' ) {
                ThrowErrorHandler(new ExpressReviewsError('Invalid Id format or not data found',
                    ConstantsResponse.BAD_REQUEST, 'ValidationError', "The parameter's Id is invalid or not data found"), next)
                return
            }
            const board: boardInterface = await BoardData.GetBoardById(id,next)
            if(board.user_id.toString() !== req.id){
                ThrowErrorHandler(new ExpressReviewsError('The board is not their property, they are not authorized',
                    ConstantsResponse.BAD_REQUEST, 'ValidationError', "Invalid operation"), next)
            }

            await BoardData.Destroy(id,  next)
            return {}
        } catch (error) {
            next(error)
        }
    }

    async Update(req: Request, next: NextFunction): Promise<any> {
        try {
            const body: boardInterface = req.body;
            const id: string = req.params['id'];
            if (typeof Number(id) !== 'number' || Object.keys(body).length === 0 ) {
                ThrowErrorHandler(new ExpressReviewsError('Invalid Id format or not data found',
                    ConstantsResponse.BAD_REQUEST, 'ValidationError', "The parameter's Id is invalid or not data found"), next)
                return
            }
            const boardSearch: boardInterfaceData= await BoardData.GetBoardById(id, next);
            if (!boardSearch) {
                ThrowErrorHandler(new ExpressReviewsError('The board not exist',
                ConstantsResponse.FORBIDDEN, 'Validation Error', 'GetBoardByIdServiceBoard'), next)
                return
             }
            if(boardSearch.user_id.toString() !== req.id){
                ThrowErrorHandler(new ExpressReviewsError('The board is not property of current user',
                    ConstantsResponse.FORBIDDEN, 'Validation Error', 'GetBoardByIdServiceBoard'), next)
                return
            }
             return await BoardData.Update(id,body, next);
        } catch (error) {
            next(error)
        }
    }

    async GetBoardByUserId(req: Request, next: NextFunction): Promise<any> {
        try {
            const id: string = req.params['id'];
            const query = req.query;
            if (typeof Number(id) !== 'number' ) {
                ThrowErrorHandler(new ExpressReviewsError('Invalid Id format or not data found',
                    ConstantsResponse.BAD_REQUEST, 'ValidationError', "The parameter's Id is invalid or not data found"), next)
                return
            }
            if(id !== req.id){
                ThrowErrorHandler(new ExpressReviewsError('Invalid identity',
                    ConstantsResponse.BAD_REQUEST, 'ValidationError', "Is not valid operation"), next)
                return
            }
            const {queryResult, dataPagination } = await BoardData.GetBoardByUserId(id,query ,next)
            req.pagination_result= dataPagination
            return queryResult
        } catch (error) {
            next(error)
        }
    }

    async Retrieve(req: Request, next: NextFunction): Promise<any> {
        try {
            const id: string = req.params['id'];
            if (typeof Number(id) !== 'number') {
                ThrowErrorHandler(new ExpressReviewsError('Invalid Id format or not data found',
                    ConstantsResponse.BAD_REQUEST, 'ValidationError', "The parameter's Id is invalid or not data found"), next)
                return
            }
            const boardSearch: boardInterfaceData = await BoardData.GetBoardById(id, next)
            if(boardSearch.user_id.toString() !== req.id){
                ThrowErrorHandler(new ExpressReviewsError('The board is not property of current user',
                    ConstantsResponse.BAD_REQUEST, 'ValidationError', "The parameter's Id is invalid or not data found"), next)
                return
            }
            return boardSearch
        } catch (error) {
            next(error)
        }
    }

}

export default new BoardService()
