import { Request, Response } from "express";
import { AbsenKeluarReq } from "../../domain/dto/absen";
import { Absen, IAbsen } from "../../domain/model/absen";

export function absenKeluarAdapter(a: AbsenKeluarReq): Absen {
    return {
        id: "",
        hari: new Date(a.hari),
        jamMulai: null,
        jamSelesai: new Date(a.jamSelesai),
        keterangan: null,
        lampiran: null,
        tipe: a.tipe
    }
}

export function keluar(absen: IAbsen) {
    return async function(req: Request, res: Response) {
        const reqTyped = req.body as AbsenKeluarReq
        const payload = absenKeluarAdapter(reqTyped)
        await absen.keluar(payload)
        res.status(200)
    }
}