export type Absen = {
    id: string;
    hari: Date;
    jamMulai: Date;
    jamSelesai: Date;
    keterangan: string;
    lampiran: string;
    tipe: string
}

export interface AbsenI {
    masuk: (absen: Absen) => void
    keluar: (absen: Absen) => void
}

export interface cutiI {
    ajukan: (absen: Absen) => void
}