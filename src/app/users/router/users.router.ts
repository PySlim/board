import {RouterInterface} from "../../../utils/router/router.class.interface";
import express, {Router} from "express";


class UserRouter implements  RouterInterface{
    router: Router = new  express.Router();
    constructor() {
        this.initializeRoutes()
    }
    getRouter(): Router {
        return this.router;
    }
    initializeRoutes(): void {
        this.router.post('/');//created
        this.router.get('/:id');//retrieve
        this.router.patch('/:id');//update
        this.router.delete('/:id');//destroy
    }
}

export default  new UserRouter().getRouter();
