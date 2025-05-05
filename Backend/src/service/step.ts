import prisma from "../config/prisma";
import { Step } from "../type/step";

export class StepService {
    static async getAll() {
        try {
            return await prisma.step.findMany({
                include: {
                    productor: true,
                    vintages: true
                }
            });
        }catch (error) {
            console.error("Erreur de recuperation des étapes:", error);
            throw new Error("Erreur de recuperation des étapes");
        }
    }

    static async create(step: Step) {
        try{
            const existingStep = await prisma.step.findFirst({
                where: {
                    label: step.label,
                },
            });

            if(existingStep) {
                throw new Error("Une étape avec ce nom existe déjà");
            }
            const newStep = await prisma.step.create({
                    data: {
                        productorId: step.productorId,
                        label: step.label,
                        duration: step.duration,
                        unit: step.unit,
                        description: step.description,
                    }
                });

            return newStep;
        }catch (error) {
            console.error("Erreur de creation d'une étape:", error);
            throw new Error("Erreur de creation d'une étape");
        }
        
    }

    static async update(id: number, step: Step) {
        try {
            const existingStep = await prisma.step.findUnique({
                where: {
                    stepId: id
                }
            });
            if (!existingStep) {
                throw new Error("Aucune étape trouvée avec cet ID");
            }
            const updatedStep = await prisma.step.update({
                where: { 
                    stepId: id,
                 },
                data: {
                    productorId: step.productorId,
                    label: step.label,
                    duration: step.duration,
                    unit: step.unit,
                    description: step.description,
                },
            });

            return updatedStep;
        } catch (error) {
            console.error("Erreur de mise à jour de l'étape:", error);
            throw new Error("Erreur de mise à jour de l'étape");
        }
      
    }

    static async delete(id: number) {
        try {
            const existingStep = await prisma.step.findUnique({
                where: {
                    stepId: id
                }
            });
            if (!existingStep) {
                throw new Error("Aucune étape trouvée avec cet ID");
            }
            const deletedStep = await prisma.step.delete({
                where: { 
                    stepId: id,
                 },
            });

            return deletedStep;
        } catch (error) {
            console.error("Erreur de suppression de l'étape:", error);
            throw new Error("Erreur de suppression de l'étape");
        }
    }

    static async getByLabel(label: string) {
        try {
            const step = await prisma.step.findMany({
                where: {
                    label: {
                        contains: label,
                        mode: "insensitive",
                    }
                }
            });
            if (!step) {
                throw new Error("Aucune étape trouvée avec ce nom");
            }
            return step;
        } catch (error) {
            console.error("Erreur de recuperation de l'étape:", error);
            throw new Error("Erreur de recuperation de l'étape");
        }
    }
}