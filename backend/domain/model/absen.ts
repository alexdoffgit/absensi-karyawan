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
    masuk: (absen: Absen) => Promise<void>
    keluar: (absen: Absen) => Promise<void>
}

export interface ICuti {
    ajukan: (absen: Absen) => Promise<void>
}