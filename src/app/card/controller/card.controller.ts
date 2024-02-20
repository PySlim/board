import {CardControllerInterface} from "./card.controller.interface";
import {NextFunction, Request, Response} from "express";
import CardService from "../service/card.service";
import {RefactorResponse} from "../../../utils/response/refactor.response";
import {cardSchemaResponse} from "../model/card.response.models";
import {ConstantsResponse} from "../../../constants/constants";
import ExpressReviewsError from "../../../utils/error/expressReviewError";

class CardController implements CardControllerInterface{
    async Create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
             const card = await CardService.Create(req, next);
             if(!card) return
             const response = RefactorResponse(cardSchemaResponse,card,'Card Create successfully',next);
             res.status(ConstantsResponse.CREATED).json(response);
        } catch (error) {
             if (error instanceof ExpressReviewsError) next(error)
             next(new ExpressReviewsError("Failed to Create  card", ConstantsResponse.INTERNAL_SERVER_ERROR, "ControllerError",'cardController.Create' ,error));
        }
    }

    async Destroy(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
             const card = await CardService.Destroy(req, next);
             if(!card) return
             res.status(ConstantsResponse.NO_CONTENT).send();
        } catch (error) {
             if (error instanceof ExpressReviewsError) next(error)
             next(new ExpressReviewsError("Failed to Destroy  card", ConstantsResponse.INTERNAL_SERVER_ERROR, "ControllerError",'cardController.Destroy' ,error));
        }
    }

    async Update(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
             const card = await CardService.Update(req, next);
             if(!card) return
             const response = RefactorResponse(cardSchemaResponse,card,'Card Update successfully',next);
             res.status(ConstantsResponse.OK).json(response);
        } catch (error) {
             if (error instanceof ExpressReviewsError) next(error)
             next(new ExpressReviewsError("Failed to Update  card", ConstantsResponse.INTERNAL_SERVER_ERROR, "ControllerError",'cardController.Update' ,error));
        }
    }

    async GetCardByListId(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
             const card = await CardService.GetCardByListId(req, next);
             if(!card) return
             const response = RefactorResponse(cardSchemaResponse,card,'Card GetCardByListId successfully',next);
             res.status(ConstantsResponse.OK).json(response);
        } catch (error) {
             if (error instanceof ExpressReviewsError) next(error)
             next(new ExpressReviewsError("Failed to GetCardByListId  card", ConstantsResponse.INTERNAL_SERVER_ERROR, "ControllerError",'cardController.GetCardByListId' ,error));
        }
    }

}

export default  new CardController()
