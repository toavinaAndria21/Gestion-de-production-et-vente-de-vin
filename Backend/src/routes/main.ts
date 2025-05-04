import { Router } from "express";
import personnelRouter from "./personnel";
const router = Router();

router.use("/personnel", personnelRouter);

export default router;