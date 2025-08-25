import { Router } from "express";
import { PaymentController } from "../controller/payment";

const paymentRouter = Router();

paymentRouter.post("/", PaymentController.createPayment);

paymentRouter.get("/:ticketId", PaymentController.getPaymentByTicket);

paymentRouter.put("/:paymentId", PaymentController.updatePayment);

paymentRouter.delete("/:paymentId", PaymentController.deletePayment);

export default paymentRouter;