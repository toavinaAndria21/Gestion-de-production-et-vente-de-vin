export interface Ingredient {
  ingredientId?: number;
  productorId: string;
  label: string;
  quantity: number;
  unit: string;
  threshold: number;
  provider: string;
  createdAt?: Date; 
}