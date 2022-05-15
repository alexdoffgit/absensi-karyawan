import { PRISMA } from "./singleton";
import { IAbsen, Absen as AbsenContract } from "../../domain/model/absen";
import { nanoid } from "nanoid";
import { SudahAbsenMasukErr, BelumAbsenErr } from "../../domain/error";

export class Absensi implements IAbsen {
    public async masuk(absen: AbsenContract) {
        try {
            const id = nanoid()

            const isExist = await PRISMA.absen.findUnique({
                where: {
                    hari: absen.hari
                },
                select: {
                    id: true
                }
            })

            if(isExist) {
                throw new SudahAbsenMasukErr("anda sudah masuk")
            }


            await PRISMA.absen.create({
                data: {
                    id: id,
                    hari: absen.hari,
                    tipe: absen.tipe,
                    jamMulai: absen.jamMulai,
                    keterangan: absen.keterangan
                }
            })

            return null
        } catch(e) {
            throw e
        }
    }

    public async keluar(absen: AbsenContract) {
        try {
            const isExist = await PRISMA.absen.findUnique({
                where: {
                    hari: absen.hari
                },
                select: {
                    id: true
                }
            })

            if(!isExist) {
                throw new BelumAbsenErr("anda belum masuk, silahkan absen masuk dulu");
            }

            await PRISMA.absen.update({
                where: {
                    hari: absen.hari
                },
                data: {
                    jamSelesai: absen.jamSelesai
                }
            })

            return null
        } catch (e) {
            throw e   
        }
    }
}
