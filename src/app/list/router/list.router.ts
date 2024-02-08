import {RouterInterface} from "../../../utils/router/router.class.interface";
import {undefined} from "zod";
import express, {Router} from "express";

class ListRouter implements  RouterInterface{
    router: Router =  express.Router();

    getRouter(): Router {
        return this.router;
    }

    initializeRoutes(): void {
        this.router.post('/');
        this.router.patch('/');
        this.router.delete('/')
    }

}

export default new  ListRouter()
