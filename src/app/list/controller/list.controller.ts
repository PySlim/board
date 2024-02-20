import {ListControllerInterface} from "./list.controller.interface";
import {NextFunction, Request, Response} from "express";
import {RefactorResponse} from "../../../utils/response/refactor.response";
import {listSchemaResponse} from "../model/list.response.models";
import {ConstantsResponse} from "../../../constants/constants";
import ExpressReviewsError from "../../../utils/error/expressReviewError";
import ListService from "../service/list.service";

class ListController implements ListControllerInterface{
    async Create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
             const list = await ListService.Create(req, next);
             if(!list) return
             const response = RefactorResponse(listSchemaResponse,list,'List Create successfully',next);
             res.status(ConstantsResponse.CREATED).json(response);
        } catch (error) {
             if (error instanceof ExpressReviewsError) next(error)
             next(new ExpressReviewsError("Failed to Create the list", ConstantsResponse.INTERNAL_SERVER_ERROR, "ControllerError",'listController.Create' ,error));
        }
    }

    async Destroy(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
             await ListService.Destroy(req, next);
             res.status(ConstantsResponse.NO_CONTENT).send();
        } catch (error) {
             if (error instanceof ExpressReviewsError) next(error)
             next(new ExpressReviewsError("Failed to Destroy the list", ConstantsResponse.INTERNAL_SERVER_ERROR, "ControllerError",'listController.Destroy' ,error));
        }
    }

    async Update(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
             const list = await ListService.Update(req, next);
             if(!list) return
             const response = RefactorResponse(listSchemaResponse,list,'List Update successfully',next);
             res.status(ConstantsResponse.OK).json(response);
        } catch (error) {
             if (error instanceof ExpressReviewsError) next(error)
             next(new ExpressReviewsError("Failed to Update the list", ConstantsResponse.INTERNAL_SERVER_ERROR, "ControllerError",'listController.Update' ,error));
        }
    }

    async GetListByBoardId(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
             const list = await ListService.GetListByBoardId(req, next);
             if(!list) return
             const response = RefactorResponse(listSchemaResponse,list,'List GetListByBoardId successfully',next);
             res.status(ConstantsResponse.OK).json(response);
        } catch (error) {
             if (error instanceof ExpressReviewsError) next(error)
             next(new ExpressReviewsError("Failed to GetListByUserId  list", ConstantsResponse.INTERNAL_SERVER_ERROR, "ControllerError",'listController.GetListByUserId' ,error));
        }
    }

}

export default new    ListController()
