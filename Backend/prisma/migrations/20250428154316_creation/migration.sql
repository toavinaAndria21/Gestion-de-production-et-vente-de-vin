-- CreateEnum
CREATE TYPE "TicketState" AS ENUM ('Payé', 'Impayé');

-- CreateEnum
CREATE TYPE "DeliveryState" AS ENUM ('Livré', 'NonLivré');

-- AlterTable
ALTER TABLE "VintageStep" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "Product" (
    "productId" SERIAL NOT NULL,
    "vintageId" INTEGER NOT NULL,
    "formatId" INTEGER NOT NULL,
    "label" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("productId")
);

-- CreateTable
CREATE TABLE "Format" (
    "formatId" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "quanitity" DECIMAL(65,30) NOT NULL,
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
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Delivery_ticketId_key" ON "Delivery"("ticketId");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_ticketId_key" ON "Payment"("ticketId");

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
