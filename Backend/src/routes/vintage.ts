import { Router } from "express";
import { VintageController } from "../controller/vintage";

const vintageRouter = Router();

vintageRouter.get("/",VintageController.getAllVintage);
vintageRouter.get("/search/:label", VintageController.searchVintage);
vintageRouter.post("/", VintageController.createVintage);
vintageRouter.put("/:id", VintageController.updateVintage);
vintageRouter.delete("/:id", VintageController.deleteVintage);

export default vintageRouter;