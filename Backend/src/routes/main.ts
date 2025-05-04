import { Router } from "express";
import personnelRouter from "./personnel";
import formatRouter from "./format";
import clientRouter from "./client";
import ingredientRouter from "./ingredient";

const router = Router();

router.use("/personnel", personnelRouter);
router.use("/format", formatRouter);
router.use("/client", clientRouter);
router.use("/ingredient", ingredientRouter);

export default router;