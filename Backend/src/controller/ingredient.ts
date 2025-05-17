import { IngredientService } from "../service/ingredient";
import { Request, Response } from "express";
export class IngredientController {
    static async createIngredient(req: Request, res: Response) {
        try {
            const { productorId, label, quantity, threshold, provider, unit } = req.body;
            const newIngredient = {
                productorId,
                label,
                quantity,
                threshold,
                provider,
                unit
            };
            const ingredient = await IngredientService.create(newIngredient);
            res.status(201).json({ message: "Ingredient crée avec succes", data: ingredient });
        } catch (error) {
            res.status(500).json({ message: "Erreur de creation de l'ingredient", error });
        }
    }

    static async getAllIngredients(req: Request, res: Response) {
        try {
            const ingredients = await IngredientService.getAll();
            res.status(200).json({ message: "Ingredients recuperés avec succes", data: ingredients });
        } catch (error) {
            res.status(500).json({ message: "Erreur de recuperation des ingredients", error });
        }
    }

    static async updateIngredient(req: Request, res: Response) {
        try {
            const { ingredientId } = req.params;
            const { productorId, label, quantity, threshold, provider } = req.body;
            const updatedIngredient = {
                productorId,
                label,
                quantity,
                threshold,
                provider
            };
            const ingredient = await IngredientService.update(parseInt(ingredientId), updatedIngredient);
            res.status(200).json({ message: "Ingredient mis à jour avec succes", data: ingredient });
        } catch (error) {
            res.status(500).json({ message: "Erreur de mise à jour de l'ingredient", error });
        }
    }

    static async deleteIngredient(req: Request, res: Response) {
        try {
            const { ingredientId } = req.params;
            await IngredientService.delete(parseInt(ingredientId));
            res.status(200).json({ message: "Ingredient supprimé avec succes" });
        } catch (error) {
            res.status(500).json({ message: "Erreur de suppression de l'ingredient", error });
        }
    }

    static async getIngredientByLabel(req: Request, res: Response) {
        try {
            const { label } = req.params;
            const ingredient = await IngredientService.getByLabel(label);
            if (ingredient) {
                res.status(200).json({ message: "Ingredient recuperé avec succes", data: ingredient });
            } else {
                res.status(404).json({ message: "Ingredient non trouvé" });
            }
        } catch (error) {
            res.status(500).json({ message: "Erreur de recuperation de l'ingredient", error });
        }
    }
}