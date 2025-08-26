/*
  Warnings:

  - You are about to drop the column `clientId` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the `Client` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Ticket" DROP CONSTRAINT "Ticket_clientId_fkey";

-- AlterTable
ALTER TABLE "public"."Ticket" DROP COLUMN "clientId";

-- DropTable
DROP TABLE "public"."Client";
