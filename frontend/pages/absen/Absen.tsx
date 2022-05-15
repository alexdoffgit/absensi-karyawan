import Head from "next/head";
import Link from "next/link";
import styles from "./masuk.module.css";

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

export function Absen() {
  return (
    <div id="bg" className={styles.bg}>
      <Head>
        <title>absen</title>
      </Head>
      <TopNav />
      <div id="content" className={styles.content}>
        <div className={styles.box}>

        </div>
      </div>
    </div>
  )
}