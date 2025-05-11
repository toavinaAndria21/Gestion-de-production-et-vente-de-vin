import { Response, Request } from "express";
import { DeliveryService } from "../service/delivery";

export class DeliveryController {

    //1. Création d'une livraison
    static async createDelivery (req: Request, res: Response) {
        try {
            const data = req.body;
            const delivery = await DeliveryService.createDelivery(data);
            res.status(201).json({message:"Livraison créée avec succès! ", data: delivery});
        } catch (error: any) {
            res.status(500).json({message: "Erreur lors de la création de la livraison: ", error: error.message})
        }
    };

    //2. Récuperer les livraisons par numéro ticket
     static async getDeliveryByTicket(req: Request, res: Response) {
        try {
          const ticketId = parseInt(req.params.ticketId);
          const deliveries = await DeliveryService.getDeliveryByTicket(ticketId);
          res.status(200).json({
            message: "Livraisons récupérées avec succès !",
            data: deliveries
          });
        } catch (error: any) {
          res.status(500).json({
            message: "Erreur de récupération des livraisons !",
            error: error.message
          });
        }
      };

    //3. Modifier une livraison
    static async updateDelivery(req: Request, res: Response) {
        try {
            const deliveryId = parseInt(req.params.deliveryId);
            const updated = await DeliveryService.updateDelivery(deliveryId, req.body);
            res.status(201).json({message: "Livraison modifiée avec succès.", data: updated});

        } catch (error: any) {
            res.status(500).json({
                message: "Erreur de modification de la livraison !",
                error: error.message
              });
        }
    };

    //4. Supprimer une livraison 
    static async deleteDelivery(req: Request, res: Response) {
        try {
            const deliveryId = parseInt(req.params.deliveryId);
            const deleted = await DeliveryService.deleteDelivery(deliveryId);
            res.status(201).json({
                message: "Livraison supprimée avec succès.",
                data: deleted
            })
        } catch (error: any) {
            res.status(500).json({
                message: "Impossible de supprimer la livraison.",
                error: error.message
            })
        }
    };

};