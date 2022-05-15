import { Absen, IAbsen } from "../../domain/model/absen";
import { BelumAbsenErr } from "../../domain/error";

export class Absensi implements IAbsen {
    private hari?: Date

    public async masuk(a: Absen) {
        this.hari = a.hari
        return null
    }

    public async keluar(a: Absen) {
        try {
            if(!this.hari) {
                throw new BelumAbsenErr("anda belum absen")
            }

            return null
        } catch(e) {
            throw e
        }
    }
}