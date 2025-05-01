/*
  Warnings:

  - The primary key for the `Personnel` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `dateCreation` on the `Personnel` table. All the data in the column will be lost.
  - You are about to drop the column `identityCard` on the `Personnel` table. All the data in the column will be lost.
  - Added the required column `personnelId` to the `Personnel` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "DurationUnit" AS ENUM ('minutes', 'heures', 'jours');

-- AlterTable
ALTER TABLE "Personnel" DROP CONSTRAINT "Personnel_pkey",
DROP COLUMN "dateCreation",
DROP COLUMN "identityCard",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "personnelId" TEXT NOT NULL,
ADD CONSTRAINT "Personnel_pkey" PRIMARY KEY ("personnelId");

-- CreateTable
CREATE TABLE "Ingredient" (
    "ingredientId" SERIAL NOT NULL,
    "productorId" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "quantity" DECIMAL(65,30) NOT NULL,
    "threshold" DECIMAL(65,30) NOT NULL,
    "provider" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Ingredient_pkey" PRIMARY KEY ("ingredientId")
);

-- CreateTable
CREATE TABLE "Step" (
    "stepId" SERIAL NOT NULL,
    "productorId" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "unit" "DurationUnit" NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Step_pkey" PRIMARY KEY ("stepId")
);

-- CreateTable
CREATE TABLE "Vintage" (
    "vintageId" SERIAL NOT NULL,
    "productorId" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "quality" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Vintage_pkey" PRIMARY KEY ("vintageId")
);

-- CreateTable
CREATE TABLE "VintageStep" (
    "vintageStepId" SERIAL NOT NULL,
    "stepId" INTEGER NOT NULL,
    "vintageId" INTEGER NOT NULL,

    CONSTRAINT "VintageStep_pkey" PRIMARY KEY ("vintageStepId")
);

-- CreateIndex
CREATE UNIQUE INDEX "VintageStep_vintageId_stepId_key" ON "VintageStep"("vintageId", "stepId");

-- AddForeignKey
ALTER TABLE "Ingredient" ADD CONSTRAINT "Ingredient_productorId_fkey" FOREIGN KEY ("productorId") REFERENCES "Personnel"("personnelId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Step" ADD CONSTRAINT "Step_productorId_fkey" FOREIGN KEY ("productorId") REFERENCES "Personnel"("personnelId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VintageStep" ADD CONSTRAINT "VintageStep_stepId_fkey" FOREIGN KEY ("stepId") REFERENCES "Step"("stepId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VintageStep" ADD CONSTRAINT "VintageStep_vintageId_fkey" FOREIGN KEY ("vintageId") REFERENCES "Vintage"("vintageId") ON DELETE RESTRICT ON UPDATE CASCADE;
