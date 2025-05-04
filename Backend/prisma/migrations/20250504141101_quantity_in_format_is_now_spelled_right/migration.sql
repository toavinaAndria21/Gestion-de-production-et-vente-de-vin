/*
  Warnings:

  - You are about to drop the column `quanitity` on the `Format` table. All the data in the column will be lost.
  - Added the required column `quantity` to the `Format` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Format" DROP COLUMN "quanitity",
ADD COLUMN     "quantity" DECIMAL(65,30) NOT NULL;
