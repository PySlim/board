import {BoardControllerInterface} from "./board.controller.interface";
import {undefined} from "zod";
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

    Destroy(req: Request, res: Response, next: NextFunction): Promise<void> {
        return ;
    }

    Update(req: Request, res: Response, next: NextFunction): Promise<void> {
        return ;
    }

    GetBoardByUser(req: Request, res:Response, next: NextFunction): Promise<any> {
        return ;
    }

}

export default new BoardController()
