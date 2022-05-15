import { Request, Response } from "express";
import { IAbsen, Absen } from "../../domain/model/absen";
import { AbsenMasukReq } from "../../domain/dto/absen";
import { InternalServerErr, SudahAbsenMasukErr } from "../../domain/error";

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

        try {
            await absen.masuk(absenModel)
            res.send("berhasil absen")
        } catch(e) {
            if(e instanceof SudahAbsenMasukErr) {
                res.status(e.getHttpErrorCode())
                res.send(e.message)
            } else {
                console.log((e as any).message)
                const err = new InternalServerErr()
                res.status(err.getHttpErrorCode())
                res.send(err.message)
            }
        }
        
    }
}