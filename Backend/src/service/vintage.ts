import prisma from "../config/prisma";
import { Vintage } from "../type/vintage";

export class VintageService {
    static async getAll() {
        return await prisma.vintage.findMany()
    }

    static async create(vintage: Vintage) {
        try {
            const newVintage = await prisma.vintage.create({
                data: vintage
            })
            return newVintage;
        } catch (error) {
            throw new Error(`Erreur de creation de la cuvée: ${error}`);       
        }
    }

    static async update(id:number, data:Vintage) {
        try {
            const existingVintage = await prisma.vintage.findUnique({
                where:{ 
                    vintageId: id
                 }
            })
            if(existingVintage){
                const vintage = await prisma.vintage.update({
                    where:{ vintageId: id },
                    data: { ...data }
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
                }
            })
            return vintage;
        } catch (error) {
            throw new Error('Erreur lors de la recherche');
        }
    }
}