/*
  Warnings:

  - You are about to drop the column `coffeeId` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Cart` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cartId,coffeeId]` on the table `CartItem` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_coffeeId_fkey";

-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_userId_fkey";

-- AlterTable
ALTER TABLE "Cart" DROP COLUMN "coffeeId",
DROP COLUMN "status",
DROP COLUMN "userId";

-- CreateIndex
CREATE UNIQUE INDEX "CartItem_cartId_coffeeId_key" ON "CartItem"("cartId", "coffeeId");
