import { Router } from "express";
import { TicketLineController } from "../controller/ticketLine";

const ticketLineRouter = Router();

// Ajouter une ligne à un ticket
ticketLineRouter.post("/", TicketLineController.createTicketLine);

// Obtenir toutes les lignes d'un ticket
ticketLineRouter.get("/:ticketId", TicketLineController.getLinesByTicket);

// Mettre à jour une ligne de ticket
ticketLineRouter.put("/:ticketLineId", TicketLineController.updateTicketLine);

// Supprimer une ligne de ticket
ticketLineRouter.delete("/:ticketLineId", TicketLineController.deleteTicketLine);

export default ticketLineRouter;