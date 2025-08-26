import prisma from "../config/prisma";
import { Vintage, VintageToCreate } from "../type/vintage";

export class VintageService {
  static async getAll() {
    return await prisma.vintage.findMany({
      include: {
        steps: {  
          include: {
            step: true
          }
        },
        ingredients: {  
          include: {
            ingredient: true
          }
        }
      }
    });
  }
    static async create(vintage: VintageToCreate) {
        try {
      // console.log(JSON.stringify(vintage))

          // Utilisation d'une transaction pour garantir la cohérence des données
          const result = await prisma.$transaction(async (tx) => {
            // 1. Créer la cuvée
            const newVintage = await tx.vintage.create({
              data: {
                productorId: vintage.productorId,
                label: vintage.label,
                quality: vintage.quality,
                isComplete: vintage.isComplete || false
              }
            });
      
            // 2. Associer les étapes à la cuvée
            if (vintage.steps && vintage.steps.length > 0) {
              const vintageSteps = vintage.steps.map(step => ({
                stepId: step.stepId!,
                vintageId: newVintage.vintageId
              }));
      
              await tx.vintageStep.createMany({
                data: vintageSteps
              });
            }
      
            // 3. Associer les ingrédients à la cuvée et mettre à jour les quantités
            if (vintage.ingredients && vintage.ingredients.length > 0) {
              for (const ingredientData of vintage.ingredients) {
                // Vérifier que l'ingrédient existe et qu'il y a assez de stock
                const existingIngredient = await tx.ingredient.findUnique({
                  where: { ingredientId: ingredientData.ingredientId! }
                });
      
                if (!existingIngredient) {
                  throw new Error(`Ingrédient avec l'ID ${ingredientData.ingredientId} introuvable`);
                }
      
                // La quantité utilisée doit être fournie dans les données de la requête
                const quantityUsed = ingredientData.quantityUsed;
                if (!quantityUsed || quantityUsed <= 0) {
                  throw new Error(`Quantité utilisée manquante ou invalide pour l'ingrédient ${existingIngredient.label}`);
                }
      
                // Vérifier si la quantité demandée est disponible
                if (Number(existingIngredient.quantity) < quantityUsed) {
                  throw new Error(`Stock insuffisant pour l'ingrédient ${existingIngredient.label}. Stock disponible: ${existingIngredient.quantity}, quantité demandée: ${quantityUsed}`);
                }
      
                // Créer l'association VintageIngredient
                await tx.vintageIngredient.create({
                  data: {
                    ingredientId: ingredientData.ingredientId!,
                    vintageId: newVintage.vintageId,
                    quantityUsed: quantityUsed
                  }
                });
      
                // Mettre à jour la quantité de l'ingrédient
                const newQuantity = Number(existingIngredient.quantity) - quantityUsed;
                
                await tx.ingredient.update({
                  where: { ingredientId: ingredientData.ingredientId! },
                  data: { quantity: newQuantity }
                });
              }
            }
      
            // Retourner la cuvée créée avec ses relations
            return await tx.vintage.findUnique({
              where: { vintageId: newVintage.vintageId }
            });
          });
      console.log(JSON.stringify(result))
          return result;
        } catch (error) {
          throw new Error(`Erreur de création de la cuvée: ${error}`);
        }
      }
    static async update(id:number, data:Partial<VintageToCreate>) {
        try {

            const existingVintage = await prisma.vintage.findUnique({
                where:{ 
                    vintageId: id
                 }
            })

          console.log("abbbbbbbbbbbbbbbbbbbbbbbbbbbb aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
          console.log(JSON.stringify(data))

            if (data.steps && data.steps.length > 0) {
              console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
            }

            if(existingVintage){

              const dataToChange = {
                productorId: data.productorId !== undefined ? data.productorId : existingVintage.productorId,
                label: data.label !== undefined ? data.label : existingVintage.label,
                quality: data.quality !== undefined ? data.quality : existingVintage.quality,
                status: data.status !== undefined ? data.status : existingVintage.status,
                globalProgress: data.globalProgress !== undefined ? data.globalProgress : existingVintage.globalProgress,
              }
              
                const vintage = await prisma.vintage.update({
                    where:{ vintageId: id },
                    data: { 
                      productorId: dataToChange.productorId,
                      label: dataToChange.label,
                      quality: dataToChange.quality,
                      status: dataToChange.status,
                      globalProgress: dataToChange.globalProgress
                    }
                })
                return vintage;
            }else {
                throw new Error('Cuvée inexistante');
            }
        } catch (error) {
            throw new Error('Erreur lors de la mise à jour de la cuvée');
        }
    }

    static async delete(id:number) {
        try {

           await prisma.vintageStep.deleteMany({
             where:{
                vintageId: id
             }
           })

           await prisma.vintageIngredient.deleteMany({
             where:{
                vintageId: id
             }
           })

          await prisma.vintage.delete({
              where:{
                  vintageId: id
              }
          })
            return;
        } catch (error) {
            throw new Error('Erreur lors de la suppresion');
        }
    }

    static async searchByLabel(label:string) {
        try {
            const vintage = await prisma.vintage.findMany({
                where:{
                    label:{
                        contains:label,
                        mode: "insensitive"
                    }
                },
                include:{
                    products: true
                }
            })
            return vintage;
        } catch (error) {
            throw new Error('Erreur lors de la recherche');
        }
    }
}