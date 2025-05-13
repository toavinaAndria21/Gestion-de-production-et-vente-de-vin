import { Request, Response } from "express";
import { ProductService } from "../service/product";
import { ProductInput } from "../type/product";

export class ProductController {
    static async getAllProduct(req:Request, res:Response){
        try {
            const products = await ProductService.getAll();
            if(!products || products.length === 0)
                res.status(404).json(products)
            else
                res.status(200).json(products)
        } catch (error) {
            res.status(500).json({message:"Erreur de recuperation"});
        }
    }

    static async updateProduct(req:Request, res:Response) {
        try {
            const id:number = parseInt(req.params.id);
            const updatedProduct = await ProductService.update(id, req.body);
            res.status(200).json({message:"Produit modifié avec succes", data:updatedProduct})
        } catch (error) {  
            res.status(500).json({message:"Erreur lors de la modification"});
        }
    }
    static async createProduct(req:Request, res:Response) {
        try {
            const { vintageId, formatId, label, price, stock, type, image, category } = req.body;
            if (!vintageId || !formatId || !label || !price) {
                res.status(400).json({ message: "Champs requis manquants" });
            }
            const newProduct = await ProductService.create({vintageId, formatId, label, price, stock, type, image, category});
            res.status(201).json({message:"Produit crée avec succes", data:newProduct})
        } catch (error) {
            res.status(500).json({message:"Erreur de creation de produit"});
        }
    }

    static async deleteProduct(req:Request, res:Response) {
        try {
            const productId:number = parseInt(req.params.id);
            await ProductService.delete(productId);
            res.status(200).json({message:"Produit supprimé avec succes"});
        } catch (error) {
            res.status(500).json({message:"Erreur lors la suppression de produit"});
        }
    }

    static async searchProduct(req:Request, res:Response) {
        try {
            const label: string = req.params.label;
            const product = await ProductService.searchByLabel(label);
            if(!product || product.length === 0)
                res.status(404).json({message:"Produit non trouvé", data:product})
            else
                res.status(200).json({message:"Produit trouvé aves succes", data:product})
        } catch (error) {
            res.status(500).json({message:"Erreur de recuperation"});
        }
    }

    static async getProductByVintage(req:Request, res:Response) {
        try {
            const vintageLabel:string = req.params.label;
            const products = await ProductService.getProductsByVintage(vintageLabel);
            if(!products || products.length === 0)
                res.status(404).json(products)
            else
                res.status(200).json(products)
        } catch (error) {
            res.status(500).json({message:"Erreur de recuperation"});
        }
    }

    static async sellingProduct(req:Request, res:Response) {
        try {
            const { sellerId, products } : {sellerId: string, products:ProductInput[]} = req.body;

            if (!sellerId || !products || !Array.isArray(products)) {
                res.status(400).json({ error: "Champs manquants ou invalides." });
              }

            for (let product of products) {
                if (!product.productId || typeof product.quantity !== 'number' || product.quantity <= 0) {
                res.status(400).json({ error: "Produit invalide dans la liste." });
                }
            }
            const ticket = await ProductService.createTicketWithPayment(sellerId, products);

            res.status(201).json({ message: "Vente enregistrée avec succès", ticket });
          
        } catch (error) {
            res.status(500).json({message: "Erreur lors de l'opération"})
        }
    }
}