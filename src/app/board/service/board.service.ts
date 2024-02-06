import {BoardServiceInterface} from "./board.service.interface";
import {NextFunction, Request} from "express";

class BoardService implements  BoardServiceInterface{
    Create(req: Request, next: NextFunction): Promise<any> {
        return ;
    }

    Destroy(req: Request, next: NextFunction): Promise<any> {
        return ;
    }

    Update(req: Request, next: NextFunction): Promise<any> {
        return ;
    }

    GetBoardById(req: Request, nex: NextFunction): Promise<any> {
        return ;
    }

}

export default new BoardService()
