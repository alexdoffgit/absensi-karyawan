export type Absen = {
    id: string
    hari: Date
    jamMulai: Date | null
    jamSelesai: Date | null
    keterangan: string | null
    lampiran: string | null
    tipe: string
}

export interface AbsenI {
    masuk: (absen: Absen) => void
    keluar: (absen: Absen) => void
}

export interface cutiI {
    ajukan: (absen: Absen) => void
}