import { Request, Response } from "express";
import { StepService } from "../service/step";

export class StepController {
    static async getAll(req: Request, res: Response) {
        try {
            const steps = await StepService.getAll();
            res.status(200).json(steps);
        } catch (error) {
            console.error("Erreur de recuperation des étapes:", error);
            res.status(500).json({ message: "Erreur de recuperation des étapes" });
        }
    }

    static async create(req: Request, res: Response) {
        try {
            const step = req.body;
            const newStep = await StepService.create(step);
            res.status(201).json(newStep);
        } catch (error) {
            console.error("Erreur de creation d'une étape:", error);
            res.status(500).json({ message: "Erreur de creation d'une étape" });
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const step = req.body;
            const updatedStep = await StepService.update(id, step);
            res.status(200).json(updatedStep);
        } catch (error) {
            console.error("Erreur de mise à jour d'une étape:", error);
            res.status(500).json({ message: "Erreur de mise à jour d'une étape" });
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            await StepService.delete(id);
            res.status(204).send();
        } catch (error) {
            console.error("Erreur de suppression d'une étape:", error);
            res.status(500).json({ message: "Erreur de suppression d'une étape" });
        }
    }

    static async search(req: Request, res: Response) {
        try{
            const { label } = req.params;
            const steps = await StepService.getByLabel(label);
            if(steps.length === 0) {
                res.status(404).json({ message: "Aucune étape trouvée avec ce nom" });
            }else {
                res.status(200).json(steps);
            }
        }catch (error) {
            console.error("Erreur de recherche d'une étape:", error);
            res.status(500).json({ message: "Erreur de recherche d'une étape" });
        }
    }
}