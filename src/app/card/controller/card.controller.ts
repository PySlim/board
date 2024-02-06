import {CardControllerInterface} from "./card.controller.interface";
import {NextFunction, Request, Response} from "express";

class CardController implements CardControllerInterface{
    Create(req: Request, res: Response, next: NextFunction): Promise<void> {
        return ;
    }

    Destroy(req: Request, res: Response, next: NextFunction): Promise<void> {
        return ;
    }

    Update(req: Request, res: Response, next: NextFunction): Promise<void> {
        return ;
    }

    GetCardByUserId(req: Request, res: Response, next: NextFunction): Promise<any> {
        return ;
    }

}

export default  new CardController()
