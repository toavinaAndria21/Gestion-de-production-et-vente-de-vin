import { Request, Response } from "express";
import { VintageService } from "../service/vintage";

export class VintageController {
    static async getAllVintage(req:Request, res:Response){
        try {
            const vintages = await VintageService.getAll();
            if(!vintages || vintages.length === 0)
                res.status(404).json(vintages)
            else
                res.status(200).json(vintages)
        } catch (error) {
            res.status(500).json({message:"Erreur de recuperation"});
        }
    }

    static async updateVintage(req:Request, res:Response) {
        try {
            const id:number = parseInt(req.params.id);
            const { label, quality, productorId } = req.body;

            if (!label || !quality || !productorId) {
                res.status(400).json({ message: "Champs requis manquants" });
            }
    
            const updatedVintage = await VintageService.update(id, req.body);
            res.status(200).json({message:"Cuvée modifiée   avec succes", data:updatedVintage})
        } catch (error) {  
            res.status(500).json({message:"Erreur lors de la modification"});
        }
    }

    static async createVintage(req:Request, res:Response) {
        try {
            const newVintage = await VintageService.create(req.body);
            res.status(201).json({message:"Cuvée crée avec succes", data:newVintage})
        } catch (error) {
            res.status(500).json({message:"Erreur de creation de cuvée"});
        }
    }

    static async deleteVintage(req:Request, res:Response) {
        try {
            const vintageId:number = parseInt(req.params.id);
            await VintageService.delete(vintageId);
            res.status(200).json({message:"Cuvée supprimée avec succes"});
        } catch (error) {
            res.status(500).json({message:"Erreur lors la suppression de cuvée"});
        }
    }

    static async searchVintage(req:Request, res:Response) {
        try {
            const label: string = req.params.label;
            const vintage = await VintageService.searchByLabel(label);
            if(!vintage || vintage.length === 0)
                res.status(404).json({message:"Cuvée non trouvée", data:vintage})
            else
                res.status(200).json({message:"Cuvée trouvée aves succes", data:vintage})
        } catch (error) {
            res.status(500).json({message:"Erreur lors de la recherche"});
        }
    }
}