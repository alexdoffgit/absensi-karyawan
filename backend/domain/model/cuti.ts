export type Cuti = {
    keterangan: string
    tipe: string
    from: Date
    to: Date
    lampiran: string
}

export interface ICuti {
    ajukan: (cuti: Cuti) => Promise<null>
}