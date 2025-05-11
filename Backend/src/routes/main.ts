import { Router } from "express";
import personnelRouter from "./personnel";
import formatRouter from "./format";
import clientRouter from "./client";
import ingredientRouter from "./ingredient";
import stepRouter from "./step";
import vintageRouter from "./vintage";
import vintageStepRouter from "./vintageStep";
import productRouter from "./product";
import ticketRouter from "./ticket";
import ticketLineRouter from "./ticketLine";
import deliveryRouter from "./delivery";
import paymentRouter from "./payment";

const router = Router();

router.use("/personnel", personnelRouter);
router.use("/format", formatRouter);
router.use("/client", clientRouter);
router.use("/ingredient", ingredientRouter);
router.use("/step", stepRouter);
router.use("/vintage", vintageRouter);
router.use("/vintageStep", vintageStepRouter);
router.use("/product", productRouter);
router.use("/ticket", ticketRouter);
router.use("/ticketLine", ticketLineRouter);
router.use("/delivery", deliveryRouter);
router.use("/payment", paymentRouter);

export default router;