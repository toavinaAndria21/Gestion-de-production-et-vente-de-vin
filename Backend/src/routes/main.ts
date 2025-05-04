import { Router } from "express";
import personnelRouter from "./personnel";
import formatRouter from "./format";
import clientRouter from "./client";

const router = Router();

router.use("/personnel", personnelRouter);
router.use("/format", formatRouter);
router.use("/client", clientRouter);

export default router;