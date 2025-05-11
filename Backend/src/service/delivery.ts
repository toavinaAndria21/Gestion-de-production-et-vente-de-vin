import { Delivery } from "../type/delivery";
import prisma from "../config/prisma";

export class DeliveryService {

    //1. Ajouter une livraison
    static async createDelivery(data: Delivery) {
        try {
            const delivery = await prisma.delivery.create({
              data: {
                ticketId: data.ticketId,
                adress: data.adress,
                state: data.state,
                createdAt: data.createdAt ?? new Date(),
                fee: data.fee,
              },
            });
            return delivery;
          } catch (error) {
            console.error("Erreur de création de la livraison:", error);
            throw new Error("Erreur de création de la livraison.");
          }
    };

    //2. Rechercher les livraisons par numéro ticket
    static async getDeliveryByTicket(ticketId: number) {
        try {
          return await prisma.delivery.findMany({
            where: { ticketId },
            include: {
              ticket: true,
            },
          });
        } catch (error) {
          console.error("Erreur lors de la récupération les livraisons du numéro ticket :", error);
          throw new Error("Impossible de récupérer les livraisons du numéro ticket.");
        }
      };

    //3. Modifier une livraison
    static async updateDelivery(ticketId: number, data: Partial<Delivery>) {
        try {
          return await prisma.delivery.update({
            where: { ticketId },
            data: {
              ...(data.createdAt !== undefined && { createdAt: data.createdAt }),
              ...(data.state && { state: data.state }),
              ...(data.adress && { adress: data.adress }),
              ...(data.fee && { fee: data.fee }),
            },
          });
        } catch (error) {
          console.error("Erreur lors de la mise à jour  de la livraison :", error);
          throw new Error("Impossible de mettre à jour la livraison.");
        }
    };

    static async deleteDelivery(deliveryId: number) {
        try {
          return await prisma.delivery.delete({
            where: { deliveryId },
          });
        } catch (error) {
          console.error("Erreur lors de la suppression  de la livraison :", error);
          throw new Error("Impossible de supprimer la livraison.");
        }
    };
};