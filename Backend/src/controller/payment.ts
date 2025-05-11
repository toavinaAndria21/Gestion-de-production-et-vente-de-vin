/*
12. Payment
Dépend de Ticket et Personnel (Caissier)

Méthodes : createPayment, getPaymentByTicket, updatePayment, deletePayment

export interface Payment {
  cashierId: string; 
  ticketId: number;
  amount: Decimal;
  createdAt?: Date;

  cashier?: Personnel;
  ticket?: Ticket;
};
 */
import { Response, Request } from "express";
import { PaymentService } from "../service/payment";

export class PaymentController {

    //1. Création d'un paiement
    static async createPayment (req: Request, res: Response) {
        try {
            const data = req.body;
            const payment = await PaymentService.createPayment(data);
            res.status(201).json({message:"paiment créé avec succès! ", data: payment});
        } catch (error: any) {
            res.status(500).json({message: "Erreur lors de la création du paiment: ", error: error.message})
        }
    };

    //2. Récuperer les paiments par numéro ticket
     static async getPaymentByTicket(req: Request, res: Response) {
        try {
          const ticketId = parseInt(req.params.ticketId);
          const payments = await PaymentService.getPaymentByTicket(ticketId);
          res.status(200).json({
            message: "paiments récupérés avec succès !",
            data: payments
          });
        } catch (error: any) {
          res.status(500).json({
            message: "Erreur de récupération des paiments !",
            error: error.message
          });
        }
      };

    //3. Modifier un paiment
    static async updatePayment(req: Request, res: Response) {
        try {
            const paymentId = parseInt(req.params.paymentId);
            const updated = await PaymentService.updatePayment(paymentId, req.body);
            res.status(201).json({message: "Paiment modifié avec succès.", data: updated});

        } catch (error: any) {
            res.status(500).json({
                message: "Erreur de modification du paiment !",
                error: error.message
              });
        }
    };

    //4. Supprimer un paiment 
    static async deletePayment(req: Request, res: Response) {
        try {
            const PaymentId = parseInt(req.params.paymentId);
            const deleted = await PaymentService.deletePayment(PaymentId);
            res.status(201).json({
                message: "Paiment supprimé avec succès.",
                data: deleted
            })
        } catch (error: any) {
            res.status(500).json({
                message: "Impossible de supprimer la paiment.",
                error: error.message
            })
        }
    };

};