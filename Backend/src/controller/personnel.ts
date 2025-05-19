import { Request, Response } from 'express';
import { personnelService } from '../service/personnel';
import bcrypt from 'bcrypt';

export class personnelController {

  
    static async getAllPersonnel(req:Request, res:Response){
        try {
            const personnel = await personnelService.getAll()
            if(!personnel || personnel.length === 0) {
                 res.status(404).json({ message: 'Aucun personnel trouvé' });
            }else {
                res.status(200).json(personnel)
            }

        } catch (error) {
            res.status(500).json({ message: 'Erreur de recuperation des données' });
        }
    }
    
    static async createUSer(req:Request, res:Response){
        try {
            const { personnelId, name, lastName, email, role } = req.body;
            if(!personnelId || !name || !lastName || !email || !role) {
                res.status(400).json({ message: 'Tous les champs sont obligatoires' });
                return;
            }else {
                const password = await bcrypt.hash(personnelId, 10);
                const newUser = await personnelService.create({ personnelId, name, lastName, email, password, role });
                res.status(201).json(newUser);
            }
        } catch (error) {
            if(error instanceof Error && error.message === "Un utilisateur avec ce CIN existe déjà") {
                res.status(409).json({ message: 'Un utilisateur avec ce CIN existe déjà' });
            } else {
                res.status(500).json({ message: 'Une erreur est survenue lors de la creation' });
            }
        }
    }

    static async login(req:Request, res:Response){
        try {
            const { email, password } = req.body;
            const result = await personnelService.login(email, password);

            res.status(200).json({
                message: 'Connexion réussie',
                user: result.user,
                token: result.token,
            });
        } catch (error) {

            if (error instanceof Error && error.message === "User not found") {
                res.status(404).json({ message: 'Utilisateur non trouvé' });
            } else if (error instanceof Error && error.message === "Invalid password") {
                res.status(401).json({ message: 'Mot de passe invalide' });
            } else {
                res.status(500).json({ message: 'Une erreur est survenue lors de la connexion' });
            }
        }
    }

    static async updateUser(req: Request, res: Response) {
        try {
          const { cin } = req.params;
          const { name, lastName, email, password, role, personnelId } = req.body;
      
          const updatedUser = await personnelService.update(cin, {
            personnelId,
            name,
            lastName,
            email,
            password,
            role,
          });
      
          res.status(200).json({
            message: "Utilisateur mis à jour avec succès",
            data: updatedUser,
          });
        } catch (error) { 
            if (error instanceof Error && error.message === "Aucun utilisateur trouvé avec ce CIN") {
                res.status(404).json({message: "Aucun utilisateur trouvé avec ce CIN"});
            } else {
                res.status(500).json({
                message: "Une erreur est survenue lors de la mise à jour de l'utilisateur",
                error: error instanceof Error ? error.message : String(error)});
            }
        }
      }
    
    static async disableUser(req: Request, res: Response) {
        const { cin } = req.params; 
        try {
            const userUpdated = await personnelService.disable(cin);
            res.status(200).json({
                message: "Utilisateur désactivé avec succès",
                data: userUpdated,
            });
        } catch (error) {
            if (error instanceof Error && error.message === "Aucun utilisateur trouvé avec ce CIN") {
                res.status(404).json({message: "Aucun utilisateur trouvé avec ce CIN"});
            } else {
            res.status(500).json({
                message: "Une erreur est survenue lors de la mise à jour de l'utilisateur",
                error: error instanceof Error ? error.message : String(error),
            });  
        }
        }
    }
    
    static async deleteUser(req: Request, res: Response) {
        const {cin} = req.params;
        try {
            const deletedUser = await personnelService.delete(cin);
            res.status(200).json({
                message: "Utilisateur supprimé avec succès",
                data: deletedUser,
            });
        } catch (error) {
            res.status(500).json({
                message: "Une erreur est survenue lors de la suppression de l'utilisateur",
                error: error instanceof Error ? error.message : String(error),
            });
        }
    }

    static async getUserById(req: Request, res: Response) {
        const { cin } = req.params;
        try {
            const user = await personnelService.getById(cin);
            if (!user) {
                res.status(404).json({ message: "Utilisateur non trouvé" });
            }else {
                res.status(200).json(user);
            }
        } catch (error) {
            res.status(500).json({
                message: "Une erreur est survenue lors de la récupération de l'utilisateur",
                error: error instanceof Error ? error.message : String(error),
            });
        }
    }

    static async getUserByName(req: Request, res: Response) {
        const { searchTerm } = req.params;
        try {
            const users = await personnelService.getByNameAndLastName(searchTerm);
            if (users.length === 0) {
                res.status(404).json({ message: "Utilisateur non trouvé" });
            }else {
                res.status(200).json(users);
            }
        } catch (error) {
            res.status(500).json({
                message: "Une erreur est survenue lors de la récupération de l'utilisateur",
                error: error instanceof Error ? error.message : String(error),
            });
        }
    }

    static async getUserRole(req: Request, res: Response) {
        const { cin } = req.params;
        try {
            const role = await personnelService.getUserRole(cin);
            if (!role) {
                res.status(404).json({ message: "Utilisateur non trouvé" });
            }else {
                res.status(200).json(role);
            }
        } catch (error) {
            res.status(500).json({
                message: "Une erreur est survenue lors de la récupération de l'utilisateur",
                error: error instanceof Error ? error.message : String(error),
            });
        }
    }
      
}