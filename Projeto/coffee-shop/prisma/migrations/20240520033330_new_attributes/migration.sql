/*
  Warnings:

  - Added the required column `coffee_desc` to the `CartItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `coffee_name` to the `CartItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CartItem" ADD COLUMN     "coffee_desc" TEXT NOT NULL,
ADD COLUMN     "coffee_name" TEXT NOT NULL;
