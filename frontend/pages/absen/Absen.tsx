import Head from "next/head";
import Link from "next/link";
import styles from "./masuk.module.css";
import { AbsenKeluarReq, AbsenMasukReq } from "../../dto/absen";
import { ChangeEvent, useState } from "react";
import { useMutation } from "react-query";
import { server } from "../../lib/env";

function TopNav() {
  return (
    <nav className={styles.nav}>
      <div id="logo" className={styles.logotext}>
        ARDUOUS
      </div>
      <div id="links" className={styles.links}>
        <Link href={"/absen"}>
          <div className={styles.linktext}>Absen</div>
        </Link>
        <Link href={"/cuti"}>
          <div className={styles.linktext}>Cuti</div>
        </Link>
        <Link href={"/jadwal"}>
          <div className={styles.linktext}>Jadwal</div>
        </Link>
      </div>
    </nav>
  )
}

function createAbsenMasuk(keterangan: string | null, tipe: string): AbsenMasukReq {
  const gmt = new Date()
  const iso = gmt.toISOString()
  
  return {
    hari: iso.toString(),
    jamMulai: iso.toString(),
    keterangan, 
    tipe,
  }
}

function createAbsenKeluar(tipe: string): AbsenKeluarReq {
  const gmt = new Date()
  const iso = gmt.toISOString()

  return {
    hari: iso.toString(),
    jamSelesai: iso.toString(),
    tipe
  }
}

async function submitMasuk(payload: AbsenMasukReq) {
  try {
    const res = await fetch(server("/absen/masuk"), {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    if(!res.ok) {
      const err = await res.text()
      throw new Error(err)
    }

    const msg = await res.text()
    return msg
  } catch(e) {
    throw e
  }
}

async function submitKeluar(payload: AbsenKeluarReq) {
  try {
    const res = await fetch(server("/absen/keluar"), {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    if(!res.ok) {
      const err = await res.text()
      throw new Error(err);
    }

    const msg = await res.text()
    return msg
  } catch(e) {
    throw e
  }
}

export function Absen() {
  const [keterangan, setKeterangan] = useState<string | null>(null)
  const [tipe, setTipe] = useState("absen")
  const handleKet = (e: ChangeEvent<HTMLTextAreaElement>) => setKeterangan(e.target.value)
  const handleTipe = (e: ChangeEvent<HTMLSelectElement>) => setTipe(e.target.value)
  const payloadMasuk = createAbsenMasuk(keterangan, tipe)
  const payloadKeluar = createAbsenKeluar(tipe)
  const mutateMasuk = useMutation((payload: AbsenMasukReq) => submitMasuk(payload))
  const mutateKeluar = useMutation((payload: AbsenKeluarReq) => submitKeluar(payload))

  return (
    <div id="bg" className={styles.bg}>
      <Head>
        <title>absen</title>
      </Head>
      <TopNav />
      <div id="content" className={styles.content}>
        <div className={styles.box}>
          <p className={styles.judul}>Keterangan</p>
          <textarea 
            name="keterangan" 
            cols={20} 
            rows={10} 
            data-cy="keterangan"
            className={styles.ket}
            onChange={handleKet}
            value={keterangan ? keterangan : undefined}
          >
          </textarea>
          <select 
            name="tipe absen" 
            data-cy="tipe absen" 
            className={styles["tipe-absen"]}
            onChange={handleTipe}
            value={tipe}
          >
            <option value="absen">Absen</option>
            <option value="terlambat">Terlambat</option>
          </select>
          <div className={styles["btn-group"]}>
            <button 
              disabled={mutateMasuk.isLoading || mutateKeluar.isLoading ? true : false}
              onClick={() => {mutateMasuk.mutate(payloadMasuk)}}
            >
              Clock In
            </button>
            <button
              disabled={mutateMasuk.isLoading || mutateKeluar.isLoading ? true : false}
              onClick={() => mutateKeluar.mutate(payloadKeluar)}
            >
              Clock Out
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}