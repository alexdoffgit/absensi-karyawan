export type Absen = {
    id: string
    hari: Date
    jamMulai: Date | null
    jamSelesai: Date | null
    keterangan: string | null
    lampiran: string | null
    tipe: string
}

export interface IAbsen {
    masuk: (absen: Absen) => Promise<null>
    keluar: (absen: Absen) => Promise<null>
}