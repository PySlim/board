
import UsersRouter from "./app/users/router/users.router";
import {HandlerError} from "./utils/error/handlerError";
import express from "express";

export const app = express();

app.use(express.json());

app.use('/user', UsersRouter);


app.use(HandlerError)


