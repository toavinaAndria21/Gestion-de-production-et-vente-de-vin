import { Ticket } from "../type/ticket";
import prisma from "../config/prisma";

export class TicketService {
  static async createTicket(data: Ticket) {
    try {
      const ticket = await prisma.ticket.create({
        data: {
          sellerId: data.sellerId,
          clientId: data.clientId,
          state: data.state,
          createdAt: data.createdAt ?? new Date(),
        },
      });
      return ticket;
    } catch (error) {
      console.error("Erreur de création du ticket:", error);
      throw new Error("Erreur de création du ticket.");
    }
  }

  static async getTicketsByClient(clientId: number) {
    try {
      const tickets = await prisma.ticket.findMany({
        where: { clientId },
        include: { ticketLines: true, delivery: true, payment: true },
      });
      return tickets;
    } catch (error) {
      console.error("Erreur lors de la récupération des tickets du client:", error);
      throw new Error("Erreur lors de la récupération des tickets du client.");
    }
  }

  static async getTicketsBySeller(sellerId: string) {
    try {
      const tickets = await prisma.ticket.findMany({
        where: { sellerId },
        include: { ticketLines: true, delivery: true, payment: true },
      });
      return tickets;
    } catch (error) {
      console.error("Erreur lors de la récupération des tickets du vendeur:", error);
      throw new Error("Erreur lors de la récupération des tickets du vendeur.");
    }
  }

  static async updateTicket(ticketId: number, data: Partial<Ticket>) {
    try {
        const updated = await prisma.ticket.update({
            where: { ticketId },
            data: {
              ...(data.state && { state: data.state }),
              ...(data.clientId && { clientId: data.clientId }),
              ...(data.sellerId && { sellerId: data.sellerId }),
            },
          });
          return updated;
    } catch (error) {
      console.error("Erreur lors de la mise à jour du ticket:", error);
      throw new Error("Erreur lors de la mise à jour du ticket.");
    }
  }

  static async deleteTicket(ticketId: number) {
    try {
      await prisma.ticket.delete({
        where: { ticketId },
      });
      return { message: "Ticket supprimé avec succès." };
    } catch (error) {
      console.error("Erreur lors de la suppression du ticket:", error);
      throw new Error("Erreur lors de la suppression du ticket.");
    }
  }

  static async getPaidSalesHistory() {
    return await prisma.ticket.findMany({
      where: {
        state: 'Payé', 
      },
      include: {
        ticketLines: {
          include: {
            product: true,
          },
        },
        payment: true, 
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
  
}
