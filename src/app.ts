
import UsersRouter from "./app/users/router/users.router";
import {HandlerError} from "./utils/error/handlerError";
import express from "express";
import {PaginateMiddleware} from "./resources/middlewares/paginate.middleware";
import cors from 'cors'
import BoardRouter from "./app/board/router/board.router";
import ListRouter from "./app/list/router/list.router";
import CardRouter from "./app/card/router/card.router";

export const app = express();

app.use(express.json());
app.use(PaginateMiddleware());
app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use('/user', UsersRouter);
app.use('/board', BoardRouter);
app.use('/list', ListRouter);
app.use('/card', CardRouter);


app.use(HandlerError)


