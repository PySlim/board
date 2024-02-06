import {RouterInterface} from "../../../utils/router/router.class.interface";
import {undefined} from "zod";
import express, {Router} from "express";

class BoardRouter implements  RouterInterface{
    router: Router = express.Router();
    constructor() {
        this.initializeRoutes()
    }
    getRouter(): Router {
        return this.router;
    }

    initializeRoutes(): void {
        this.router.post('/');
        this.router.patch('/:id');
        this.router.delete('/:id')
    }

}

export default  new BoardRouter().getRouter()
