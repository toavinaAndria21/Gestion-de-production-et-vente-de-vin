import { Router } from "express";
import { FormatController } from "../controller/format";

const formatRouter = Router();

formatRouter.get("/", FormatController.getAllFormat);
formatRouter.post("/", FormatController.createFormat);
formatRouter.put("/:id", FormatController.updateFormat);
formatRouter.delete("/:id", FormatController.deleteFormat);

export default formatRouter;