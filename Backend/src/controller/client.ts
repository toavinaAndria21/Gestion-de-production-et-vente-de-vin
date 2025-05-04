import { Request, Response } from "express";
import { ClientService } from "../service/client";
export class ClientController {
    static async getClients(req: Request, res: Response) {
        try {
            const clients = await ClientService.getAll();
            res.status(200).json(clients);
        } catch (error) {
            res.status(500).json({ error: "Erreur de recuperation des clients" });
        }
    }

    static async createClient(req: Request, res: Response) {
        try {
            const { name, lastName, adress, email, password } = req.body;
            if (!name || !lastName || !adress || !email || !password) {
                res.status(400).json({ error: "Les champs sont incompletes" });
            }else {
                const client = await ClientService.create(req.body);
                res.status(201).json(client);
            }
        } catch (error) {
            res.status(500).json({ error: "Erreur de creation de client" });
        }
    }

    static async updateClient(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { name, lastName, adress, email, password } = req.body;
            if (!name || !lastName || !adress || !email || !password) {
                res.status(400).json({ error: "Les champs sont incompletes" });
            }else {
                const client = await ClientService.update(parseInt(id), req.body);
                res.status(200).json(client);
            }
        } catch (error) {
            res.status(500).json({ error: "Erreur de mise a jour de client" });
        }
    }
    static async deleteClient(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await ClientService.delete(parseInt(id));
            res.status(200).json({ message: "Client supprimé avec succès" });
        } catch (error) {
            res.status(500).json({ error: "Erreur de suppression de client" });
        }
    }
}