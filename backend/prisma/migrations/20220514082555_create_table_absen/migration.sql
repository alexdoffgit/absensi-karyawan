/*
  Warnings:

  - A unique constraint covering the columns `[hari]` on the table `Absen` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Absen_hari_key" ON "Absen"("hari");
