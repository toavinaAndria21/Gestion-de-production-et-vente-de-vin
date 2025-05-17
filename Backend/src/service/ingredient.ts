import prisma from "../config/prisma";
import { Ingredient } from "../type/ingredient";

export class IngredientService {
    static async create(ingredient: Ingredient) {
        try {
            const newIngredient = await prisma.ingredient.create({
                data: ingredient,
            });
            return newIngredient;
        } catch (error) {
            throw new Error(`Erreur de creation de l'ingredient: ${error}`);
        }
    }

    static async getAll()  {
        try {
            const ingredients = await prisma.ingredient.findMany({
                include: {
                    productor: true,
                },
            });
            return ingredients;
        } catch (error) {
            throw new Error(`Erreur de recuperation des ingredients: ${error}`);
        }
    }
    static async update(ingredientId: number, ingredient: Ingredient) {
        try {
            const updatedIngredient = await prisma.ingredient.update({
                where: { ingredientId },
                data: ingredient,
            });
            return updatedIngredient;
        } catch (error) {
            throw new Error(`Erreur de mis à jour des ingredients: ${error}`);
        }
    }

    static async delete(ingredientId: number) {
        try {
            const deletedIngredient = await prisma.ingredient.delete({
                where: { ingredientId },
            });
            return deletedIngredient;
        } catch (error) {
            throw new Error(`Erreur de suppression de l'ingredient: ${error}`);
        }
    }

    static async getByLabel(label: string) {
        try {
            const ingredient = await prisma.ingredient.findFirst({
                where: { 
                    label: {
                        contains: label,
                        mode: 'insensitive',
                    },
                 },
                include:{
                    productor: true,
                }
            });
            return ingredient;
        } catch (error) {
            throw new Error(`Erreur de recuperation de l'ingredient: ${error}`);
        }
    }
}
