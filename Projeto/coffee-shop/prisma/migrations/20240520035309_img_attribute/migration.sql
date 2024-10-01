/*
  Warnings:

  - Added the required column `img_url` to the `CartItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img_url` to the `Coffee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CartItem" ADD COLUMN     "img_url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Coffee" ADD COLUMN     "img_url" TEXT NOT NULL;
