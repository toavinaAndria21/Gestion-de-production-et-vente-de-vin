import { Request, Response } from "express";
import { VintageStepService } from "../service/vintageStep";

export class VintageStepController {
    static async getAllVintageStep(req:Request, res:Response){
        try {
            const vintageSteps = await VintageStepService.getAll();
            if(!vintageSteps || vintageSteps.length === 0)
                res.status(404).json(vintageSteps)
            else
                res.status(200).json(vintageSteps)
        } catch (error) {
            res.status(500).json({message:"Erreur de recuperation"});
        }
    }

    static async getStepByVintage(req:Request, res:Response) {
        try {
            const vintageLabel:string = req.params.label;
            const vintageSteps = await VintageStepService.getStepByVintage(vintageLabel);
            if(!vintageSteps || vintageSteps.length === 0)
                res.status(404).json(vintageSteps)
            else
                res.status(200).json(vintageSteps)
        } catch (error) {
            res.status(500).json({message:"Erreur de recuperation"});
        }
    }
    static async updateVintageStep(req:Request, res:Response) {
        try {
            const id:number = parseInt(req.params.id);
            const { vintageId, stepId, createdAt } = req.body;

            if (!vintageId || !stepId ) {
                res.status(400).json({ message: "Champs requis manquants" });
            }
    
            const updatedVintageStep = await VintageStepService.update(id, req.body);
            res.status(200).json({message:"Etape de vinification modifiée avec succes", data:updatedVintageStep})
        } catch (error) {  
            res.status(500).json({message:"Erreur lors de la modification"});
        }
    }

    static async createVintageStep(req:Request, res:Response) {
        try {
            const { vintageId, stepId } = req.body;
            if (!vintageId || !stepId) {
                res.status(400).json({ message: "Champs requis manquants" });
            }
            const newVintageStep = await VintageStepService.create({vintageId, stepId});
            res.status(201).json({message:"Etape de vinification crée avec succes", data:newVintageStep})
        } catch (error) {
            res.status(500).json({message:"Erreur de creation d'étape de vinification"});
        }
    }

    static async deleteVintageStep(req:Request, res:Response) {
        try {
            const vintageStepId:number = parseInt(req.params.id);
            await VintageStepService.delete(vintageStepId);
            res.status(200).json({message:"Etape de vinification supprimée avec succes"});
        } catch (error) {
            res.status(500).json({message:"Erreur lors la suppression d'étape de vinification"});
        }
    }
}