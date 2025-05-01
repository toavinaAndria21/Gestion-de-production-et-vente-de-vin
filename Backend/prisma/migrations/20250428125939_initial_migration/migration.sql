-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Administrateur', 'Producteur', 'Vendeur', 'Caissier');

-- CreateTable
CREATE TABLE "Personnel" (
    "identityCard" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "dateCreation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Personnel_pkey" PRIMARY KEY ("identityCard")
);

-- CreateIndex
CREATE UNIQUE INDEX "Personnel_email_key" ON "Personnel"("email");
