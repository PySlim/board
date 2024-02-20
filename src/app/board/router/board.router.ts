import {RouterInterface} from "../../../utils/router/router.class.interface";
import express, {Router} from "express";
import {ValidateIdentityMiddleware} from "../../../resources/middlewares/validate.identity.middleware";
import BoardController from "../controller/board.controller";
import {ValidateRequestMiddleware} from "../../../resources/middlewares/validate.request.middleware";
import {boardSchema} from "../model/board.object.models";
import {boardSchemaUpdate} from "../model/board.update.models";
import {PaginateMiddleware} from "../../../resources/middlewares/paginate.middleware";

class BoardRouter implements  RouterInterface{
    router: Router = express.Router();
    constructor() {
        this.initializeRoutes()
    }
    getRouter(): Router {
        return this.router;
    }

    initializeRoutes(): void {
        this.router.post('/', ValidateIdentityMiddleware(), ValidateRequestMiddleware(boardSchema) ,BoardController.Create);
        this.router.patch('/:id', ValidateIdentityMiddleware(), ValidateRequestMiddleware(boardSchemaUpdate) ,BoardController.Update);
        this.router.delete('/:id', ValidateIdentityMiddleware(), BoardController.Destroy);
        this.router.get('/:id', ValidateIdentityMiddleware(), BoardController.Retrieve);
        this.router.get('/user/:id', ValidateIdentityMiddleware(),PaginateMiddleware(),BoardController.GetBoardByUser);
    }

}

export default  new BoardRouter().getRouter()
