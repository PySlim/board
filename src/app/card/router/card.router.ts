import {RouterInterface} from "../../../utils/router/router.class.interface";
import express, {Router} from "express";
import {ValidateIdentityMiddleware} from "../../../resources/middlewares/validate.identity.middleware";
import CardController from "../controller/card.controller";
import {ValidateRequestMiddleware} from "../../../resources/middlewares/validate.request.middleware";
import {cardSchema} from "../model/card.object.models";
import {cardSchemaUpdate} from "../model/card.update.models";

class CardRouter implements  RouterInterface{
    router: Router =  express.Router();
    constructor() {
        this.initializeRoutes()
    }
    getRouter(): Router {
        return this.router;
    }

    initializeRoutes(): void {
        this.router.post('/', ValidateIdentityMiddleware(),ValidateRequestMiddleware(cardSchema), CardController.Create);//create
        this.router.patch('/:id', ValidateIdentityMiddleware(),ValidateRequestMiddleware(cardSchemaUpdate), CardController.Update);//update
        this.router.delete('/:id', ValidateIdentityMiddleware(),CardController.Destroy);//delete
        this.router.get('/list/:id', ValidateIdentityMiddleware(),CardController.GetCardByListId);// get card by list id
    }

}

export default  new CardRouter().getRouter()
