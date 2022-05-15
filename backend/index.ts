import express, { Application, Request, Response, NextFunction } from 'express';
import dotnev from "dotenv";
import { masuk } from "./endpoint/absen/masuk";
import { Absensi } from "./adapter/prismapg/absen";
import { keluar } from './endpoint/absen/keluar';

dotnev.config()

const app: Application = express();

app.use(express.json())

const absenAdapter = new Absensi()
app.post("/absen/masuk", masuk(absenAdapter))
app.post("/absen/keluar", keluar(absenAdapter))

app.listen(process.env.APP_PORT, () => console.log(`Server listening on ${process.env.APP_PORT}`))