import { Response, Request } from "express";
import { TicketService } from "../service/ticket";
import { Ticket } from "../type/ticket";


export class TicketController {
  static async createTicket(req: Request, res: Response) {
    try {
      const ticket: Ticket = await TicketService.createTicket(req.body);
      res.status(201).json(ticket);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getTicketsByClient(req: Request, res: Response) {
    try {
      const clientId = parseInt(req.params.clientId);
      const tickets = await TicketService.getTicketsByClient(clientId);
      res.status(200).json(tickets);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getTicketsBySeller(req: Request, res: Response) {
    try {
      const sellerId = req.params.sellerId;
      const tickets = await TicketService.getTicketsBySeller(sellerId);
      res.status(200).json(tickets);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateTicket(req: Request, res: Response) {
    try {
      const ticketId = Number(req.params.ticketId);
      const updated = await TicketService.updateTicket(ticketId, req.body);
      res.status(200).json(updated);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteTicket(req: Request, res: Response) {
    try {
      const ticketId = Number(req.params.ticketId);
      const result = await TicketService.deleteTicket(ticketId);
      res.status(200).json(result);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}
