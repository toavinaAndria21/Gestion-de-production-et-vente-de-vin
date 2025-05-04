import { Router } from "express";
import { StepController } from "../controller/step";

const stepRouter = Router();

stepRouter.get("/", StepController.getAll);
stepRouter.post("/", StepController.create);
stepRouter.put("/:id", StepController.update);
stepRouter.delete("/:id", StepController.delete);
stepRouter.get("/search/:label", StepController.search);

export default stepRouter;