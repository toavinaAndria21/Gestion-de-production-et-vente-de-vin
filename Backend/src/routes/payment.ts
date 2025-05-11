import { Router } from "express";
import { PaymentController } from "../controller/payment";

const paymentRouter = Router();

//1. Ajouter un piement
paymentRouter.post("/", PaymentController.createPayment);

//2. Récuperer les paiments par le numéro ticket
paymentRouter.get("/:ticketId", PaymentController.getPaymentByTicket);

//3. Modifier un piement
paymentRouter.put("/:paymentId", PaymentController.updatePayment);

//4. Supprimer un piement
paymentRouter.delete("/:paymentId", PaymentController.deletePayment);

export default paymentRouter;