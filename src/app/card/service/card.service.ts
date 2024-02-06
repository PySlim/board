import {NextFunction, Request} from "express";
import {CardServiceInterface} from "./card.service.interface";

class CardService implements  CardServiceInterface{
    Create(req: Request, next: NextFunction): Promise<any> {
        return ;
    }

    Destroy(req: Request, next: NextFunction): Promise<any> {
        return ;
    }

    Update(req: Request, next: NextFunction): Promise<any> {
        return ;
    }

    GetCardByUserId(req: Request, next: NextFunction): Promise<any> {
        return ;
    }



}

export default  new CardService()
