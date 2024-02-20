import {RouterInterface} from "../../../utils/router/router.class.interface";
import express, {Router} from "express";
import {ValidateIdentityMiddleware} from "../../../resources/middlewares/validate.identity.middleware";
import ListController from "../controller/list.controller";
import {ValidateRequestMiddleware} from "../../../resources/middlewares/validate.request.middleware";
import {listSchema} from "../model/list.object.models";
import {listSchemaUpdate} from "../model/list.update.models";
import {PaginateMiddleware} from "../../../resources/middlewares/paginate.middleware";

class ListRouter implements  RouterInterface{
    router: Router =  express.Router();

    constructor() {
        this.initializeRoutes()
    }
    getRouter(): Router {
        return this.router;
    }

    initializeRoutes(): void {
        this.router.post('/', ValidateIdentityMiddleware(), ValidateRequestMiddleware(listSchema), ListController.Create);//create list
        this.router.patch('/:id', ValidateIdentityMiddleware(), ValidateRequestMiddleware(listSchemaUpdate), ListController.Update);//updated list
        this.router.delete('/:id', ValidateIdentityMiddleware(), ListController.Destroy)//deleted list
        this.router.get('/board/:id', ValidateIdentityMiddleware(),PaginateMiddleware(), ListController.GetListByBoardId)
    }

}

export default new  ListRouter().getRouter()
