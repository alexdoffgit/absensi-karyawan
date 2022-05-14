import { PRISMA } from "./singleton";
import { IAbsen, Absen as AbsenContract } from "../../domain/model/absen";
import { nanoid } from "nanoid";


export class Absensi implements IAbsen {
    public async masuk(absen: AbsenContract) {
        const id = nanoid()
        await PRISMA.absen.create({
            data: {
                id: id,
                hari: absen.hari,
                tipe: absen.tipe,
                jamMulai: absen.jamMulai,
                keterangan: absen.keterangan
            }
        });
    }

    public async keluar(absen: AbsenContract) {
        await PRISMA.absen.update({
            where: {
                hari: absen.hari
            },
            data: {
                jamSelesai: absen.jamSelesai
            }
        })
    }
}
