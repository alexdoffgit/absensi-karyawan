import { Request, Response } from "express";
import { AbsenKeluarReq } from "../../domain/dto/absen";
import { BelumAbsenErr, InternalServerErr } from "../../domain/error";
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

        try {
            await absen.keluar(payload)
            res.send("berhasil absen keluar")
        } catch(e) {
            if(e instanceof BelumAbsenErr) {
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