import { Router } from "express";
import personnelRouter from "./personnel";
import formatRouter from "./format";
import clientRouter from "./client";
import ingredientRouter from "./ingredient";
import stepRouter from "./step";
import vintageRouter from "./vintage";
import vintageStepRouter from "./vintageStep";

const router = Router();

router.use("/personnel", personnelRouter);
router.use("/format", formatRouter);
router.use("/client", clientRouter);
router.use("/ingredient", ingredientRouter);
router.use("/step", stepRouter);
router.use("/vintage", vintageRouter);
router.use("/vintageStep", vintageStepRouter);

export default router;