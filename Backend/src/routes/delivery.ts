import { Router } from "express";
import { DeliveryController } from "../controller/delivery";

const deliveryRouter = Router();

deliveryRouter.post("/", DeliveryController.createDelivery);

deliveryRouter.get("/:ticketId", DeliveryController.getDeliveryByTicket);

deliveryRouter.put("/:deliveryId", DeliveryController.updateDelivery);

deliveryRouter.delete("/:deliveryId", DeliveryController.deleteDelivery);

export default deliveryRouter;