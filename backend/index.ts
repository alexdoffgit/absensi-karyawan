import express, { Application, Request, Response, NextFunction } from 'express';
import dotnev from "dotenv";

dotnev.config()

const app: Application = express();

app.use('/', (req: Request, res: Response) => {
    res.status(200).send("hello aaa")
})

app.listen(process.env.APP_PORT, () => console.log(`Server listening on ${process.env.APP_PORT}`))