/*
  Warnings:

  - Added the required column `coffee_price` to the `CartItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CartItem" ADD COLUMN     "coffee_price" DOUBLE PRECISION NOT NULL;
