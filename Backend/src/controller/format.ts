import { Request, Response } from "express";
import { FormatService } from "../service/format";

export class FormatController{
    static async getAllFormat(req: Request, res: Response) {
        try {
            const formats = await FormatService.getAll();
            if (!formats) {
                res.status(404).json({ message: "Aucun format disponible" });
            }else {
                res.status(200).json(formats);
            }
        } catch (error) {
            res.status(500).json({ error: "Erreur de recuperation des formats" });
        }
    }

    static async createFormat(req: Request, res: Response) {
        try {
            const { label, quantity, unit } = req.body;
            const format = await FormatService.create({label, quantity, unit});
            res.status(201).json(format);
        } catch (error) {
            res.status(500).json({ error: "Erreur de creation du format" });
        }
    }

    static async updateFormat(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { label, quantity, unit } = req.body;
            const format = await FormatService.update(parseInt(id), {label, quantity, unit});
            res.status(200).json(format);
        } catch (error) {
            res.status(500).json({ error: "Erreur de mise à jour du format" });
        }
    }
    static async deleteFormat(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await FormatService.delete(parseInt(id));
            res.status(200).json({ message: "Format supprimé avec succès" });
        } catch (error) {
            res.status(500).json({ error: "Erreur de suppression du format" });
        }
    }
}