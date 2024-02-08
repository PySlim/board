import {RouterInterface} from "../../../utils/router/router.class.interface";
import express, {Router} from "express";
import {ValidateRequestMiddleware} from "../../../resources/middlewares/validate.request.middleware";
import {userSchema} from "../model/users.object.models";
import UsersController from "../controller/users.controller";
import {userSchemaLogin} from "../model/users.login.models";
import {userSchemaUpdate} from "../model/users.update.models";
import {ValidateIdentityMiddleware} from "../../../resources/middlewares/validate.identity.middleware";


class UserRouter implements  RouterInterface{
    router: Router =   express.Router();
    constructor() {
        this.initializeRoutes()
    }
    getRouter(): Router {
        return this.router;
    }
    initializeRoutes(): void {
        this.router.post('/', ValidateRequestMiddleware(userSchema), UsersController.Create);//created
        this.router.post('/sign', ValidateRequestMiddleware(userSchemaLogin), UsersController.Sign)
        this.router.get('/:id');//retrieve
        this.router.patch('/:id', ValidateRequestMiddleware(userSchemaUpdate), ValidateIdentityMiddleware(),UsersController.Update);//update
        this.router.delete('/:id', ValidateIdentityMiddleware(), UsersController.Destroy);//destroy
    }
}

export default  new UserRouter().getRouter();
