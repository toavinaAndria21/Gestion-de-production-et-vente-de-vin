export interface Ingredient {
  ingredientId?: number;
  productorId: string;
  label: string;
  quantity: number;
  threshold: number;
  provider: string;
  createdAt?: Date; 
}