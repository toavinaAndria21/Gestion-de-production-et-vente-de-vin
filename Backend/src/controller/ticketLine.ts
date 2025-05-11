import { Response, Request } from "express";
import { TicketLineService } from "../service/ticketLine";

export class TicketLineController {

  // 1. Ajouter une ligne à un ticket
  static async createTicketLine(req: Request, res: Response) {
    try {
      const data = req.body;
      const ticketLine = await TicketLineService.createTicketLine(data);
      res.status(201).json({
        message: "Ligne de ticket ajoutée avec succès !",
        data: ticketLine
      });
    } catch (error) {
      res.status(500).json({
        message: "Erreur d'ajout de la ligne de ticket !",
        error
      });
    }
  }

  // 2. Récupérer les lignes d’un ticket
  static async getLinesByTicket(req: Request, res: Response) {
    try {
      const ticketId = parseInt(req.params.ticketId);
      const lines = await TicketLineService.getLinesByTicket(ticketId);
      res.status(200).json({
        message: "Lignes récupérées avec succès !",
        data: lines
      });
    } catch (error: any) {
      res.status(500).json({
        message: "Erreur de récupération des lignes du ticket !",
        error: error.message
      });
    }
  }

  // 3. Mettre à jour une ligne
  static async updateTicketLine(req: Request, res: Response) {
    try {
      const ticketLineId = parseInt(req.params.ticketLineId);
      const data = req.body;
      const updatedLine = await TicketLineService.updateTicketLine(ticketLineId, data);
      res.status(200).json({
        message: "Ligne de ticket mise à jour avec succès !",
        data: updatedLine
      });
    } catch (error) {
      res.status(500).json({
        message: "Erreur lors de la mise à jour de la ligne de ticket !",
        error
      });
    }
  }

  // 4. Supprimer une ligne
  static async deleteTicketLine(req: Request, res: Response) {
    try {
      const ticketLineId = parseInt(req.params.ticketLineId);
      const deleted = await TicketLineService.deleteTicketLine(ticketLineId);
      res.status(200).json({
        message: "Ligne de ticket supprimée avec succès !",
        data: deleted
      });
    } catch (error) {
      res.status(500).json({
        message: "Erreur lors de la suppression de la ligne de ticket !",
        error
      });
    }
  }
}
