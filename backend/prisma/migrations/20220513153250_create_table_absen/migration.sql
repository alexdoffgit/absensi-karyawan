-- CreateTable
CREATE TABLE "Absen" (
    "id" TEXT NOT NULL,
    "hari" DATE NOT NULL,
    "jamMulai" TIMESTAMPTZ,
    "jamSelesai" TIMESTAMPTZ,
    "keterangan" TEXT,
    "lampiran" VARCHAR(255),
    "tipe" VARCHAR(255) NOT NULL,

    CONSTRAINT "Absen_pkey" PRIMARY KEY ("id")
);
