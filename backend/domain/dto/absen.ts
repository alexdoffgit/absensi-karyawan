export type AbsenMasukReq = {
    hari: string
    jamMulai: string
    keterangan: string | null
    tipe: string
}

export type AbsenKeluarReq = {
    hari: string
    jamSelesai: string
    tipe: string
}

