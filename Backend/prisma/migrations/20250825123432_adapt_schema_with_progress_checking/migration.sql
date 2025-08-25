-- CreateEnum
CREATE TYPE "VintageStatus" AS ENUM ('Created', 'Launched', 'Paused', 'Cancelled');

-- AlterTable
ALTER TABLE "Vintage" ADD COLUMN     "globalProgress" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "status" "VintageStatus" NOT NULL DEFAULT 'Created';

-- AlterTable
ALTER TABLE "VintageStep" ADD COLUMN     "progress" INTEGER NOT NULL DEFAULT 0;
