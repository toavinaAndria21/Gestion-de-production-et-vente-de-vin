import Router from 'express';
import { VintageStepController } from '../controller/vintageStep';

const vintageStepRouter = Router();
vintageStepRouter.get("/", VintageStepController.getAllVintageStep);
vintageStepRouter.post("/", VintageStepController.createVintageStep);
vintageStepRouter.put("/:id", VintageStepController.updateVintageStep);
vintageStepRouter.delete("/:id", VintageStepController.deleteVintageStep);
vintageStepRouter.get("/search/:label", VintageStepController.getStepByVintage);
export default vintageStepRouter;