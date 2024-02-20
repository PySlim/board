import {BoardControllerInterface} from "./board.controller.interface";
import {NextFunction, Request, Response} from "express";
import {RefactorResponse} from "../../../utils/response/refactor.response";
import {ConstantsResponse} from "../../../constants/constants";
import ExpressReviewsError from "../../../utils/error/expressReviewError";
import {boardSchemaResponse} from "../model/board.response.models";
import BoardService from "../service/board.service";


class BoardController implements  BoardControllerInterface{
    async Create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
         const board = await BoardService.Create(req, next);
         if(!board) return
         const response = RefactorResponse(boardSchemaResponse,board,'Category Create successfully',next);
         res.status(ConstantsResponse.CREATED).json(response);
    } catch (error) {
         if (error instanceof ExpressReviewsError) next(error)
         next(new ExpressReviewsError("Failed to Create the board", ConstantsResponse.INTERNAL_SERVER_ERROR, "ControllerError",'boardController.Create' ,error));
    }
    }

    async Destroy(req: Request, res: Response, next: NextFunction): Promise<void> {
       try {
            await BoardService.Destroy(req, next);
            res.status(ConstantsResponse.NO_CONTENT).send();
       } catch (error) {
            if (error instanceof ExpressReviewsError) next(error)
            next(new ExpressReviewsError("Failed to Destroy the board", ConstantsResponse.INTERNAL_SERVER_ERROR, "ControllerError",'boardController.Destroy' ,error));
       }
    }

   async Update(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
             const board = await BoardService.Update(req, next);
             if(!board) return
             const response = RefactorResponse(boardSchemaResponse,board,'Board Update successfully',next);
             res.status(ConstantsResponse.OK).json(response);
        } catch (error) {
             if (error instanceof ExpressReviewsError) next(error)
             next(new ExpressReviewsError("Failed to Update the board", ConstantsResponse.INTERNAL_SERVER_ERROR, "ControllerError",'boardController.Update' ,error));
        }
    }

    async GetBoardByUser(req: Request, res:Response, next: NextFunction): Promise<any> {
       try {
            const board = await BoardService.GetBoardByUserId(req, next);
            if(!board) return
            const response = RefactorResponse(boardSchemaResponse,board,'Category Boar successfully',next);
            res.status(ConstantsResponse.OK).json(response);
       } catch (error) {
            if (error instanceof ExpressReviewsError) next(error)
            next(new ExpressReviewsError("Failed to Boar the board", ConstantsResponse.INTERNAL_SERVER_ERROR, "ControllerError",'boardController.Boar' ,error));
       }
    }

    async Retrieve(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
             const board = await BoardService.Retrieve(req, next);
             if(!board) return
             const response = RefactorResponse(boardSchemaResponse,board,'Board Retrieve successfully',next);
             res.status(ConstantsResponse.OK).json(response);
        } catch (error) {
             if (error instanceof ExpressReviewsError) next(error)
             next(new ExpressReviewsError("Failed to Retrieve  board", ConstantsResponse.INTERNAL_SERVER_ERROR, "ControllerError",'boardController.Retrieve' ,error));
        }
    }

}

export default new BoardController()
