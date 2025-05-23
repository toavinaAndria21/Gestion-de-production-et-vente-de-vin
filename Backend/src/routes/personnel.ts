import { Router } from "express";
import { personnelController } from "../controller/personnel";
const personnelRouter = Router();

personnelRouter.post("/login", personnelController.login);
personnelRouter.get("/", personnelController.getAllPersonnel);
personnelRouter.post("/", personnelController.createUSer);
personnelRouter.post("/login", personnelController.login);
personnelRouter.put("/update/:cin", personnelController.updateUser);
personnelRouter.delete("/delete/:cin", personnelController.deleteUser);
personnelRouter.get("/:cin", personnelController.getUserById);
personnelRouter.get("/search/:searchTerm", personnelController.getUserByName);
personnelRouter.get("/role/:cin", personnelController.getUserRole);
personnelRouter.put("/disable/:cin", personnelController.disableUser);

export default personnelRouter;