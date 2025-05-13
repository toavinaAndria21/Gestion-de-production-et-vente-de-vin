import { Router } from "express";
import { TicketController } from "../controller/ticket";

const ticketRouter = Router();

// Créer un ticket
ticketRouter.post("/", TicketController.createTicket);

// Obtenir tous les tickets d’un client
ticketRouter.get("/client/:clientId", TicketController.getTicketsByClient);

// Obtenir tous les tickets d’un vendeur
ticketRouter.get("/seller/:sellerId", TicketController.getTicketsBySeller);

// Mettre à jour un ticket (ex: état)
ticketRouter.put("/:ticketId", TicketController.updateTicket);

// Supprimer un ticket
ticketRouter.delete("/:ticketId", TicketController.deleteTicket);
ticketRouter.get("/history", TicketController.getPaidSalesHistoryController)

export default ticketRouter;
