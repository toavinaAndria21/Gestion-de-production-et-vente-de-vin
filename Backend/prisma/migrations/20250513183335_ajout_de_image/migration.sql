/*
  Warnings:

  - Added the required column `category` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Collection" AS ENUM ('Prestige', 'Standard', 'Découverte');

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "category" "Collection" NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL;
