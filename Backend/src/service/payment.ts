
import { Payment } from "../type/payment";
import prisma from "../config/prisma";

export class PaymentService {

    //1. Ajouter un paiement
    static async createPayment(data: Payment) {
        try {
            const payment = await prisma.payment.create({
              data: {
                cashierId: data.cashierId,
                ticketId: data.ticketId,
                amount: data.amount,
                createdAt: data.createdAt ?? new Date(),
              },
            });
            return payment;
          } catch (error) {
            console.error("Erreur de création du paiement:", error);
            throw new Error("Erreur de création du paiement.");
          }
    };

    //2. Rechercher les paiements par numéro ticket
    static async getPaymentByTicket(ticketId: number) {
        try {
          return await prisma.payment.findMany({
            where: { ticketId },
            include: {
              ticket: true,
            },
          });
        } catch (error) {
          console.error("Erreur lors de la récupération les paiements du numéro ticket :", error);
          throw new Error("Impossible de récupérer les paiements du numéro ticket.");
        }
      };

    //3. Modifier un paiment
    static async updatePayment(ticketId: number, data: Partial<Payment>) {
        try {
          return await prisma.payment.update({
            where: { ticketId },
            data: {
              ...(data.cashierId !== undefined && { cashierId: data.cashierId }),
              ...(data.ticketId && { ticketId: data.ticketId }),
              ...(data.amount && { amount: data.amount }),
              ...(data.createdAt && { createdAt: data.createdAt }),
            },
          });
        } catch (error) {
          console.error("Erreur lors de la mise à jour  du paiement :", error);
          throw new Error("Impossible de mettre à jour le paiment.");
        }
    };

    static async deletePayment(paymentId: number) {
        try {
          return await prisma.payment.delete({
            where: { paymentId },
          });
        } catch (error) {
          console.error("Erreur lors de la suppression  du paiement :", error);
          throw new Error("Impossible de supprimer le paiment.");
        }
    };
};