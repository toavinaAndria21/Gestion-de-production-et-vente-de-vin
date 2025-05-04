import { Router } from "express";
import { ClientController } from "../controller/client";

const clientRouter = Router();

clientRouter.get("/", ClientController.getClients);
clientRouter.post("/", ClientController.createClient);
clientRouter.put("/:id", ClientController.updateClient);
clientRouter.delete("/:id", ClientController.deleteClient);

export default clientRouter;