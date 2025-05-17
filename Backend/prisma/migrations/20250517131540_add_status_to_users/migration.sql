-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('Actif', 'Inactif');

-- AlterTable
ALTER TABLE "Personnel" ADD COLUMN     "status" "UserStatus" NOT NULL DEFAULT 'Actif';
