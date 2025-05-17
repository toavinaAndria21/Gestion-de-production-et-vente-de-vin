import { Router } from "express";
import { TicketLineController } from "../controller/ticketLine";

const ticketLineRouter = Router();

ticketLineRouter.get("/history", TicketLineController.sellingHistory);
ticketLineRouter.post("/", TicketLineController.createTicketLine);
ticketLineRouter.get("/:ticketId", TicketLineController.getLinesByTicket);
ticketLineRouter.put("/:ticketLineId", TicketLineController.updateTicketLine);
ticketLineRouter.delete("/:ticketLineId", TicketLineController.deleteTicketLine);

export default ticketLineRouter;