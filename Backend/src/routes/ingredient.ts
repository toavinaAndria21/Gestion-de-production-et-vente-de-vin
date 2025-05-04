import { Router } from "express";
import { IngredientController } from "../controller/ingredient";

const ingredientRouter = Router();

ingredientRouter.get("/", IngredientController.getAllIngredients);
ingredientRouter.post("/", IngredientController.createIngredient);
ingredientRouter.put("/:ingredientId", IngredientController.updateIngredient);
ingredientRouter.delete("/:ingredientId", IngredientController.deleteIngredient);
ingredientRouter.get("/label/:label", IngredientController.getIngredientByLabel);

export default ingredientRouter;