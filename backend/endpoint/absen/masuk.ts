import { Request, Response } from "express";
import { IAbsen, Absen } from "@model/absen";
import { AbsenMasukReq } from "@dto/absen";

export function absenMasukAdapter(a: AbsenMasukReq): Absen {
    return {
        id: "",
        hari: new Date(a.hari),
        jamMulai: new Date(a.jamMulai),
        jamSelesai: null,
        keterangan: a.keterangan,
        lampiran: null,
        tipe: a.tipe
    }
}

export function masuk(absen: IAbsen) {
    return async function(req: Request, res: Response) {
        const absenReq = req.body as AbsenMasukReq
        const absenModel = absenMasukAdapter(absenReq)
        await  absen.masuk(absenModel)
    }
}