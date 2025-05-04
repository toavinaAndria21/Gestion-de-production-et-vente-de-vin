import { Router } from "express";
import { personnelController } from "../controller/personnel";
const personnelRouter = Router();

personnelRouter.get("/", personnelController.getAllPersonnel);
personnelRouter.post("/create", personnelController.createUSer);
personnelRouter.post("/login", personnelController.login);
personnelRouter.put("/update/:cin", personnelController.updateUser);
personnelRouter.delete("/delete/:cin", personnelController.deleteUser);
personnelRouter.get("/:cin", personnelController.getUserById);
personnelRouter.get("/search/:searchTerm", personnelController.getUserByName);
personnelRouter.get("/role/:cin", personnelController.getUserRole);

export default personnelRouter;