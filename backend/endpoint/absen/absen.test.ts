import { absenMasukAdapter, masuk } from "./masuk"
import { AbsenKeluarReq, AbsenMasukReq } from "../../domain/dto/absen";
import { Absen } from "../../domain/model/absen";
import { addHours } from "date-fns";
import { Absensi } from "../../adapter/mock/absen";
import { createRequest, createResponse } from "node-mocks-http";
import { absenKeluarAdapter, keluar } from "./keluar";

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

test("test router masuk", () => {
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

test("parse absen keluar dto into absen object", () => {
    const gmt = new Date()
    const iso = new Date(gmt.toISOString())
    
    const req: AbsenKeluarReq = {
        hari: iso.toString(),
        jamSelesai: iso.toString(),
        tipe: "absen"
    }

    const keluar: Absen = {
        id: "",
        hari: new Date(iso.toString()),
        jamMulai: null,
        jamSelesai: new Date(iso.toString()),
        keterangan: null,
        lampiran: null,
        tipe: "absen",
    }

    expect(absenKeluarAdapter(req)).toEqual(keluar)
})

test("test absen keluar endpoint", () => {
    const gmt = new Date()
    const iso = new Date(gmt.toISOString())
    
    const payload: AbsenKeluarReq = {
        hari: iso.toString(),
        jamSelesai: addHours(iso, 2).toString(),
        tipe: "absen"
    }

    let req = createRequest({
        method: "POST",
        url: "/absen/keluar",
        body: payload
    })

    let res = createResponse()

    const mock = new Absensi()
    keluar(mock)(req, res)

    expect(res._getStatusCode()).toEqual(200)
})