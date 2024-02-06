import {BoardControllerInterface} from "./board.controller.interface";
import {undefined} from "zod";
import {NextFunction, Request, Response} from "express";

class BoardController implements  BoardControllerInterface{
    Create(req: Request, res: Response, next: NextFunction): Promise<void> {
        return ;
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
