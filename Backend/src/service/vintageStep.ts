import prisma from "../config/prisma";
import { VintageStep } from "../type/vintageStep";

export class VintageStepService {
    static async getAll() {
        try {
            const vintageSteps = await prisma.vintageStep.findMany({
                include: {
                    vintage: true,
                    step: true,
                },
            });
            return vintageSteps;
        } catch (error) {
            throw new Error("Erreur de récupération des étapes de vinification");
        }
    }

    static async getStepByVintage(label: string) {
        try {
            const vintage = await prisma.vintage.findFirst({
                where: { 
                    label: {
                        contains: label,
                        mode: "insensitive",
                    }
                 },
            });
            const vintageSteps = await prisma.vintageStep.findMany({
                where: { vintageId: vintage?.vintageId },
                include: {
                    step: true,
                },
            });
            return vintageSteps;
        } catch (error) {
            throw new Error("Erreur de récupération des étapes de vinification par cuvée");
        }
    }
    static async create(vintageStep: VintageStep) {
        try {
            const newVintageStep = await prisma.vintageStep.create({
                data: vintageStep,
            });
            return newVintageStep;
        } catch (error) {
            throw new Error("Erreur de création de l'étape de vinification");
        }
    }

    static async update(id: number, vintageStep: VintageStep) {
        try {
            const updatedVintageStep = await prisma.vintageStep.update({
                where: { vintageStepId: id },
                data: vintageStep,
            });
            return updatedVintageStep;
        } catch (error) {
            throw new Error("Erreur de mise à jour de l'étape de vinification");
        }
    }
    static async delete(id: number) {
        try {
            await prisma.vintageStep.delete({
                where: { vintageStepId: id },
            });
        } catch (error) {
            throw new Error("Erreur de suppression de l'étape de vinification");
        }
    }

    // static async getStepsByVintage(label: string) {
    //     try {
    //         const steps = await prisma.vintageStep.findMany({
    //             where: { label },
    //         });
    //         return steps;
    //     } catch (error) {
    //         throw new Error("Erreur de récupération des étapes de vinification par cuvée");
    //     }
    // }
}