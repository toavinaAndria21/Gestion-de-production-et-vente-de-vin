-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Administrateur', 'Producteur', 'Vendeur', 'Caissier');

-- CreateEnum
CREATE TYPE "DurationUnit" AS ENUM ('minutes', 'heures', 'jours');

-- CreateEnum
CREATE TYPE "TicketState" AS ENUM ('Payé', 'Impayé');

-- CreateEnum
CREATE TYPE "DeliveryState" AS ENUM ('Livré', 'NonLivré');

-- CreateEnum
CREATE TYPE "WineType" AS ENUM ('Blanc', 'Rouge');

-- CreateEnum
CREATE TYPE "Collection" AS ENUM ('Prestige', 'Standard', 'Découverte');

-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('Actif', 'Inactif');

-- CreateTable
CREATE TABLE "Personnel" (
    "personnelId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "status" "UserStatus" NOT NULL DEFAULT 'Actif',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Personnel_pkey" PRIMARY KEY ("personnelId")
);

-- CreateTable
CREATE TABLE "Ingredient" (
    "ingredientId" SERIAL NOT NULL,
    "productorId" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "quantity" DECIMAL(65,30) NOT NULL,
    "threshold" DECIMAL(65,30) NOT NULL,
    "provider" TEXT NOT NULL,
    "unit" TEXT NOT NULL DEFAULT 'kg',
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
    "isComplete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Vintage_pkey" PRIMARY KEY ("vintageId")
);

-- CreateTable
CREATE TABLE "VintageStep" (
    "vintageStepId" SERIAL NOT NULL,
    "stepId" INTEGER NOT NULL,
    "vintageId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VintageStep_pkey" PRIMARY KEY ("vintageStepId")
);

-- CreateTable
CREATE TABLE "VintageIngredient" (
    "vintageIngredientId" SERIAL NOT NULL,
    "ingredientId" INTEGER NOT NULL,
    "vintageId" INTEGER NOT NULL,
    "quantityUsed" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VintageIngredient_pkey" PRIMARY KEY ("vintageIngredientId")
);

-- CreateTable
CREATE TABLE "Product" (
    "productId" SERIAL NOT NULL,
    "vintageId" INTEGER NOT NULL,
    "formatId" INTEGER NOT NULL,
    "label" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "type" "WineType" NOT NULL,
    "stock" INTEGER NOT NULL DEFAULT 0,
    "category" "Collection" NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("productId")
);

-- CreateTable
CREATE TABLE "Format" (
    "formatId" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "quantity" DECIMAL(65,30) NOT NULL,
    "unit" TEXT NOT NULL DEFAULT 'cL',

    CONSTRAINT "Format_pkey" PRIMARY KEY ("formatId")
);

-- CreateTable
CREATE TABLE "TicketLine" (
    "ticketLineId" SERIAL NOT NULL,
    "ticketId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "TicketLine_pkey" PRIMARY KEY ("ticketLineId")
);

-- CreateTable
CREATE TABLE "Ticket" (
    "ticketId" SERIAL NOT NULL,
    "sellerId" TEXT NOT NULL,
    "clientId" INTEGER NOT NULL,
    "state" "TicketState" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("ticketId")
);

-- CreateTable
CREATE TABLE "Client" (
    "clientId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "adress" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("clientId")
);

-- CreateTable
CREATE TABLE "Delivery" (
    "deliveryId" SERIAL NOT NULL,
    "ticketId" INTEGER NOT NULL,
    "adress" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "state" "DeliveryState" NOT NULL,
    "fee" DECIMAL(65,30) NOT NULL DEFAULT 5000,

    CONSTRAINT "Delivery_pkey" PRIMARY KEY ("deliveryId")
);

-- CreateTable
CREATE TABLE "Payment" (
    "paymentId" SERIAL NOT NULL,
    "cashierId" TEXT NOT NULL,
    "ticketId" INTEGER NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("paymentId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Personnel_email_key" ON "Personnel"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VintageStep_vintageId_stepId_key" ON "VintageStep"("vintageId", "stepId");

-- CreateIndex
CREATE UNIQUE INDEX "VintageIngredient_vintageId_ingredientId_key" ON "VintageIngredient"("vintageId", "ingredientId");

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Delivery_ticketId_key" ON "Delivery"("ticketId");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_ticketId_key" ON "Payment"("ticketId");

-- AddForeignKey
ALTER TABLE "Ingredient" ADD CONSTRAINT "Ingredient_productorId_fkey" FOREIGN KEY ("productorId") REFERENCES "Personnel"("personnelId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Step" ADD CONSTRAINT "Step_productorId_fkey" FOREIGN KEY ("productorId") REFERENCES "Personnel"("personnelId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VintageStep" ADD CONSTRAINT "VintageStep_stepId_fkey" FOREIGN KEY ("stepId") REFERENCES "Step"("stepId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VintageStep" ADD CONSTRAINT "VintageStep_vintageId_fkey" FOREIGN KEY ("vintageId") REFERENCES "Vintage"("vintageId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VintageIngredient" ADD CONSTRAINT "VintageIngredient_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient"("ingredientId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VintageIngredient" ADD CONSTRAINT "VintageIngredient_vintageId_fkey" FOREIGN KEY ("vintageId") REFERENCES "Vintage"("vintageId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_vintageId_fkey" FOREIGN KEY ("vintageId") REFERENCES "Vintage"("vintageId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_formatId_fkey" FOREIGN KEY ("formatId") REFERENCES "Format"("formatId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TicketLine" ADD CONSTRAINT "TicketLine_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("productId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TicketLine" ADD CONSTRAINT "TicketLine_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("ticketId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Personnel"("personnelId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("clientId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("ticketId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_cashierId_fkey" FOREIGN KEY ("cashierId") REFERENCES "Personnel"("personnelId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("ticketId") ON DELETE RESTRICT ON UPDATE CASCADE;
