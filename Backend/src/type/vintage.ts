import { IngredientUsed } from "./ingredient";
import { Step } from "./step";

export interface Vintage {
    vintageId?: number,
    productorId: string,
    label: string,
    quality: string,
    isComplete?: boolean,
    createdAt?: Date,
}
export interface VintageToCreate {
    vintageId?: number,
    productorId: string,
    label: string,
    quality: string,
    isComplete?: boolean,
    createdAt?: Date,
    steps: Step[],
    ingredients: IngredientUsed[] // Utilise IngredientUsed au lieu de Ingredient
  }
  
// {
//     "vintageId": 1,
//     "productorId": "234234234234",
//     "label": "Prestige",
//     "quality": "Prestige",
//     "createdAt": "2025-08-18T12:04:26.840Z"
// }