import { absenMasukAdapter, masuk } from "./masuk"
import { AbsenMasukReq } from "../../domain/dto/absen";
import { Absen } from "../../domain/model/absen";
import { nanoid } from "nanoid";
import { addHours } from "date-fns";
import { Absensi } from "../../adapter/mock/absen";
import { createRequest, createResponse } from "node-mocks-http";

test("test apakah absen dto menjadi absen masuk", () => {
    const gmt = new Date()
    const iso = new Date(gmt.toISOString())
    const jamMulai = addHours(iso, 2)

    const req: AbsenMasukReq = {
        hari: iso.toString(),
        jamMulai: jamMulai.toString(),
        keterangan: null,
        tipe: "absen"
    }

    const absen: Absen = {
        id: "",
        hari: new Date(iso.toString()),
        jamMulai: new Date(jamMulai.toString()),
        jamSelesai: null,
        keterangan: null,
        lampiran: null,
        tipe: "absen"
    }

    expect(absenMasukAdapter(req)).toEqual(absen)
})

test("test router masuk", async () => {
    const gmt = new Date()
    const iso = new Date(gmt.toISOString())
    const jamMulai = addHours(iso, 2)

    let req = createRequest({
        method: "POST",
        url: "/absen/masuk",
        body: {
            hari: iso.toString(),
            jamMulai: jamMulai.toString(),
            keterangan: null,
            tipe: "absen"
        }
    })

    let res = createResponse()

    const a = new Absensi()

    masuk(a)(req, res)

    expect(res._getStatusCode()).toEqual(200)
})