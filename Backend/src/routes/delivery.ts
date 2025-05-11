import { Router } from "express";
import { DeliveryController } from "../controller/delivery";

const deliveryRouter = Router();

//1. Ajouter une livraison
deliveryRouter.post("/", DeliveryController.createDelivery);

//2. Récuperer les livraisons par le numéro ticket
deliveryRouter.get("/:ticketId", DeliveryController.getDeliveryByTicket);

//3. Modifier une livraison
deliveryRouter.put("/:deliveryId", DeliveryController.updateDelivery);

//4. Supprimer une livraison
deliveryRouter.delete("/:deliveryId", DeliveryController.deleteDelivery);

export default deliveryRouter;