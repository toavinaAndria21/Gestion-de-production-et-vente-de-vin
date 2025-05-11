import prisma from "../config/prisma";
import { TicketLine } from "../type/ticketLine";

export class TicketLineService {

  static async createTicketLine(data: TicketLine) {
    try {
      return await prisma.ticketLine.create({
        data: {
          ticketId: data.ticketId,
          productId: data.productId,
          quantity: data.quantity,
        },
      });
    } catch (error) {
      console.error("Erreur lors de la création de la ligne du ticket :", error);
      throw new Error("Impossible de créer la ligne du ticket.");
    }
  }

  static async updateTicketLine(ticketLineId: number, data: Partial<TicketLine>) {
    try {
      return await prisma.ticketLine.update({
        where: { ticketLineId },
        data: {
          ...(data.quantity !== undefined && { quantity: data.quantity }),
          ...(data.productId && { productId: data.productId }),
        },
      });
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la ligne du ticket :\n", error);
      throw new Error("Impossible de mettre à jour la ligne du ticket.");
    }
  }

  static async deleteTicketLine(ticketLineId: number) {
    try {
      return await prisma.ticketLine.delete({
        where: { ticketLineId },
      });
    } catch (error) {
      console.error("Erreur lors de la suppression de la ligne du ticket :", error);
      throw new Error("Impossible de supprimer la ligne du ticket.");
    }
  }

  static async getLinesByTicket(ticketId: number) {
    try {
      return await prisma.ticketLine.findMany({
        where: { ticketId },
        include: {
          product: true,
          ticket: true,
        },
      });
    } catch (error) {
      console.error("Erreur lors de la récupération des lignes du ticket :", error);
      throw new Error("Impossible de récupérer les lignes du ticket.");
    }
  }

}
