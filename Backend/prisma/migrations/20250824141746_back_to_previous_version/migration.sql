/*
  Warnings:

  - You are about to drop the column `completedAt` on the `Vintage` table. All the data in the column will be lost.
  - You are about to drop the column `pausedAt` on the `Vintage` table. All the data in the column will be lost.
  - You are about to drop the column `progress` on the `Vintage` table. All the data in the column will be lost.
  - You are about to drop the column `startedAt` on the `Vintage` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Vintage` table. All the data in the column will be lost.
  - You are about to drop the column `totalPausedDuration` on the `Vintage` table. All the data in the column will be lost.
  - You are about to drop the column `actualDuration` on the `VintageStep` table. All the data in the column will be lost.
  - You are about to drop the column `completedAt` on the `VintageStep` table. All the data in the column will be lost.
  - You are about to drop the column `estimatedEndTime` on the `VintageStep` table. All the data in the column will be lost.
  - You are about to drop the column `pausedAt` on the `VintageStep` table. All the data in the column will be lost.
  - You are about to drop the column `progress` on the `VintageStep` table. All the data in the column will be lost.
  - You are about to drop the column `startedAt` on the `VintageStep` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `VintageStep` table. All the data in the column will be lost.
  - You are about to drop the column `stepOrder` on the `VintageStep` table. All the data in the column will be lost.
  - You are about to drop the column `totalPausedDuration` on the `VintageStep` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Vintage" DROP COLUMN "completedAt",
DROP COLUMN "pausedAt",
DROP COLUMN "progress",
DROP COLUMN "startedAt",
DROP COLUMN "status",
DROP COLUMN "totalPausedDuration";

-- AlterTable
ALTER TABLE "VintageStep" DROP COLUMN "actualDuration",
DROP COLUMN "completedAt",
DROP COLUMN "estimatedEndTime",
DROP COLUMN "pausedAt",
DROP COLUMN "progress",
DROP COLUMN "startedAt",
DROP COLUMN "status",
DROP COLUMN "stepOrder",
DROP COLUMN "totalPausedDuration";

-- DropEnum
DROP TYPE "StepStatus";

-- DropEnum
DROP TYPE "VintageStatus";
