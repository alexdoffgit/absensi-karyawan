import { Absensi } from "./absen";
import { Absen } from "../../domain/model/absen";
import { nanoid } from "nanoid";
import { addHours } from "date-fns";
import { BelumAbsenErr, SudahAbsenMasukErr } from "../../domain/error";

test("test adapter absen masuk", async () => {
    const id = nanoid()

    const gmtDate = new Date()
    const isoDate = new Date(gmtDate.toISOString())

    const masuk: Absen = {
        id,
        hari: isoDate,
        jamMulai: addHours(isoDate, 2),
        jamSelesai: null,
        keterangan: null,
        lampiran: null,
        tipe: "absen"
    }
    const absenImplemented = new Absensi()
    
    expect(await absenImplemented.masuk(masuk)).toBe(null)
})

test("test adapter absen keluar", async () => {
    const id = nanoid()

    const gmtDate = new Date()
    const isoDate = new Date(gmtDate.toISOString())

    const keluar: Absen = {
        id,
        hari: isoDate,
        jamMulai: null,
        jamSelesai: addHours(isoDate, 4),
        keterangan: null,
        lampiran: null,
        tipe: "absen"
    }

    const absenImplemented = new Absensi()

    expect(await absenImplemented.keluar(keluar)).toBe(null)
})